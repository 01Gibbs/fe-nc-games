import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Nav/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <section className="App">
      <Header />
      <Nav />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
