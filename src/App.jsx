import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CourseDetails from './pages/CourseDetails'
import NotFound from './pages/NotFound'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/1" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
