import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';
import Navbar from './Components/Navbar';
import { Container } from 'react-bootstrap';
import ContextProvider from './Context/ShopingCartContext';
function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Container className='mb-4'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} />
        </Routes>

      </Container>

    </ContextProvider>
  );
}

export default App;
