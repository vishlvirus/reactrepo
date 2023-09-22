import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../utils/testimonialsData';
import leftArrow from '../../assests/leftArrow.png';
import rightArrow from '../../assests/rightArrow.png';



const tLength = testimonialsData.length;

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className='t-head flexColCenter'>
    <span className='primaryText'>Testimonials</span>
    <div className='Testimonials'>
    
      <div className='left-t'>
        
        <span className='primaryText'> What they </span>
        <span className='primaryText'> say about us </span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span className='orangeText'>
            {testimonialsData[selected].name}

          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className='right-t'>
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt='' />

        <div className='arrows'>
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }}
            src={leftArrow} alt='' />
          <img
            onClick={() => {
              selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
            }}
            src={rightArrow} alt='' />

        </div>

      </div>
    </div>
    </div>
  )
}

export default Testimonials