import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, MessageCircle } from 'lucide-react'
import './VideoBackground.css'

// 👇 direct imports from src folders
import bookingVideo from '../videos/booking-bg.mp4'
import wellnexLogo from '../logo/wellnex_logo.png'

export default function BookingPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'general',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validatePhoneNumber = (phone) => {
    if (!phone) return true
    const pakistaniPattern = /^(\+92|92|0)[0-9]{10}$/
    if (pakistaniPattern.test(phone)) return true
    const internationalPattern = /^\+?[1-9]\d{1,14}$/
    if (internationalPattern.test(phone.replace(/[\s\-\(\)]/g, ''))) return true
    return false
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters'

    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email'

    if (formData.phone && !validatePhoneNumber(formData.phone))
      newErrors.phone = 'Invalid phone number format'

    if (!formData.date) newErrors.date = 'Date is required'
    else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) newErrors.date = 'Please select a future date'
    }

    if (!formData.time) newErrors.time = 'Time is required'
    if (!formData.service) newErrors.service = 'Please select a service'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: 'general',
        message: ''
      })
      setErrors({})
    }, 3000)
  }

  const services = [
    { id: 'general', name: 'General Consultation' },
    { id: 'soulWhispers', name: 'SoulWhispers App Guidance' },
    { id: 'gymKey', name: 'GymKey App Setup' },
    { id: 'custom', name: 'Custom Wellness Solution' }
  ]

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 relative overflow-hidden">
      {/* 🔹 Background Video */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-background">
          <source src={bookingVideo} type="video/mp4" />
        </video>
      </div>

      <div className="video-overlay-light"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-30">
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-purple-700 hover:text-purple-900 font-medium transition-colors bg-white/30 hover:bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200/50 shadow-sm"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-purple-200/30 shadow-xl transform transition-transform duration-300 hover:scale-[1.02] z-40 relative">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-1 shadow-lg">
                <img
                  src={wellnexLogo}
                  alt="Wellnex Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-purple-900 mb-4">Book Your Consultation</h1>
            <p className="text-xl text-purple-800">
              Schedule a meeting with our wellness experts to discuss your personalized solution
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-200/50">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-900 mb-2">Booking Confirmed!</h2>
              <p className="text-purple-800 mb-6">
                Thank you for booking your consultation. We've sent a confirmation to your email.
              </p>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Return to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Input fields (same as before) */}
                {/* ... full form code same as tumhara original */}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
