import { useState } from 'react'
import '../styles/tech-stack.css'

interface SkillItem {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools'
  iconColor: string
  icon: () => React.JSX.Element
}

const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    iconColor: '#0ea5e9',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.8">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#0ea5e9" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    iconColor: '#3178c6',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178c6" />
        <path d="M5 9h6m-3 0v10M13.5 16.5c1 1.2 2.5 1.5 3.5.8 1-.7.8-2-.3-2.5l-1.4-.7c-1.3-.6-1.8-2-.8-3.1 1-1.1 2.8-.9 3.8.3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    iconColor: '#f7df1e',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#f7df1e" />
        <path d="M9 12.5v5c0 1.2-.8 1.8-1.8 1.5-.7-.2-1.2-.8-1.2-1.5M14.5 17c.8 1.2 2 1.6 3 .9.8-.6.7-1.8-.2-2.3l-1.3-.7c-1.2-.6-1.6-1.8-.8-2.8.9-1 2.5-.9 3.3.2" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    iconColor: '#e34f26',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e34f26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 3l1.8 16.5L12 21l6.2-1.5L20 3H4z" />
        <path d="M8 8h8M7.5 12h8.5m-8 4h5.5" />
      </svg>
    ),
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    iconColor: '#22c55e',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <circle cx="12" cy="12" r="3" fill="#22c55e" />
      </svg>
    ),
  },
  {
    name: 'Express.js',
    category: 'Backend',
    iconColor: '#18181b',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16M13 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    iconColor: '#336791',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    iconColor: '#10b981',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 6 8.5 6 13.5c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5-6-11.5-6-11.5z" />
        <path d="M12 2v19" />
      </svg>
    ),
  },

  // Tools & Workflow
  {
    name: 'Git & GitHub',
    category: 'Tools',
    iconColor: '#f05032',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f05032" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6m3-3h9" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    category: 'Tools',
    iconColor: '#bd34fe',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#bd34fe" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h8l-2 8 12-12h-8l2-8z" />
      </svg>
    ),
  },
  {
    name: 'Postman',
    category: 'Tools',
    iconColor: '#ff6c37',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff6c37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
]

type FilterType = 'All' | 'Frontend' | 'Backend' | 'Tools'

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')

  const filteredSkills = activeFilter === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeFilter)

  return (
    <section id="skills" className="tech-stack-section" aria-label="Skills & Technologies">
      {/* Section Header */}
      <div className="tech-stack-header">
        <span className="section-tag">
          <span className="section-tag-dot"></span>
          Tech Stack &amp; Skills
        </span>
        <h2 className="section-title">Technologies I Work With</h2>
        <p className="section-subtitle">
          Core technologies, frameworks, and developer tools I actively use to engineer full-stack web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="tech-filter-tabs" role="tablist" aria-label="Filter tech stack">
        {(['All', 'Frontend', 'Backend', 'Tools'] as FilterType[]).map((tab) => (
          <button
            key={tab}
            type="button"
            className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
            onClick={() => setActiveFilter(tab)}
            role="tab"
            aria-selected={activeFilter === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon
          return (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon-wrap" aria-hidden="true">
                <Icon />
              </div>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
