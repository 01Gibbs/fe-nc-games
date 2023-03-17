import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/User'

export default function Nav() {
  const { user } = useContext(UserContext)

  return (
    <nav className="navbar-container">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/reviews" className="nav-link ">
            Reviews
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link ">
            Users
          </Link>
        </li>
        <li className="nav-item">Logged in as: {user.username}</li>
      </ul>
    </nav>
  )
}
