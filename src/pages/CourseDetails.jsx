import { BookOpen, CheckCircle, FileBadge, Share2, Star, UserRound, Video } from 'lucide-react'
import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const tabs = ['About', 'Lessons', 'Reviews']

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState('About')

  const tabContent = useMemo(() => {
    if (activeTab === 'Lessons') {
      return <LessonsTab />
    }

    if (activeTab === 'Reviews') {
      return <ReviewsTab />
    }

    return <AboutTab />
  }, [activeTab])

  return (
    <>
      <section className="detail-hero blue-grid">
        <div className="container">
          <Navbar />
          <div className="detail-title">
            <div>
              <h1>Build Digital Asset: A Comprehensive Guide</h1>
              <p>Unlock the Power of Digital Creation with Expert Guidance</p>
              <span>by <strong>purepearl studio</strong></span>
              <div className="badge-row">
                <span><BookOpen size={16} /> Intermediate</span>
                <span><Star size={16} fill="currentColor" /> 4.8 (172 reviews)</span>
                <span><UserRound size={16} /> 199 Students</span>
              </div>
            </div>
            <button className="lime-button share"><Share2 size={16} /> Share</button>
          </div>
          <div className="detail-layout">
            <div className="video-card">
              <img src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1000&q=80" alt="Course preview" />
              <button className="play-button" type="button">▶</button>
            </div>
            <aside className="course-sidebar">
              <h3>112 Lessons (24 hours)</h3>
              {['Introduction to Digital Assets', 'Design Principles for Impact', 'Advanced Techniques in Digital Creation'].map((lesson, index) => (
                <div className="sidebar-lesson" key={lesson}>
                  <span>0{index + 1}</span>
                  <p>{lesson}</p>
                  <a href="#">{index === 0 ? '12 mins' : index === 1 ? '21 mins' : '16 mins'}</a>
                </div>
              ))}
              <small>99 more videos</small>
              <p>Ready to dive in? Enroll now and start building your digital future!</p>
              <p className="price large"><strong>$25</strong><span>/lifetime</span></p>
              <button className="lime-button wide" type="button">Enroll Now</button>
              <h3>This course include</h3>
              <ul className="include-list">
                <li><BookOpen size={15} /> Learning Resources</li>
                <li><Video size={15} /> Quality Lesson Videos</li>
                <li><FileBadge size={15} /> Certificate of Completion</li>
                <li><UserRound size={15} /> Private Consultation</li>
              </ul>
              <div className="creator-mini">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=90&q=80" alt="" />
                <div><strong>PurePearl Studio</strong><span>Professional Creator</span></div>
              </div>
              <button className="outline-button" type="button">See Full Profile</button>
            </aside>
          </div>
        </div>
      </section>
      <main className="detail-main">
        <div className="container detail-content">
          <section className="tab-panel">
            <div className="tabs">
              {tabs.map((tab) => (
                <button className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)} type="button" key={tab}>{tab}</button>
              ))}
            </div>
            {tabContent}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

function AboutTab() {
  return (
    <div className="prose-block">
      <h2>Description</h2>
      <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course. This transformative learning experience invites you to dive into the intricacies of crafting impactful digital content.</p>
      <p>As you progress through the course, you will ascend to higher levels of expertise and discover principles that drive impactful creations.</p>
      <h2>Sneak Peak</h2>
      <div className="sneak-grid">
        {['photo-1516321318423-f06f85e504b3', 'photo-1558655146-d09347e92766', 'photo-1519389950473-47ba0277781c', 'photo-1512941937669-90a1b58e7e9c'].map((id) => (
          <img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=280&q=80`} alt="" key={id} />
        ))}
      </div>
      <h2>Key Points</h2>
      {['Foundational Concepts', 'Design Principles Mastery', 'Advanced Techniques in Digital Creation', 'Project Showcase and Critique', 'Optimizing for Various Platforms', 'Monetization Strategies'].map((point) => (
        <span className="check-item detail-check" key={point}><CheckCircle size={17} /> {point}</span>
      ))}
    </div>
  )
}

function LessonsTab() {
  const lessons = [
    'Introduction to Digital Assets',
    'Design Principles for Impact',
    'User-Centric Design Strategies',
    'Interactive Media and Engagement',
    'Project Showcase and Critique',
    'Optimizing Digital Assets for Various Platforms',
  ]

  return (
    <div className="prose-block">
      <h2>Explore the Modules</h2>
      <p>Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
      <h2>Lesson List</h2>
      <div className="lesson-list">
        {lessons.map((lesson, index) => (
          <article key={lesson}>
            <span><Video size={24} /></span>
            <div>
              <h3>Module {index + 1}: {lesson}</h3>
              <p>Master concepts through practical examples, guided explanations, and focused learning activities.</p>
            </div>
          </article>
        ))}
      </div>
      <h2>Lesson Progress Tracking</h2>
      <div className="progress-card">
        <span>Learning Progress</span>
        <strong>55%</strong>
        <div><i /></div>
      </div>
    </div>
  )
}

function ReviewsTab() {
  return (
    <div className="prose-block">
      <h2>What Learners Are Saying</h2>
      <p>Read reviews and ratings from learners who have embarked on the transformative journey of mastering digital asset creation.</p>
      <div className="rating-summary">
        <strong>4.7<span>Ratings</span></strong>
        <div className="rating-bars">
          {[90, 45, 30, 12, 8].map((width, index) => (
            <p key={width}><i style={{ width: `${width}%` }} /><span>★★★★★</span><em>{[720, 120, 21, 12, 16][index]}</em></p>
          ))}
        </div>
      </div>
      <h2>Individual Reviews:</h2>
      <div className="review-filter">
        {['All rating', '5', '4', '3', '2', '1'].map((item, index) => <button className={index === 0 ? 'active' : ''} key={item}>{item}</button>)}
      </div>
      {['PurePearl Studio', 'Albert Flores', 'Cody Fisher'].map((name) => (
        <article className="review-card" key={name}>
          <div><strong>{name}</strong><span>a year ago</span></div>
          <p>★★★★★</p>
          <p>The course provided a comprehensive understanding of digital asset creation. The lessons were practical and immediately applicable to my work.</p>
        </article>
      ))}
    </div>
  )
}
