import React from 'react'
import './about.css'
import ME from '../../assets/pc.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillDatabase} from 'react-icons/ai'
import {BsTerminalFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5> Me voici</h5>
      <h2> About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />


      </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small> 4 ans d'expérience IT</small>
            </article>

            <article className='about__card'>
              <AiFillDatabase className='about__icon'/>
              <h5> AdminSys </h5>
              <small> Serveurs, Linux, support</small>
            </article>

            <article className='about__card'>
              <BsTerminalFill className='about__icon'/>
              <h5> Dev </h5>
              <small> POO, logiciel, DevOps</small>
            </article>
          </div>

          <p>
            Toujours en quête d'apprentissage et de connaissances dans le domaine de l'IT, je suis passionné par ce domaine et les métiers qui l'entourent. 
            Diplomé en administration système & réseaux puis en développement, j'aime l'aspect technique d'un projet et le challenge intellectuel qu'il représente.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>

        </div>
      </div> 
    </section>
  )
}

export default About
