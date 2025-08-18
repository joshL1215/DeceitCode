import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/Home" />
          <Route path="/workspace" />
          <Route path="/settings" />
        </Route>
      </Routes>
    </div>

  )
}


export default App
