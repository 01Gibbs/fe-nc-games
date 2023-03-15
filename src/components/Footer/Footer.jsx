import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-container">
      <Link to="/" className="footer-link link">
        Top of Page
      </Link>
      <h2 className="footer">Footer</h2>
    </footer>
  )
}
