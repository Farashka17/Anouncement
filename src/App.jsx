import { useState } from 'react'
import './App.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/login'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home'
import SingleNews from './components/singleNews'
import FavNewsPage from './pages/favNews/favNews'
import AddNewsPage from './pages/addNews/addNews'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<HomePage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/favNews" element={<FavNewsPage/>} />
      <Route path="/addNews" element={<AddNewsPage/>} />


    </Routes>
    <Footer/>
  {/* <SingleNews/> */}

    </>
  )
}

export default App
