import Navbar from './components/Navbar'
import Clock from './components/Clock'
import Hero from './sections/Hero'
import TechStack from './sections/TechStack'
import GithubContributions from './components/GithubContributions'

function App() {
  return (
    <>
      <Navbar />
      <Clock />
      <main>
        <Hero />
        <TechStack />
        <GithubContributions username="SwalihNijad" />
      </main>
    </>
  )
}

export default App
