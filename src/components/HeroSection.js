import React from 'react'
import '../components/HeroSection.css'

function HeroSection(props) {
  return (
    <div className='hero-container'>
        <h1>ADVANTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <button>GET STARTED</button>
            <button>WATCH TRAILER</button>
        </div>
    </div>
  )
}

export default HeroSection
