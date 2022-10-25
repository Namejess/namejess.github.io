import React from 'react'
import CV from '../../assets/DROUIN_JESSY_CV_Dev.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Mon CV</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>     
    </div>
  )
}

export default CTA
