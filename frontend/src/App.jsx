import React, { useEffect } from 'react'

// AOS Initalization 
import AOS from 'aos';
import 'aos/dist/aos.css';

//Component
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home'
import Error from './pages/Error';

function App() {

  // Calling AOS object ,its help basically for animation
  useEffect(()=> {AOS.init() },[])

  return (
   <>
   
      {/* Navbar Component  */}
      <Navbar />

      {/* Home Page  */}
      <Home />

      {/* Error Page  */}
      {/* <Error /> */}

      {/* Footer Component  */}
      <Footer />
   </>
  )
}

export default App
