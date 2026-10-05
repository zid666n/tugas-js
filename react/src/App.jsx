import { useEffect, useState } from 'react'
import DataPeserta from './components/DataPeserta'
import { peserta } from './components/peserta'
import FormPeserta from './components/FormPeserta'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import MainLayout from './components/layouts/MainLayout'
import UserPage from './pages/UserPage'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login" replace />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route element={<MainLayout/>}>
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/user' element={<UserPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
