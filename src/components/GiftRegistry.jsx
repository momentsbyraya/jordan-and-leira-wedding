import React, { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, X } from 'lucide-react'
import { paymentMethods } from '../data'
import './pages/Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const GiftRegistry = () => {
  const giftRegistryRef = useRef(null)
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false)
  useEffect(() => {
    // Gift Registry animation
    if (giftRegistryRef.current) {
      ScrollTrigger.create({
        trigger: giftRegistryRef.current,
        start: "top 80%",
        animation: gsap.fromTo(giftRegistryRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === giftRegistryRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <>
      {/* Gift Registry Section */}
      <div className="mt-20 relative gift-registry-section">
        <div ref={giftRegistryRef} className="text-center relative z-10">
          <h3 className="relative inline-block px-6 py-3 mb-4">
            <span 
              className="font-tebranos text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block leading-none uppercase gift-registry-title-text"
            >
              Gift Registry
            </span>
          </h3>
          <p className="text-base sm:text-lg font-albert font-thin text-[#FDF6F0] max-w-3xl mx-auto leading-relaxed">
            Your presence is our greatest gift. Monetary gifts are appreciated.
          </p>
        </div>
        
        {/* Send Gift Button */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <button
            onClick={() => setIsGiftModalOpen(true)}
            className="relative flex items-center justify-center hover:opacity-80 transition-all duration-300 group bg-[#FDF6F0] rounded-lg px-8 py-3 gap-2 gift-button"
          >
            <div 
              className="absolute inset-0 rounded-lg border border-[#CC5500] pointer-events-none gift-button-border"
            ></div>
            <span className="text-[#CC5500] font-medium text-sm sm:text-base relative z-10">Send Gift</span>
            <ArrowRight className="w-4 h-4 text-[#CC5500] relative z-10" />
          </button>
        </div>
      </div>

      {/* Gift Registry Modal */}
      {isGiftModalOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsGiftModalOpen(false)}
          />
          
          {/* Modal shell: fixed height cap; inner panel scrolls (fixes mobile / overflow) */}
          <div className="relative flex max-h-[92vh] w-[min(96vw,1100px)] flex-col overflow-hidden rounded-2xl bg-[#FDF6F0] shadow-xl">
            <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
              <button
                type="button"
                onClick={() => setIsGiftModalOpen(false)}
                className="rounded-full bg-[#FDF6F0]/90 p-2 text-gray-600 shadow-sm ring-1 ring-[#0B1F3A]/10 hover:text-[#0B1F3A]"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain p-3 pt-14 touch-pan-y sm:p-4 sm:pt-16 [-webkit-overflow-scrolling:touch]">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {paymentMethods.paymentMethods?.map((method, index) => {
                  const src = method.image || method.accountInfo?.qrCode
                  if (!src) return null
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded-xl bg-white p-2 sm:p-3"
                    >
                      <img
                        src={src}
                        alt={`${method.name} QR code`}
                        className="max-h-[50vh] w-full max-w-full object-contain sm:max-h-[min(70vh,620px)]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default GiftRegistry
