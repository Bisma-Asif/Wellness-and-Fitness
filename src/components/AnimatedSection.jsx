import { useRef } from 'react'
import { useElementVisibility } from '../hooks/useScrollAnimation'

export default function AnimatedSection({ children, className = '', delay = 0, ...props }) {
  const sectionRef = useRef(null)
  const isVisible = useElementVisibility(sectionRef)

  return (
    <div
      ref={sectionRef}
      className={`duration-1000 ease-out transform-gpu ${
        isVisible 
          ? `animate-fadeIn3d` 
          : `opacity-0 translate-y-20 rotate-x-12 scale-95`
      } ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '2000px',
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
      {...props}
    >
      {children}
    </div>
  )
}