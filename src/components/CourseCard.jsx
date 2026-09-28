import { BarChart3, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { avatars } from '../data/courses'

export default function CourseCard({ course }) {
  return (
    <Link className="course-card" to="/course/1">
      <div className="course-image-wrap">
        <img src={course.image} alt={course.title} />
        <div className="course-meta">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>
      <div className="course-body">
        <div className="course-title-row">
          <h3>{course.title}</h3>
          <span className="rating">4.5 <Star size={16} fill="currentColor" /></span>
        </div>
        <p>by <strong>purepearl studio</strong></p>
        <div className="course-info-row">
          <span className="level"><BarChart3 size={14} /> Beginner</span>
          <div className="avatar-stack">
            {avatars.map((avatar) => <img src={avatar} alt="" key={avatar} />)}
            <span>26+</span>
          </div>
        </div>
        <p className="price"><strong>$25</strong><span>/lifetime</span></p>
      </div>
    </Link>
  )
}
