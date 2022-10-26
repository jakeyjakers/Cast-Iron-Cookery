import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://www.lodgecastiron.com/' className='footer__lodgelink'>Find Out More</a>
      <a href='#top' className='footer__toplink'>Back To Top</a>
      <span className='footer__copy'>&#169;Eichler</span>
    </div>
  )
}

export default Footer