import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Login from './Auth/Login/Login'
import Register from './Auth/Login/Register/Register'
import TenderList from './Pages/Buyer/Tender/TenderList'
import BuyerWorkspace from './Pages/Buyer/Tender/BuyerWorkspace'
import CreateTender from './Pages/Buyer/Tender/CreateTender'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/buyer-workspace" element={<BuyerWorkspace />} />
          <Route path="/my-requirements" element={<BuyerWorkspace />} />
          <Route path="/browse-requirements" element={<TenderList />} />
          <Route path="/tenders" element={<TenderList />} />
          <Route path="/requirements" element={<TenderList />} />
          <Route path="/post-requirement" element={<CreateTender />} />
          <Route path="/create-tender" element={<CreateTender />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App