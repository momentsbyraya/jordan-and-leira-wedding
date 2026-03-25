import React from 'react'

const Divider = () => {
  return (
    <div className="flex justify-center items-center" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      {/* Left horizontal line */}
      <div className="w-16 h-px bg-gradient-to-r from-[#CC5500] to-[#0B1F3A] opacity-80"></div>
      
      <svg 
        className="w-3 h-3 mx-4"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M50 10 L90 50 L50 90 L10 50 Z" 
          fill="#CC5500" 
          stroke="#CC5500" 
          strokeWidth="2"
        />
      </svg>
      
      {/* Right horizontal line */}
      <div className="w-16 h-px bg-gradient-to-r from-[#0B1F3A] to-[#CC5500] opacity-80"></div>
    </div>
  )
}

export default Divider
