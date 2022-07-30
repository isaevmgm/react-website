import React from 'react'
import '../components/Cards.css'

function Cards(props) {
  return (
    <div className='cards-block'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards'>
            <div className='card-one'>
                <div className='border'>
                    <div className='imgOne'></div>
                </div>
                <p>Explore the hidden waterfall deep inside the Amazon Jungle</p>
            </div>
            <div className='card-one'>
                <div className='border'>
                    <div className='imgTwo'></div>
                </div>
                <p>Travel through the islands of Bali in a Private Cruise</p>
            </div>
            <div className='card-two'>
                <div className='sec-border'>
                    <div className='imgThree'></div>
                </div>
                <p>Set Sail in the Atlantic Ocean visiting Uncharted waters</p>
            </div>
            <div className='card-two'>
                <div className='sec-border'>
                    <div className='imgFour'></div>
                </div>
                <p>Experience Football on Top of the Himilayan Mountains</p>
            </div>
            <div className='card-two'>
                <div className='sec-border'>
                    <div className='imgFive'></div>
                </div>
                <p>Ride through the Sahara guided camel tour</p>
            </div>
        </div>
    </div>
  )
}

export default Cards
