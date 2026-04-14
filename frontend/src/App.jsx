import React from 'react'
import { Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import Signin from './pages/Signin'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<Signin />} />
    </Routes>
  )
}

export default App
