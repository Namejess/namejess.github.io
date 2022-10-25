import React from 'react'
import './project.css'
import {BiCheck} from 'react-icons/bi'



const Project = () => {
  return (
    <section id='project'>
      <h5> Apprentissage</h5>
      <h2> Mes projets </h2>

      <div className="container project__container">
        <article className='project'>
          <div className="project__head">
            <h3>Developpement web/mobile</h3>
          </div>
          
          <ul className="project__list"> 
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Ce site portfolio, From Scratch (HTML/CSS) + React</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Un site Wordpress pour un petit commerçant (accompagnement, mise en ligne)</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEBDEV */}

        <article className='project'>
          <div className="project__head">
            <h3>Jeux vidéo(Godot Engine)/divers</h3>
          </div>
          
          <ul className="project__list"> 
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Un petit jeu type "Escape" où un petit personnage doit esquiver des monstres venant de toutes parts. </p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Un plateformer (gestion des tuiles, ennemis, double saut...)</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Un bot discord d'envoi de PM pour l'organisation d'un tournoi</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Un Flappy Bird en full Java</p>
            </li>
          </ul>
        </article>
        {/* END OF JV/Divers */}


        <article className='project'>
          <div className="project__head">
            <h3>Formation/cours</h3>
          </div>
          
          <ul className="project__list"> 
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Java: Spring (Boot/Web/Data) / Swing</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Utilisation Azure (DevOps, Pipeline, installation de GitLab</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Progression en DSA ( "Cracking the Code Interview", AlgoExpert.com...)</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Administration serveur (Windows Servers, Debian, Ansible)</p>
            </li>
          </ul>
        </article>
        {/* END OF FORMATION */}

      </div>
    </section>
  )
}

export default Project
