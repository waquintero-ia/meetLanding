import './App.css'
import Content from './component/Content'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navigation from './component/Navigation'

function App() {

  return (
    <>
      <header>
        <Navigation />     
      </header>
      <main>
        <Hero />
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
