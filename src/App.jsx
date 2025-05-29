
import { useState } from 'react';
import Header from './components/Header'
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header><Homepage/></Header>}/>

        <Route path='/dashboard' element={<Header><Dashboard/></Header>}/>
        <Route path='/product' element={<Header><Products/></Header>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
