import { courses } from '../data/courses'
import CourseCard from './CourseCard'

export default function CourseGrid({ repeat = 1 }) {
  const list = Array.from({ length: repeat }).flatMap(() => courses)

  return (
    <div className="course-grid">
      {list.map((course, index) => (
        <CourseCard course={course} key={`${course.title}-${index}`} />
      ))}
    </div>
  )
}
