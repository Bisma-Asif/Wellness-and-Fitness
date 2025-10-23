import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './VideoBackground.css'
import video from '../videos/3327806-hd_1920_1080_24fps (1).mp4" type="video/mp4'

export default function Hero() {
  const navigate = useNavigate()

  const handleBookConsultation = () => {
    navigate('/booking')
  }

  const handleExploreApps = () => {
    const appsSection = document.getElementById('apps')
    if (appsSection) {
      appsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
      <div className="video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="video-background"
        >
          <source src={video}/>
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="video-overlay-light"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/30 backdrop-blur-sm border border-white/30">
          <span className="text-sm font-medium text-purple-900">Next Generation Wellness Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-purple-900">
          Wellnex Systems
        </h1>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight text-purple-800">
          Wellness, Reimagined for the
        </h2>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Next Generation
        </h2>

        <p className="text-xl md:text-2xl text-purple-800 max-w-4xl mx-auto mb-12 leading-relaxed">
          A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting-edge HealthTech and fitness innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleBookConsultation}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Book Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={handleExploreApps}
            className="px-8 py-4 bg-white/30 backdrop-blur-sm border border-white/30 text-purple-900 rounded-full font-medium hover:bg-white/40 hover:shadow-lg transition-all duration-300"
          >
            Explore Our Apps
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-50 to-transparent"></div>
    </section>
  )
}video is not working on live link
