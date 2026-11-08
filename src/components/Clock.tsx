import { useState, useEffect } from 'react'
import '../styles/clock.css'

export default function Clock() {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')
  const dayName = time.toLocaleDateString(undefined, { weekday: 'short' })

  return (
    <aside className="rhs-clock" aria-label="Current local time">
      <div className="clock-content">
        <span className="live-indicator" aria-hidden="true"></span>
        <time className="clock-digits" dateTime={time.toISOString()}>
          {hours}<span className="clock-colon">:</span>{minutes}<span className="clock-colon">:</span>{seconds}
        </time>
        <span className="clock-badge">{dayName}</span>
      </div>
    </aside>
  )
}

