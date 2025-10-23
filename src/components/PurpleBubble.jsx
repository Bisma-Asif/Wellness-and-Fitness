import React, { useEffect, useRef } from 'react'
import './FloatingBubble.css'

const PurpleBubble = () => {
  const bubbleRef = useRef(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const posX = useRef(window.innerWidth / 2 - 90)
  const posY = useRef(window.innerHeight / 2 - 90)
  const velX = useRef(0)
  const velY = useRef(0)

  useEffect(() => {
    const bubble = bubbleRef.current
    if (!bubble) return

    bubble.style.transform = `translate(${posX.current}px, ${posY.current}px)`

    const handleMouseMove = (e) => {
      mouseX.current = e.clientX - 90
      mouseY.current = e.clientY - 90
    }

    const animate = () => {
      const friction = 0.35
      
      const dx = mouseX.current - posX.current
      const dy = mouseY.current - posY.current
      
      velX.current += dx * 0.01
      velY.current += dy * 0.01
      
      velX.current *= (1 - friction)
      velY.current *= (1 - friction)
      
      posX.current += velX.current
      posY.current += velY.current
      
      bubble.style.transform = `translate(${posX.current}px, ${posY.current}px)`
      
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div ref={bubbleRef} className="floating-bubble">
      <div className="bubble-inner"></div>
      <div className="bubble-shine"></div>
    </div>
  )
}

export default PurpleBubble