import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "SoulWhispers helped me find calm in chaos. It's like therapy in my pocket.",
      author: "Ayesha R.",
      location: "Karachi",
      rating: 5,
      gradient: "from-pink-400 to-purple-400"
    },
    {
      quote: "GymKey has transformed how I manage my gym. My members love the convenience.",
      author: "Imran M.",
      location: "Gym Owner, Lahore",
      rating: 5,
      gradient: "from-blue-400 to-purple-400"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-purple-800">Real stories from our community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl bg-white/40 backdrop-blur-sm border border-purple-200/30 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:-translate-y-2"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-purple-200 group-hover:text-purple-300 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                ))}
              </div>

              <p className="text-lg text-purple-800 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-purple-900">{testimonial.author}</p>
                  <p className="text-sm text-purple-700">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}