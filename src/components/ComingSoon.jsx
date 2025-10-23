import { useState } from 'react'
import { Watch, UtensilsCrossed, BarChart3, ArrowRight } from 'lucide-react'
import WaitlistForm from './WaitlistForm'

export default function ComingSoon() {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-700 text-sm font-semibold mb-6">
            COMING SOON
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            What's Coming Next
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're building a unified Wellnex Platform that brings together fitness, nutrition, mental health, and diagnostics into a single intelligent dashboard. Whether you're a user, trainer, or clinic—Wellnex will be your digital wellness command center.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mb-6 shadow-lg shadow-purple-300">
              <Watch className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Wearable Integration</h3>
            <p className="text-gray-700 leading-relaxed">
              Connect your favorite fitness trackers and smartwatches for real-time health monitoring and insights.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-pink-100 hover:shadow-xl hover:shadow-pink-200 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center mb-6 shadow-lg shadow-pink-300">
              <UtensilsCrossed className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Nutrition & Meal Planning</h3>
            <p className="text-gray-700 leading-relaxed">
              AI-powered meal plans, calorie tracking, and personalized nutrition recommendations based on your goals.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-300">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Corporate Wellness Dashboards</h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive wellness solutions for businesses to support employee health and productivity.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowWaitlistForm(true)}
            className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white text-lg shadow-lg shadow-purple-300 hover:shadow-xl hover:shadow-purple-400 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            Get Early Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {showWaitlistForm && (
        <WaitlistForm onClose={() => setShowWaitlistForm(false)} />
      )}
    </section>
  )
}