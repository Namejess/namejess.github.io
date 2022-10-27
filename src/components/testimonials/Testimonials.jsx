import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  // {
  //   avatar: AVTR1,
  //   name: 'Morgan Bertrand',
  //   review: 'Il est incroyable ce con !'
  // },
  {
    avatar: AVTR2,
    name: 'Elias Ohayon - Head of Products chez Pharmagest',
    review: "En plus d'être doté d'une remarquable capacité d'analyse sur les sujets les plus pointus, Jessy possède la faculté rare d'apprendre en continu et de façon très poussée jusqu'à un niveau de maitrise des sujets élevé. Son leadership naturel complète le tableau : celui d'une personne qu'on a envie d'avoir dans son équipe."
  },
  {
    avatar: AVTR3,
    name: 'Steeve Chabanel - Responsable technique chez OCI57',
    review: "Les personnes travaillant dans notre équipe ont su estimer sa rigueur et sa motivation qui ont fait de lui un collaborateur efficace. Les autres équipes du groupe avec lesquelles nous travaillions quotidiennement ont également apprécié les qualités humaines de Jessy qui s'est très vite intégré à la vie de l'entreprise."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Ils parlent de moi ! </h5>
      <h2> Recommandations</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
              <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}


export default Testimonials
