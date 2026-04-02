import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import SecondaryButton from './SecondaryButton'
import './pages/Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const PhotoUpload = () => {
  const photoUploadRef = useRef(null)

  useEffect(() => {
    // Photo Upload animation
    if (photoUploadRef.current) {
      ScrollTrigger.create({
        trigger: photoUploadRef.current,
        start: "top 80%",
        animation: gsap.fromTo(photoUploadRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === photoUploadRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div className="mt-20 relative">
      <div className="relative overflow-visible">
        <div className="relative overflow-hidden">
          <div 
            ref={photoUploadRef} 
            className="text-center transition-opacity duration-500 ease-in-out"
          >
            {/* Upload Title */}
            <div>
              <h3 className="relative inline-block px-6 upload-title">
                <span 
                  className="font-tebranos text-5xl sm:text-6xl md:text-7xl lg:text-8xl inline-block leading-none uppercase upload-title-text"
                >
                  OH SNAP!
                </span>
              </h3>
            </div>

            {/* QR Code Image and Details Side by Side */}
            <div className="flex flex-row lg-custom:flex-col gap-6 md:gap-8 lg-custom:gap-6 items-stretch lg-custom:items-center lg-custom:justify-center">
              {/* QR Code Image - 50% width on mobile, full width on 992px+ */}
              <div className="w-1/2 lg-custom:w-full lg-custom:flex lg-custom:justify-center">
                <div className="w-full relative upload-qr-container" style={{ maxWidth: '350px' }}>
                  <a
                    href="https://drive.google.com/drive/folders/12h2rkEYwkOlVxjkSI0LZcTC_vce6LThd?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-[#0B1F3A]/10 bg-white p-3 shadow-sm outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#0B1F3A] focus-visible:ring-offset-2"
                    aria-label="Open photo upload folder (QR code)"
                  >
                    <img
                      src="/assets/images/qr/qr-code%20(4).png"
                      alt=""
                      className="h-auto w-full object-contain"
                      width={350}
                      height={350}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </div>
              </div>
              
              {/* Upload Details - 50% width on mobile, full width on 992px+ */}
              <div className="w-1/2 lg-custom:w-full lg-custom:h-fit lg-custom:flex lg-custom:flex-col lg-custom:justify-center lg-custom:items-center flex flex-col justify-between text-left lg-custom:text-center py-4 sm:py-6 upload-content-container">
                {/* Description */}
                <p className="text-sm sm:text-base font-albert font-thin text-[#0B1F3A] mb-4 text-left lg-custom:text-center">
                  Share your photos and videos from our special day.
                </p>

                {/* Upload Button */}
                <div className="flex justify-start lg-custom:justify-center items-center">
                  <SecondaryButton
                    href="https://drive.google.com/drive/folders/12h2rkEYwkOlVxjkSI0LZcTC_vce6LThd?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={ArrowRight}
                  >
                    Upload photos
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoUpload
