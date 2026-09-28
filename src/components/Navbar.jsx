import { BriefcaseBusiness, Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  return (
    <header className="navbar">
      <Logo light />
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <a href="#creators">Creators</a>
      </nav>
      <div className="nav-actions">
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Join Us</Link>
        <BriefcaseBusiness size={18} />
      </div>
      <button className="menu-button" aria-label="Open menu">
        <Menu size={22} />
      </button>
    </header>
  )
}
