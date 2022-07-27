import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from './Components/DetailsPage/DetailPage'
import MainPage from './Components/MainPage/Mainpage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/country/:code' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App