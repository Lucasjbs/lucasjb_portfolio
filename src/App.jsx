import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import MainPg from './pages/Main'
import ProjectPg from './pages/Project'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPg />} />
      <Route path="/project/:id" element={<ProjectPg />} />
      <Route path="*" element={<MainPg />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App