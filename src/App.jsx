import './App.css'
import SmoothScroll from './components/animations/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Us from './components/pages/Us';
import Contact from './components/pages/Contact';
import ServiceDetailContainer from './components/pages/ServiceDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/pages/CartContainer';
import Error from './components/pages/Error';
function App() {

  return (
    <BrowserRouter basename="/repo-estudioIntegralContableSM/">
      <SmoothScroll>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/nosotros' element={<Us />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/servicio/:id' element={<ServiceDetailContainer />} />
        <Route path='/carrito' element={<CartContainer />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
       </CartProvider>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
