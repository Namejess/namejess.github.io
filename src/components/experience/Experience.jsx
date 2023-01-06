import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {FaAngular} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaWordpress} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {IoLogoPython} from 'react-icons/io'
import {FaJava} from 'react-icons/fa'
import {FaDocker} from 'react-icons/fa'
import {SiCsharp} from 'react-icons/si'
import {SiDatacamp} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {FaRust} from 'react-icons/fa'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Expériences</h5>
      <h2> Compétences</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Développement Frontend </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillHtml5  className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'> Intermédiaire </small>
              </div> 
            </article>

            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
            
            <article className='experience__details'>
              <FaAngular className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'> Débutant </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaWordpress className='experience__details-icon'/>
              <div>
                <h4>Wordpress (Divi theme)</h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
          </div>
        </div> 

        {/* /* -------- END OF FRONT ---------/* */}

        <div className='experience__backend'>
        <h3>Développement Backend </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <IoLogoNodejs className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'> Débutant </small>
              </div>
            </article>

            <article className='experience__details'>
              <SiPhp className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'> Basique </small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
            
            <article className='experience__details'>
              <IoLogoPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaJava className='experience__details-icon'/>
              <div>
                <h4>Java (Spring) </h4>
                <small className='text-light'> Débutant </small>
              </div>
            </article>

            <article className='experience__details'>
              <FaDocker className='experience__details-icon'/>
              <div>
                <h4>Docker </h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>
          </div>

        {/* /* -------- END OF BACK ---------/* */}

        </div> 
        <div className='experience__logiciel'>
        <h3>Développement Logiciel </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaJava className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'> Débutant </small>
              </div>
            </article>


            <article className='experience__details'>
              <IoLogoPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'> Débutant </small>
              </div>
            </article>


            <article className='experience__details'>
              <FaRust className='experience__details-icon'/>
              <div>
                <h4>Rust</h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>

            <article className='experience__details'>
              <SiCsharp className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'> Débutant </small>
              </div>
            </article>

            <article className='experience__details'>
              <SiDatacamp className='experience__details-icon'/>
              <div>
                <h4>Data Structures & Algorithms</h4>
                <small className='text-light'> Débutant </small>
              </div>
            </article>

            <article className='experience__details'>
              <AiOutlineConsoleSql className='experience__details-icon'/>
              <div>
                <h4>MySQL / SQL Server</h4>
                <small className='text-light'> Intermédiaire </small>
              </div>
            </article>

          
        </div> 
      </div>
      </div>
    </section>
  )
}

export default Experience
