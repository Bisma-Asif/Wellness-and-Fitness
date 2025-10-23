import { Brain, Heart, Zap } from 'lucide-react'

export default function About() {
  const videoSources = [
    "../videos/floating-videos/3209148.mp4",
    "/videos/floating-videos/3327806.mp4",
    "/videos/floating-videos/3327959.mp4",
    "/videos/floating-videos/4536085.mp4",
    "/videos/floating-videos/4608975.mp4"
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
            Where Wellness Meets{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What's Next
            </span>
          </h2>
          
          <div className="mb-12 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <div className="inline-block">
                {videoSources.concat(videoSources).map((src, index) => (
                  <div key={index} className="inline-block mx-2 w-64 h-36 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
        </div>

        {/* ...rest of your content unchanged... */}
      </div>
    </section>
  )
}
