import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SEE YA !! </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Projets</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Recommendations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    <div className='footer__socials'>
      <a href="https://twitter.com/Namejessking" target="_blank"><BsTwitter/></a>
      <a href="https://github.com/Namejess" target="_blank"><BsGithub/></a>
      <a href="https://leetcode.com/Namejess/" target="_blank"><SiLeetcode /></a>
      <a href="https://www.linkedin.com/in/jessy-drouin-00850b153/" target="_blank"><BsLinkedin/></a>


    </div>

    <div className="footer__copyright">
      <small>&copy; DROUIN Jessy. Tout droits réservés. </small>
    </div>

    </footer>
  )
}

export default Footer
