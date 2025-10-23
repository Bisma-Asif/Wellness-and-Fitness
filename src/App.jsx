import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Apps from './components/Apps'
import WhyWellnex from './components/WhyWellnex'
import ComingSoon from './components/ComingSoon'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingPage from './components/BookingPage'
import PurpleBubble from './components/PurpleBubble'
import AnimatedSection from './components/AnimatedSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <PurpleBubble />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <AnimatedSection>
              <About />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Apps />
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <WhyWellnex />
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <ComingSoon />
            </AnimatedSection>
            <AnimatedSection delay={800}>
              <Testimonials />
            </AnimatedSection>
            <AnimatedSection delay={1000}>
              <Contact />
            </AnimatedSection>
            <AnimatedSection delay={1200}>
              <Footer />
            </AnimatedSection>
          </>
        } />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  )
}

export default App