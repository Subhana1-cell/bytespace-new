import { CheckCircle, Code2, Laptop, Megaphone, Palette, Search, Star, Store, Camera } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategoryPills from '../components/CategoryPills'
import CourseGrid from '../components/CourseGrid'
import CourseCard from '../components/CourseCard'
import { categories, courses } from '../data/courses'

const paths = [
  ['Design', Palette],
  ['Development', Code2],
  ['IT & Software', Laptop],
  ['Business', Store],
  ['Marketing', Megaphone],
  ['Photography', Camera],
]

export default function Home() {
  return (
    <>
      <section className="hero-section blue-grid">
        <div className="container">
          <Navbar />
          <div className="hero-content">
            <h1>Get Access to Hundreds Courses Available</h1>
            <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses</p>
            <form className="hero-search">
              <Search size={18} />
              <input type="search" placeholder="Course, topic, creator" />
              <button type="button">Search</button>
            </form>
          </div>
          <div className="hero-visual">
            <div className="blob"></div>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80" alt="Smiling student learning online" />
            <div className="float-card left">UI/UX Design<br /><span>20 Courses · 1000+ Students</span></div>
            <div className="float-card right">Learning Progress<strong>55%</strong><span className="bar"><i /></span></div>
            <div className="float-card bottom">Happy Students <span>2K+</span></div>
          </div>
        </div>
      </section>
      <section className="logo-strip">
        {['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </section>
      <main>
        <section className="section centered">
          <div className="container">
            <h2>Discover Your Passion,<br />Build Your Skills</h2>
            <p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields.</p>
            <CategoryPills items={categories} limit={18} />
            <CourseGrid />
          </div>
        </section>
        <section className="section centered compact">
          <div className="container">
            <h2>Explore Diverse Learning Paths at Bytespace</h2>
            <p>Our diverse range of courses spans various fields, ensuring there is something for everyone.</p>
            <div className="path-grid">
              {paths.map(([label, Icon]) => (
                <div className="path-card" key={label}>
                  <span><Icon size={28} /></span>
                  <h3>{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="growth-section">
          <div className="container growth-grid">
            <div className="growth-copy">
              <h2>Your Path to Professional Growth Starts Here!</h2>
              <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey.</p>
              <div className="stats">
                <strong>12K<span>Students</span></strong>
                <strong>70+<span>Courses</span></strong>
                <strong>16<span>Creators</span></strong>
              </div>
            </div>
            <div className="growth-card-wrap">
              <CourseCard course={courses[0]} />
            </div>
            <div className="creator-image">
              <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=80" alt="Creator with tablet" />
            </div>
            <div className="creator-copy">
              <h2>Create & Manage Courses Easily.</h2>
              <p><strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
              {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item) => (
                <span className="check-item" key={item}><CheckCircle size={18} /> {item}</span>
              ))}
            </div>
          </div>
        </section>
        <section className="creator-cta blue-grid" id="creators">
          <div className="container">
            <h2>Unlock Your Potential as a<br />Creator with ByteSpace</h2>
            <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become part of a thriving community.</p>
            <button type="button" className="lime-button">Join as Creator</button>
          </div>
        </section>
        <section className="section testimonials">
          <div className="container">
            <div className="split-heading">
              <h2>Discover What Our<br />Community Is Saying</h2>
              <p>Hear directly from those who have experienced the transformative journey of learning and creating on our platform.</p>
            </div>
            <div className="testimonial-grid">
              {['Sarah M.', 'James L.', 'Alex B.'].map((name, index) => (
                <article className="testimonial-card" key={name}>
                  <img src={`https://images.unsplash.com/photo-${index === 0 ? '1494790108377-be9c29b29330' : index === 1 ? '1500648767791-00dcc994a43e' : '1507003211169-0a1dd7228f2d'}?auto=format&fit=crop&w=120&q=80`} alt="" />
                  <h3>{name}</h3>
                  <span>{index === 2 ? 'Inspired Creator' : 'Lifelong Learner'}</span>
                  <p>"ByteSpace has transformed my approach to learning. The courses are practical, engaging, and easy to follow."</p>
                  <div className="stars"><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
