import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function AuthLayout({ type = 'login' }) {
  const isSignup = type === 'signup'

  return (
    <main className="auth-page blue-grid">
      <div className="auth-shell">
        <section className="auth-art">
          <Logo light />
          <div>
            <h2>{isSignup ? 'Sign up and come in' : 'Sign in with ease'}</h2>
            <p>
              {isSignup
                ? 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.'
                : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}
            </p>
          </div>
          <div className="stacked-cards">
            <div className="mini-course muted">Build Digital Asset</div>
            <div className="mini-course main">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80" alt="" />
              <h3>the Power of Big Data</h3>
              <span>$25/lifetime</span>
            </div>
            <div className="happy-card">Happy Students<br /><strong>2K+</strong></div>
          </div>
        </section>
        <section className="auth-card">
          <p className="eyebrow">{isSignup ? 'Create an Account' : 'Sign In'}</p>
          <h1>{isSignup ? 'Welcome to ByteSpace' : 'Welcome Back'}</h1>
          <form>
            {isSignup ? (
              <label>
                Full Name
                <input type="text" placeholder="Jamie Davis" />
              </label>
            ) : null}
            <label>
              Email
              <input type="email" placeholder="designer@example.com" />
            </label>
            <label>
              Password
              <input type="password" placeholder="********" />
            </label>
            <button className="lime-button auth-submit" type="button">{isSignup ? 'Continue' : 'Sign In'}</button>
          </form>
          {!isSignup ? (
            <>
              <div className="divider"><span>or</span></div>
              <div className="social-buttons">
                <button type="button">f</button>
                <button type="button">G</button>
              </div>
            </>
          ) : null}
          <p className="auth-switch">
            {isSignup ? 'Already have an account?' : 'New user?'}{' '}
            <Link to={isSignup ? '/login' : '/signup'}>{isSignup ? 'Login' : 'Create an account'}</Link>
          </p>
        </section>
      </div>
    </main>
  )
}
