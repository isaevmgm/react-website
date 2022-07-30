import React from 'react'
import '../components/Footer.css'

function Footer(props) {
  return (
    <div className='footer-container'>
        <div className='footer-items'>
            <h1>Join the Advanture newsletter to receive our best vacation deals</h1>
            <p>You can unsubscribe at any time.</p>
            <div className='email'>
                <input type='text' placeholder='Your Email' /><button>Subscribe</button>
            </div>
            <div className='footer-info'>
          <div className='info-block'>
            <h1>About Us</h1>
            <h4>How it works</h4>
            <h4>Testimonials</h4>
            <h4>Investors</h4>
            <h4>Terms of service</h4>
          </div>
          <div className='info-block'>
            <h1>Contact Us</h1>
            <h4>Contact</h4>
            <h4>Support</h4>
            <h4>Destinations</h4>
            <h4>Sponsorships</h4>
          </div>
          <div className='info-block'>
            <h1>Videos</h1>
            <h4>Submit Video</h4>
            <h4>Ambassadors</h4>
            <h4>Agency</h4>
            <h4>Influencer</h4>
          </div>
          <div className='info-block'>
            <h1>Social Media</h1>
            <h4>Instagram</h4>
            <h4>Facebook</h4>
            <h4>Youtube</h4>
            <h4>Twitter</h4>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='one-bottom'>TRVL</div>
          <div className='two-bottom'>Copyright</div>
          <div className='icons'>TRVL 2022</div>
        </div>
        </div>  
    </div>
  )
}

export default Footer
