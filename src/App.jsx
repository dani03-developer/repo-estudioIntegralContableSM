import './App.css'
import SmoothScroll from './components/animations/SmoothScroll';
import Home from './components/pages/Home.jsx';
function App() {

  return (
    <>
      <SmoothScroll>
        <Home />
      </SmoothScroll>
    </>
  )
}

export default App
