import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMastodon} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {BsDiscord} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jessy-drouin-00850b153/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Namejess" target="_blank"><BsGithub /></a>
      <a href="https://mastodon.social/@namejess" target="_blank"><BsMastodon /></a>
      <a href="https://leetcode.com/Namejess/" target="_blank"><SiLeetcode /></a>
      <a href="https://discordapp.com/users/190231524472389632" target="_blank"><BsDiscord/></a>


    </div>
  )
}

export default HeaderSocials
