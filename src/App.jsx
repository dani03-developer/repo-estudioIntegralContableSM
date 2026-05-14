import './App.css'
import SmoothScroll from './components/animations/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Us from './components/pages/Us';
import Contact from './components/pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <SmoothScroll>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/nosotros' element={<Us />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
      <Footer/>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
