import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '7rem 2rem 4rem', minHeight: '150vh' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 600, color: '#1a1a1a', marginBottom: '0.75rem' }}>
            Portfolio
          </h1>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6 }}>
            Warm graph-paper background & floating dock navbar active.
          </p>
        </div>
      </main>
    </>
  )
}

export default App
