import { useState, useEffect } from 'react'
import '../styles/github-contributions.css'

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface ApiResponse {
  total?: {
    lastYear?: number
    [key: string]: number | undefined
  }
  contributions?: ContributionDay[]
}

interface GithubContributionsProps {
  username?: string
}

export default function GithubContributions({ username = 'SwalihNijad' }: GithubContributionsProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [totalCount, setTotalCount] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null)

  useEffect(() => {
    let isCancelled = false

    // Clean up any old localStorage key from testing
    try {
      localStorage.removeItem('github_username')
    } catch {
      // Ignore
    }

    async function fetchContributions() {
      try {
        setLoading(true)
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
        if (!res.ok) throw new Error('Failed to fetch contributions')
        const data: ApiResponse = await res.json()

        if (!isCancelled && data.contributions && data.contributions.length > 0) {
          setContributions(data.contributions)
          const total = data.total?.lastYear ?? data.contributions.reduce((acc, curr) => acc + curr.count, 0)
          setTotalCount(total)
        }
      } catch (err) {
        console.error('Error loading GitHub contributions:', err)
      } finally {
        if (!isCancelled) {
          setLoading(false)
        }
      }
    }

    fetchContributions()

    return () => {
      isCancelled = true
    }
  }, [username])

  return (
    <section className="github-contributions-section" aria-label="GitHub Contributions">
      <div className="github-card">
        {/* Header */}
        <div className="github-header">
          <div className="github-user-info">
            <div className="github-icon-badge" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
            <div className="github-title-group">
              <h3>GitHub Activity</h3>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="github-user-link"
              >
                @{username}
              </a>
            </div>
          </div>

          <div className="github-stats-pill">
            <span className="github-stats-count">{loading ? '...' : (totalCount ?? 0)}</span>
            <span>contributions in the last year</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="github-calendar-scroll">
          <div className="github-grid" role="grid" aria-label="Contribution Calendar">
            {contributions.map((day) => (
              <div
                key={day.date}
                className={`calendar-cell cell-level-${day.level}`}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
                aria-label={`${day.count} contributions on ${day.date}`}
              >
                {hoveredDay?.date === day.date && (
                  <div className="cell-tooltip" role="tooltip">
                    {day.count} {day.count === 1 ? 'contribution' : 'contributions'} on {day.date}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Profile Link & Legend */}
        <div className="github-footer">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-user-link"
            style={{ fontWeight: 500 }}
          >
            View GitHub Profile ↗
          </a>

          <div className="github-legend">
            <span>Less</span>
            <span className="legend-cell cell-level-0"></span>
            <span className="legend-cell cell-level-1"></span>
            <span className="legend-cell cell-level-2"></span>
            <span className="legend-cell cell-level-3"></span>
            <span className="legend-cell cell-level-4"></span>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  )
}
