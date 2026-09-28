import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <>
      <section className="not-found blue-grid">
        <div className="container">
          <Navbar />
          <div className="not-found-content">
            <strong>404</strong>
            <h1>The page you are looking for doesn’t exist</h1>
            <p>Try to use a correct url or go back to homepage to start again</p>
            <Link className="lime-button" to="/">Back to Home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
