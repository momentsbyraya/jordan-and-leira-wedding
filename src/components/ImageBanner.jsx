import React from 'react'

const ImageBanner = ({ src, alt = 'Banner image' }) => {
  return (
    <div
      className="relative z-20 w-full max-w-full overflow-visible lg:left-1/2 lg:w-screen lg:max-w-none lg:-translate-x-1/2"
    >
      <div className="relative w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-screen lg:min-h-screen overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-[50%_54%]"
        />
        {/* Navy bottom fade (replaces white GradientLayers + strip) — blends into page cream */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 sm:h-36 md:h-40 bg-gradient-to-b from-transparent via-[#0B1F3A]/55 to-[#0B1F3A] lg:h-[min(40vh,420px)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-14 sm:h-16 bg-gradient-to-b from-transparent to-[#FDF6F0] lg:h-28"
          aria-hidden
        />
        {/* Readability behind top title on web */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] hidden h-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent lg:block lg:h-[min(32vh,320px)]"
          aria-hidden
        />
      </div>

      {/* Details Title — bottom on mobile/tablet; top + larger on web */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-end overflow-visible px-4 pb-1 lg:bottom-auto lg:top-0 lg:justify-start lg:overflow-visible lg:px-8 lg:pb-0 lg:pt-10 xl:pt-14">
        <div className="w-full max-w-full overflow-visible text-center lg:overflow-visible">
          <h1
            className="font-ballet mb-2 overflow-visible pt-1 leading-[1.15] text-5xl sm:text-6xl md:text-7xl lg:box-decoration-clone lg:-my-[0.22em] lg:mb-3 lg:px-[0.1em] lg:py-[0.22em] lg:leading-[1.38] lg:text-[clamp(4rem,11vw,7.5rem)]"
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
            className="font-tebranos mb-4 overflow-visible uppercase leading-none text-6xl sm:text-7xl md:text-8xl -mt-5 sm:-mt-6 lg:mb-2 lg:-mt-[5rem] lg:text-[clamp(4.25rem,13vw,10rem)]"
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
