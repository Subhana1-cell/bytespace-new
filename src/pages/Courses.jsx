import { ChevronDown, Filter, ListFilter, Search, SlidersHorizontal } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategoryPills from '../components/CategoryPills'
import CourseGrid from '../components/CourseGrid'
import { categories } from '../data/courses'

export default function Courses() {
  return (
    <>
      <section className="courses-hero blue-grid">
        <div className="container">
          <Navbar />
          <div className="courses-hero-content">
            <h1>Find Your Next Course</h1>
            <form className="courses-search">
              <div><Search size={18} /><input placeholder="Search" /></div>
              <button type="button">Courses <ChevronDown size={18} /></button>
            </form>
          </div>
        </div>
      </section>
      <main className="section">
        <div className="container">
          <div className="filter-row">
            <div className="filter-left">
              <button><Filter size={16} /> Filter</button>
              <button><SlidersHorizontal size={16} /> Level</button>
              <button><ListFilter size={16} /> Category</button>
            </div>
            <button><ListFilter size={16} /> Most relevant</button>
          </div>
          <CategoryPills items={categories} limit={8} />
          <CourseGrid repeat={2} />
        </div>
      </main>
      <Footer />
    </>
  )
}
