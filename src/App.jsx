import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/login'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home'

function App() {


  return (
    <>
    {/* <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<HomePage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />

     
    </Routes>
    <Footer/>
   */}
   <LoginPage/>
    </>
  )
}

export default App
