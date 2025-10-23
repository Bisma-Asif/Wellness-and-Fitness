import { useState, useEffect } from 'react'
import { X, Mail, User, Phone } from 'lucide-react'
import { GRADIENTS, EFFECTS_3D } from '../constants'

export default function WaitlistForm({ onClose, prefilledEmail = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: prefilledEmail || '',
    phone: '',
    interest: 'general'
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (prefilledEmail) {
      setFormData(prev => ({
        ...prev,
        email: prefilledEmail
      }))
    }
  }, [prefilledEmail])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number. Pakistani numbers should be in +92XXXXXXXXXX format.'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Waitlist submission:', formData)
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'general'
      })
    } catch (error) {
      console.error('Submission error:', error)
      setErrors({ submit: 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 ${EFFECTS_3D.perspective}`}>
        <div className={`relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl ${EFFECTS_3D.transform3d} ${EFFECTS_3D.depth4}`}>
          <button 
            onClick={onClose}
            className="absolute text-gray-400 transition-colors top-6 right-6 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className={`w-20 h-20 bg-gradient-to-br ${GRADIENTS.primary} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h3 className="mb-2 text-2xl font-bold text-gray-900">You're on the list!</h3>
            <p className="mb-6 text-gray-600">
              Thank you for joining our waitlist. We'll notify you as soon as Wellnex is ready for you.
            </p>
            
            <button
              onClick={onClose}
              className={`w-full py-3 bg-gradient-to-r ${GRADIENTS.primary} text-white rounded-full font-medium ${EFFECTS_3D.depth2} hover:${EFFECTS_3D.depth3} transition-all`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 ${EFFECTS_3D.perspective}`}>
      <div className={`relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl ${EFFECTS_3D.transform3d} ${EFFECTS_3D.depth4}`}>
        <button 
          onClick={onClose}
          className="absolute text-gray-400 transition-colors top-6 right-6 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Join Our Waitlist</h2>
          <p className="text-gray-600">
            Be the first to know when we launch. Get exclusive early access and special offers.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.submit && (
            <div className="p-3 text-sm text-red-700 rounded-lg bg-red-50">
              {errors.submit}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 border ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 border ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 border ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                } rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                placeholder="e.g., +923001234567 or +1234567890"
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
          
          <div>
            <label htmlFor="interest" className="block mb-2 text-sm font-medium text-gray-700">
              Area of Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="general">General Updates</option>
              <option value="soulwhispers">SoulWhispers (Mental Wellness)</option>
              <option value="gymkey">GymKey (Fitness Management)</option>
              <option value="both">Both Applications</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-gradient-to-r ${GRADIENTS.primary} text-white rounded-full font-medium ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : `${EFFECTS_3D.depth2} hover:${EFFECTS_3D.depth3}`
            } transition-all`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Join Waitlist'
            )}
          </button>
        </form>
        
        <p className="mt-6 text-xs text-center text-gray-500">
          By joining, you agree to receive updates from Wellnex. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}