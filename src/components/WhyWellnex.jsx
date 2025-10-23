import { Network, Sparkles, TrendingUp, Shield } from 'lucide-react'

export default function WhyWellnex() {
  const features = [
    {
      icon: Network,
      title: 'Integrated Wellness',
      description: 'Physical, mental, and emotional health in one ecosystem',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'AI-Driven Personalization',
      description: 'Smart recommendations tailored to your goals',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Scalable for Providers',
      description: 'From boutique studios to national gym chains',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Built for the Future',
      description: 'Cloud-native, mobile-first, and privacy-conscious',
      gradient: 'from-purple-500 to-blue-500'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
            Why <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Wellnex</span>?
          </h2>
          <p className="text-xl text-purple-800 max-w-2xl mx-auto">
            Experience the future of wellness with a platform designed for excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-purple-200/30 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-2">{feature.title}</h3>
                  <p className="text-purple-800 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}