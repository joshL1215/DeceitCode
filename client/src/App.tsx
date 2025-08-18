import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/Home" />
        <Route path="/workspace" />
        <Route path="/settings" />
      </Route>
    </Routes>

  )
}


export default App
