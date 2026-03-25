import React from 'react'

const SecondaryButton = ({ children, href, onClick, className = '', target, rel, icon: Icon }) => {
  const baseClasses = 'inline-flex items-center gap-2 text-sm sm:text-base font-medium transition-all duration-300 underline px-4 py-2 rounded-md bg-[#CC5500] text-white hover:bg-[#A84400]'
  const colorStyle = { color: '#FFFFFF' }
  
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${className}`}
        style={colorStyle}
      >
        {children}
        {Icon && <Icon className="w-4 h-4" style={colorStyle} />}
      </a>
    )
  }
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={colorStyle}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" style={colorStyle} />}
    </button>
  )
}

export default SecondaryButton
