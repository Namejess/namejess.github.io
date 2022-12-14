import React from 'react'
import './project.css'
import {BiCheck} from 'react-icons/bi'

const Project = () => {
  return (
    <section id='project'>
      <h5> Apprentissage</h5>
      <h2> Mes projets </h2>

      <div className="container container__project">
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
              <p>Début d'un projet eCommerce (Java/Firebase)</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Clone de Youtube (Angular/Java Spring boot/AWS S3)</p>
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
              <p><a href="https://iron-jaguar-2cd.notion.site/API-Rest-avec-Spring-Boot-ec77693f7c6f4b59b298505d0765dc02" target="_blank"> Java: Spring (Boot/Web/Data) / Swing </a></p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Utilisation Microsoft Azure (DevOps, Pipeline, installation de GitLab)</p>
            </li>
            <li>
              <BiCheck className='project__list-icon'/>
              <p>Progression en DSA ( "Cracking the Code Interview", Leetcode.com...)</p>
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


// style={{display: "grid", gridTemplateColumns:'1fr 1fr 1fr', gap:"3rem", padding:"4rem" }}

export default Project
