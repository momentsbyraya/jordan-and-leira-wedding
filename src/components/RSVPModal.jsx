import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { X } from 'lucide-react'
import { themeConfig } from '../config/themeConfig'
import { couple } from '../data'

const RSVPModal = ({ isOpen, onClose }) => {
  const rsvp = couple.rsvp
  const deadlineNote = rsvp?.message ?? 'Please RSVP by May 30, 2026'
  const modalRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      
      // Modal entrance animation
      gsap.set([overlayRef.current, contentRef.current], { opacity: 0 })
      gsap.set(contentRef.current, { scale: 0.8, y: 50 })
      
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" })
      gsap.to(contentRef.current, { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.4, 
        ease: "back.out(1.7)" 
      })
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    // Modal exit animation
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, ease: "power2.out" })
    gsap.to(contentRef.current, { 
      opacity: 0, 
      scale: 0.8, 
      y: 50, 
      duration: 0.3, 
      ease: "power2.out" 
    }).then(() => {
      onClose()
    })
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleOverlayClick}
      />
      
      {/* Modal Content */}
      <div
        ref={contentRef}
        className={`relative ${themeConfig.paragraph.background} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-300/50">
          <h2 className="text-2xl font-leckerli font-light text-[#0B1F3A]/70">RSVP</h2>
          <button
            onClick={handleClose}
            className="p-2 text-[#5A6B7C] hover:text-[#0B1F3A] hover:bg-gray-200/50 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 pt-2">
          {deadlineNote && (
            <p className="text-center text-sm sm:text-base text-[#5A6B7C] mb-4 font-poppins">
              {deadlineNote}
            </p>
          )}
          <div className="flex min-h-[280px] sm:min-h-[360px] w-full items-center justify-center rounded-lg border border-dashed border-[#AAB7C4]/60 bg-[#FDF6F0]/80 px-6 py-16">
            <p className="text-center font-tebranos text-2xl sm:text-3xl tracking-wide text-[#0B1F3A]/80">
              TO BE ADDED
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default RSVPModal 