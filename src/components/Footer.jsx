import React from 'react'

const Footer = () => {
  const handleFooterClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61571540978411', '_blank', 'noopener,noreferrer')
  }

  return (
    <footer 
      className="w-full border-t-2 border-[#C9A227] pb-4 pt-4 transition-colors duration-300 bg-[#0B1F3A] hover:bg-[#0B1F3A]/95 active:bg-[#0B1F3A]/95 cursor-pointer"
      onClick={handleFooterClick}
    >
      {/* Footer text */}
      <div className="text-center">
        <p className="text-sm sm:text-base font-albert font-thin text-[#FDF6F0] transition-colors duration-300 hover:!text-[#FDF6F0] active:!text-[#FDF6F0]">
          Made with <ion-icon name="heart" className="inline-block mx-1 align-middle" style={{ fontSize: '1em', verticalAlign: 'middle' }}></ion-icon> by Moments by Raya
        </p>
      </div>
    </footer>
  )
}

export default Footer

