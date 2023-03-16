import './App.css'
import { useContext } from 'react'
// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from './context/User'
import Header from './components/Header/Header'
import Nav from './components/Nav/Navbar'
// import SearchBar from './components/SearchBar/SearchBar'
import ReviewList from './components/Reviews/ReviewList'
import UserList from './components/User/UserList'
import ReviewSingle from './components/Reviews/ReviewSingle'
import Footer from './components/Footer/Footer'

function App() {
  const userValueFromContext = useContext(UserContext)
  console.log(userValueFromContext)

  // const [loggedInUser, setLoggedInUser] = useState('')

  return (
    <section className="App">
      <Header />
      <Nav />
      {/* <SearchBar /> */}
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<ReviewSingle />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
