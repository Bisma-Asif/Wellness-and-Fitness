import { Brain, Heart, Zap } from 'lucide-react';
import video1 from '../videos/floating videos/3209148-uhd_3840_2160_25fps.mp4'
import video2 from '../videos/floating videos/3327806-hd_1920_1080_24fps (1).mp4'
import video3 from '../videos/floating videos/3327959-hd_1920_1080_24fps.mp4'
import video4 from '../videos/floating videos/4536085-hd_1280_720_50fps.mp4'
import video5 from '../videos/floating videos/4608975-hd_1920_1080_25fps.mp4'

export default function About() {
  const videoSources = [video1, video2, video3, video4, video5];

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
                {videoSources.map((src, index) => (
                  <div key={`video-1-${index}`} className="inline-block mx-2 w-64 h-36 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                      onError={(e) => console.error(`Error loading video: ${e.target.src}`)}
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

        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <p className="text-lg md:text-xl text-purple-800 leading-relaxed text-center bg-white/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-200/30">
            At Wellnex Systems, we believe the future of health and fitness lies in intelligent, integrated, and deeply human-centered technology. Born from the fusion of "Wellness" and "Next," our platform is designed to elevate how people connect with their bodies, minds, and communities—anytime, anywhere.
          </p>
          <p className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center bg-white/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-200/30">
            We're not just building apps. We're building a movement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="group p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-purple-200/30 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">Intelligent Technology</h3>
            <p className="text-purple-800 leading-relaxed">
              AI-driven insights that adapt to your unique wellness journey and provide personalized recommendations.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-purple-200/30 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">Human-Centered Design</h3>
            <p className="text-purple-800 leading-relaxed">
              Every feature is crafted with empathy, putting your well-being and experience at the center.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-purple-200/30 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">Fully Integrated</h3>
            <p className="text-purple-800 leading-relaxed">
              Seamlessly connect physical fitness, mental health, and emotional wellness in one unified ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
