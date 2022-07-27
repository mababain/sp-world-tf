import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PageMain } from './pages'
import { OAuth } from './components/OAuth/OAuth'

export const App: React.FC = () => {
  return (
    <Router>
      <OAuth />

      <Routes>
        <Route path={'/'} element={<PageMain />} />
      </Routes>
    </Router>
  )
}

App.displayName = 'App'
