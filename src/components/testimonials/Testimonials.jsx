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
  {
    avatar: AVTR1,
    name: 'Elias Ohayon',
    review: 'Il est incroyable ce con !'
  },
  {
    avatar: AVTR2,
    name: 'Elias Ohayon',
    review: 'Il est VRAIMENT incroyable ce con !'
  },
  {
    avatar: AVTR3,
    name: 'Morgan Bertrand',
    review: 'Il est TERRIBLEMENT incroyable ce con !'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Ils parlent de moi ! </h5>
      <h2> Recommendations</h2>

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
