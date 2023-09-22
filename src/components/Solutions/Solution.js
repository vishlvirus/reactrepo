import React from 'react';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import './Solutions.css';
import data from '../../utils/Solutions.json'
import { sliderSettings } from '../../utils/common';
// import Swiper from 'swiper';
// import { Card } from 'react-bootstrap';

const Solution = () => {
  return (
    <section className='s-wrapper'>
      <div className='paddings innerWidth s-container'>
        <div className='s-head flexColCenter'>
          <span className='primaryText'>A new beginning for a secure future</span>
          <span className='secondaryText'>In the face of calamity there comes a time when Human spirit has no <br /> option but to rise up to the challenge. Let’s get ready.</span>
        </div>
        <Swiper {...sliderSettings}>
        <SliderButtons/>
          {
            data && data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className='flexColStart s-card'>
                  <img src={card.images} alt='home' />

                  <span className='primaryText r-name'>
                    <span>{card.name}</span>
                  </span>
                  <span className='secondaryText'>{card.details}</span>
                </div>
              </SwiperSlide>

            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Solution;

const SliderButtons = () => {
  const swiper = useSwiper()
  return (
    <div className='flexCenter s-button'>
      <button onClick={() => swiper.slidePrev()}> &lt; </button>
      <button onClick={() => swiper.slideNext()}> &gt; </button>

    </div>
  )
}