import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../logo/wellnex_logo-removebg-preview.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleBookConsultation = () => {
    navigate('/booking')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Wellnex Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-semibold text-gray-800">Wellnex</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#apps" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Our Apps</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contacts</a>
            <button 
              onClick={handleBookConsultation}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-300 transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#apps" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Our Apps</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">About us</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Contacts</a>
            <button 
              onClick={handleBookConsultation}
              className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-300 transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}