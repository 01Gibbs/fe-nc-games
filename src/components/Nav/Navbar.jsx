import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav-container">
      <ul>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  )
}
