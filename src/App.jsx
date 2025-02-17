import { useState } from 'react'
import './css/App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/movieContext';

function App() {

  return (
    <>
      <div>
        <MovieProvider>
        <NavBar></NavBar>
        <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
      </MovieProvider>
      </div>

    </>
    
  )
}

export default App;
