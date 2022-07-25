import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { PageMain } from '../../pages'

export const LayoutRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<PageMain />} />
      </Routes>
    </Router>
  )
}

LayoutRoutes.displayName = 'LayoutRoutes'
