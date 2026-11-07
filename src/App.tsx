import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '7rem 2rem 4rem', minHeight: '150vh' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.75rem' }}>
            Swalih Nijad
          </h1>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6 }}>
            Web development, design, and visual storytelling. A blend of technical skills and creative interests, driven by curiosity, experimentation, and the desire to build things.
          </p>
        </div>
      </main>
    </>
  )
}

export default App
