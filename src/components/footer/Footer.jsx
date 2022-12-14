import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {BsFillHeartFill} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><BsFillHeartFill/></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#project">Projets</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Recommandations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    <div className='footer__socials'>
      <a href="https://twitter.com/Namejessking" target="_blank"><BsTwitter/></a>
      <a href="https://github.com/Namejess" target="_blank"><BsGithub/></a>
      <a href="https://leetcode.com/Namejess/" target="_blank"><SiLeetcode /></a>
      <a href="https://www.linkedin.com/in/jessy-drouin-00850b153/" target="_blank"><BsLinkedin/></a>
      <a href="https://discordapp.com/users/190231524472389632" target="_blank"><BsDiscord/></a>
      


    </div>

    <div className="footer__copyright">
      <small>&copy; DROUIN Jessy. Tous droits réservés. </small>
    </div>

    </footer>
  )
}

export default Footer
