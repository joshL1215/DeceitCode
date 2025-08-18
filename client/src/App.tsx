import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/Home" />
        <Route path="/workspace" />
        <Route path="/settings" />
      </Routes>
    </div>

  )
}


export default App
