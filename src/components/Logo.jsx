import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link className="logo" to="/">
      <span className="logo-mark">b</span>
      <span className={light ? 'logo-text light' : 'logo-text'}>ByteSpace</span>
    </Link>
  )
}
