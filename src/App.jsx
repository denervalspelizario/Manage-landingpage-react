import { useState } from 'react';
import About from './component/About'
import Carrers from './component/Carrers'
import Community from './component/Community'
import Footer from './component/Footer'
import Header from './component/Header'
import './style/App.sass'

function App() {
  const [ openMode, setOpenMode ] = useState(false);

    const alterMenu = () => {
        setOpenMode(!openMode)
    }  

  return (
    <div className="App">
     <Header alterMenu={alterMenu} openMode={openMode} />
     <About />
     <Community />
     <Carrers />
     <Footer />
    </div>
  )
}

export default App
