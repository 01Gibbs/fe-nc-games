import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar-container">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  )
}
