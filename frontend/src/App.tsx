import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LandingPage from './pages/LandingPage'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { getToken } from './utils/auth'

const ProtectedRoute = ({ children } : { children: React.ReactNode}) => {
  const token = getToken()

  if (!token) {
    return <Navigate to="/sign-in" replace />
  }

  return children
}

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<Signin />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
