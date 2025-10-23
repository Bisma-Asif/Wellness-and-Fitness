import { Mail, Globe, Sparkles, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="text-white bg-gradient-to-br from-purple-900 to-pink-800">
      <div className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/src/logo/wellnex_logo-removebg-preview.png" 
                alt="Wellnex Logo" 
                className="object-contain w-16 h-16"
              />
              <h3 className="text-2xl font-bold">Wellnex Systems</h3>
            </div>
            <p className="leading-relaxed text-purple-100">
              Empowering wellness through cutting-edge technology. Transforming how individuals and organizations approach health and fitness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-purple-800/50 hover:bg-purple-700">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-purple-800/50 hover:bg-purple-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-purple-800/50 hover:bg-purple-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-purple-800/50 hover:bg-purple-700">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-purple-100 transition-colors hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#apps" className="text-purple-100 transition-colors hover:text-white">
                  Our Apps
                </a>
              </li>
              <li>
                <a href="#about" className="text-purple-100 transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-purple-100 transition-colors hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-purple-100 transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Our Apps</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-purple-100 transition-colors hover:text-white">
                  SoulWhispers
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-100 transition-colors hover:text-white">
                  GymKey
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-100 transition-colors hover:text-white">
                  Nutrition Tracker
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-100 transition-colors hover:text-white">
                  Corporate Wellness
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-purple-300" />
                <span className="text-purple-100">
                  123 Wellness Street, Health City, HC 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-300" />
                <span className="text-purple-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-300" />
                <a href="mailto:info@wellnexsystems.com" className="text-purple-100 transition-colors hover:text-white">
                  info@wellnexsystems.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-purple-300" />
                <a href="https://www.wellnexsystems.com" className="text-purple-100 transition-colors hover:text-white">
                  www.wellnexsystems.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-800/50">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-purple-200">
              © {currentYear} Wellnex Systems. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-purple-200 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-purple-200 transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-purple-200 transition-colors hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}