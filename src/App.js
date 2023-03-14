import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Nav/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import ReviewList from './components/Reviews/ReviewList'
import ReviewSingle from './components/Reviews/ReviewSingle'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <section className="App">
      <Header />
      <Nav />
      <SearchBar />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<ReviewSingle />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
