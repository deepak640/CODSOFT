import { useEffect, useState } from 'react'
import './App.css'
import AOS from 'aos';
import React, { Suspense } from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
import Loader from "./assets/Loader";
import { Home, About, Contact, Projects } from "./assets/Index.jsx";

import 'aos/dist/aos.css';
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: false
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/project' element={<Projects />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
