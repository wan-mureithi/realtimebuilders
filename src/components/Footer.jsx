import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id="footer">
      <div className='gpt3__footer-heading'>
      <h1 className='text-white'> Do you want to step in to the future before others </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <p className='font-bold'>RealTimeBuilders & Contractors </p>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
      <p>© 2023 Realtimebuilders. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer