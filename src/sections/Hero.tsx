import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Ongoing Creative Ambient Animations */}
      <div className="hero-ambient-glow" aria-hidden="true">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
        <div className="hero-orbit-ring">
          <div className="orbit-satellite"></div>
        </div>
        <div className="hero-orbit-ring-inner">
          <div className="orbit-satellite-2"></div>
        </div>
      </div>

      {/* Main Centered Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="sparkle-icon">✦</span>
          <span>Creative Development &amp; Design</span>
        </div>

        <h1 className="hero-name">Swalih Nijad</h1>

        <p className="hero-desc">
          Web development, design, and visual storytelling. A blend of technical skills and creative interests, driven by curiosity, experimentation, and the desire to build things.
        </p>
      </div>

      {/* Ongoing Minimal Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  )
}

