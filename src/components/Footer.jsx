import Logo from './Logo'

const columns = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Stay up to date with our latest features and releases by joining our newsletter.</p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Search</button>
          </form>
          <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
        </div>
        {columns.map((items) => (
          <div className="footer-column" key={items[0]}>
            {items.map((item) => (
              <a href="#" key={item}>{item}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  )
}
