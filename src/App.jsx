import About from './component/About'
import Carrers from './component/Carrers'
import Community from './component/Community'
import Footer from './component/Footer'
import Header from './component/Header'
import './style/App.sass'

function App() {
  

  return (
    <div className="App">
     <Header />
     <About />
     <Community />
     <Carrers />
     <Footer />
    </div>
  )
}

export default App
