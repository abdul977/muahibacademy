import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Departments from './components/Departments';
import DepartmentPage from './components/DepartmentPage';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import CourseDetailPage from './components/CourseDetailPage';
import Courses from './components/Courses';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Departments />
                <FeaturedCourses />
                <Testimonials />
              </main>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/departments/:id" element={<DepartmentPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
