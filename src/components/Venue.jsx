import React, { useRef, useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { venues as venuesData } from '../data'
import './pages/Details.css'

gsap.registerPlugin(ScrollTrigger)

const CROSSFADE_MS = 5000
const TRANSITION_MS = 1200

const Venue = () => {
  const venueSectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const ceremony = venuesData.ceremony
  const reception = venuesData.reception

  const fallbackSlides = [
    ceremony.image || '/assets/images/venues/ceremony.jpg',
    reception.image || '/assets/images/venues/reception.jpg',
  ].filter(Boolean)

  const heroSlides =
    Array.isArray(venuesData.heroSlides) && venuesData.heroSlides.length > 0
      ? venuesData.heroSlides
      : fallbackSlides

  const addressLine = [
    ceremony.address && `${ceremony.address}, `,
    ceremony.city,
    ceremony.state && `, ${ceremony.state}`,
    ceremony.zip && `, ${ceremony.zip}`,
  ]
    .filter(Boolean)
    .join('')

  const advanceSlide = useCallback(() => {
    setActiveIndex((i) => (i + 1) % heroSlides.length)
  }, [heroSlides.length])

  useEffect(() => {
    const id = window.setInterval(advanceSlide, CROSSFADE_MS)
    return () => window.clearInterval(id)
  }, [advanceSlide])

  useEffect(() => {
    if (venueSectionRef.current) {
      ScrollTrigger.create({
        trigger: venueSectionRef.current,
        start: 'top 80%',
        animation: gsap.fromTo(
          venueSectionRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        ),
        toggleActions: 'play none none reverse',
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === venueSectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div className="venue-where-stack mt-20 mb-12 sm:mb-14 w-full max-w-full relative overflow-x-clip shadow-lg">
      {/* Hero: venue / reception crossfade — full width, above text panel */}
      <div className="venue-where-hero relative w-full">
        <div
          className="venue-crossfade venue-crossfade--hero relative w-full overflow-hidden bg-[#2a0a0c]"
          aria-roledescription="carousel"
          aria-label="Venue photos"
        >
          {heroSlides.map((src, i) => (
            <img
              key={src}
              src={encodeURI(src)}
              alt={`${ceremony.name} — photo ${i + 1} of ${heroSlides.length}`}
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity ease-in-out"
              style={{
                opacity: activeIndex === i ? 1 : 0,
                transitionDuration: `${TRANSITION_MS}ms`,
                zIndex: activeIndex === i ? 2 : 1,
              }}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-[5]"
            aria-hidden
          >
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Show venue photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Burgundy textured panel — title, copy, CTA */}
      <div
        ref={venueSectionRef}
        className="venue-where-section relative text-center px-5 sm:px-10 pt-10 sm:pt-12 pb-28 sm:pb-32"
      >
        <h3 className="relative z-[1] px-4 mb-6 sm:mb-8">
          <span className="font-tebranos text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block leading-[0.95] uppercase tracking-tight venue-where-title-text">
            WHERE TO GO
          </span>
        </h3>

        <div className="relative z-[1] text-sm sm:text-base md:text-lg font-albert text-white max-w-xl sm:max-w-2xl mx-auto leading-relaxed space-y-4">
          <p className="font-medium not-italic">
            Ceremony: {ceremony.time}{' '}
            <span className="font-light opacity-90">&amp;</span> Venue: {reception.time}
            <span className="font-light"> – {ceremony.name}</span>
            {addressLine ? (
              <span className="font-light opacity-95"> ({addressLine})</span>
            ) : null}
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
          <a
            href={ceremony.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center hover:opacity-90 transition-all duration-300 group bg-[#FDF6F0] rounded-lg px-8 py-3 gap-2 gift-button no-underline shadow-md"
          >
            <div className="absolute inset-0 rounded-lg border border-[#CC5500] pointer-events-none gift-button-border" />
            <span className="text-[#CC5500] font-medium text-sm sm:text-base relative z-10">
              Get Direction
            </span>
            <ArrowRight className="w-4 h-4 text-[#CC5500] relative z-10" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Venue
