import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { X } from 'lucide-react'
import { themeConfig } from '../config/themeConfig'
import { couple } from '../data'

const RSVPModal = ({ isOpen, onClose }) => {
  const rsvp = couple.rsvp
  const formUrl = rsvp?.formUrl ?? ''
  const formEmbedUrl = rsvp?.formEmbedUrl ?? ''
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

      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(contentRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'back.out(1.7)',
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
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, ease: 'power2.out' })
    gsap
      .to(contentRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.3,
        ease: 'power2.out',
      })
      .then(() => {
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
        className={`relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl shadow-2xl ${themeConfig.paragraph.background}`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-gray-300/50 px-6 py-4">
          <h2 className="text-2xl font-leckerli font-light text-[#0B1F3A]/70">RSVP</h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-[#5A6B7C] transition-colors duration-200 hover:bg-gray-200/50 hover:text-[#0B1F3A] rounded-full"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-auto border-b border-gray-300/50 bg-white">
            {formEmbedUrl ? (
              <iframe
                title="Wedding RSVP form"
                src={formEmbedUrl}
                className="block h-[min(72vh,880px)] min-h-[480px] w-full border-0"
              />
            ) : (
              <p className="p-8 text-center font-poppins text-[#5A6B7C]">
                RSVP form link is not configured.
              </p>
            )}
          </div>

          <div className="flex shrink-0 justify-center px-4 py-4">
            {formUrl ? (
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-[#CC5500] bg-[#FDF6F0] px-6 py-3 text-sm font-medium text-[#CC5500] transition-colors hover:bg-[#CC5500]/10"
              >
                Open Link on other browser
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default RSVPModal
