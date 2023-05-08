
import './App.css'
import WhatsappCircle from './components/WhatsappCircle'
import Contact from './pages/contact/Contact'
import Galery from './pages/galery/Galery'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Footer from './components/Footer'


function App() {


  return (
    <div> 
      <WhatsappCircle />
      <Home />
      <Services />
      <Galery />
      <Contact />
      <Footer />
      

    </div>
  )
}

export default App
