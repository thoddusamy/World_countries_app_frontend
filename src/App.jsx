import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from './Components/ContextApi'
import DetailPage from './Components/DetailsPage/DetailPage'
import MainPage from './Components/MainPage/Mainpage'

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/country/:code' element={<DetailPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App