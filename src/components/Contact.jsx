import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'
import ContactForm from './ContactForm'
import WaitlistForm from './WaitlistForm'

export default function Contact() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/30 backdrop-blur-sm border border-purple-200/30">
          <Mail className="w-4 h-4 text-purple-600" />
          <span className="text-sm text-purple-700 font-medium">Stay Connected</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
          Be the First to Experience
        </h2>
        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
          The Full Wellnex Platform
        </p>

        <p className="text-xl text-purple-800 mb-12">
          Join our waitlist and get exclusive early access to the future of wellness technology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-6 py-4 bg-white/40 backdrop-blur-sm border border-purple-200/30 rounded-full text-purple-900 placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all"
          />
          <button 
            onClick={() => setShowWaitlistForm(true)}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg shadow-purple-300 hover:shadow-xl hover:shadow-purple-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8">
          <button 
            onClick={() => setShowContactForm(true)}
            className="px-8 py-3 bg-white/30 backdrop-blur-sm border border-purple-200/30 rounded-full font-medium text-purple-900 hover:bg-white/40 hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
      
      {showWaitlistForm && (
        <WaitlistForm onClose={() => setShowWaitlistForm(false)} />
      )}
    </section>
  )
}