import { useState } from "react"


const Overlay = ({gifUrl, setOverlayIsShown}) => {

    const handleCloseOverlay = () => {
        setOverlayIsShown({
            isShown: false,
            gifUrl: '',
        });
    }

  return (
    <div className="overlay">
        <svg className="close-btn" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        onClick={handleCloseOverlay}
        >
            <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <img className="overlay-img" src={gifUrl} alt="" />
    </div>
  )
}

export default Overlay