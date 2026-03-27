import React from 'react'

const ImageBanner = ({ src, alt = 'Banner image' }) => {
  return (
    <div className="relative z-20 w-full max-w-full overflow-visible">
      <div className="relative w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        {/* Navy bottom fade (replaces white GradientLayers + strip) — blends into page cream */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 sm:h-36 md:h-40 bg-gradient-to-b from-transparent via-[#0B1F3A]/55 to-[#0B1F3A]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-14 sm:h-16 bg-gradient-to-b from-transparent to-[#FDF6F0]"
          aria-hidden
        />
      </div>

      {/* Details Title — outside overflow clip */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-end overflow-visible px-4 pb-1">
        <div className="w-full max-w-full text-center overflow-visible">
          <h1
            className="font-ballet text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 overflow-visible pt-1 leading-[1.15]"
            style={{
              background:
                'linear-gradient(180deg, #FFF8E7 0%, #E8C547 32%, #C9A227 65%, #8B6914 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35))',
              display: 'inline-block',
            }}
          >
            The
          </h1>
          <h2
            className="font-tebranos text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase mb-4 -mt-5 sm:-mt-6 overflow-visible leading-none"
            style={{ color: '#CC5500' }}
          >
            Details
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ImageBanner
