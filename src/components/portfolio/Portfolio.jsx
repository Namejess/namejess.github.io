import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Escape.png'
import IMG2 from '../../assets/react2.gif'
import IMG3 from '../../assets/frog.gif'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes travaux récents</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
            <img src={IMG1} alt="" style={{
              borderRadius: 20,
            }}/>
            <h3>Escape Mini Monster pour ma fille :) (Godot)</h3>
            <div className='portfolio__item-cta '>          
              <a href="https://github.com/Namejess/Godot" className='btn' target='_blank' rel="noreferrer">Github</a> 
              <a href="https://namejess.itch.io/escape-mini-monster" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image"></div>
            <img src={IMG2} alt="" style={{
              borderRadius: 20,
            }}/>
            <h3>Ce site, réalisé avec React/NodeJS</h3>
            <div className='portfolio__item-cta '>          
              <a href="https://github.com/Namejess/namejess.github.io" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image" ></div>
            <img src={IMG3} alt="" style={{
              borderRadius: 20,
            }} />
            <h3>Petit plateformer (Godot)</h3>
            <div className='portfolio__item-cta '>          
              <a href="https://namejess.itch.io/escape-mini-monster" className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
