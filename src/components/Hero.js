import React from 'react';
import './Hero.css';
import Images from '../image/step_img_6.jpg';
import CountUp from 'react-countup';
// import HiLocationMarker from 'react-icons/hi'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>

        <div className='flexColStart hero-left'>

          <div className='hero-title'>

            <div className='orange-circle' />

            <h2> Welcome to <br /> Solicon Pvt Ltd </h2>
          </div>

          <div className='flexColStart hero-des'>

            <span className='orangeText'>ensure business continuity with cloud</span>

            <span className='secondaryText'>BEAT THE UNCERTAINTY, PUSH THE ENVELOPE, WIN WITH CLOUD</span><br />

            <span className='ternaryText'>Get your business edge back with Cloud powered solutions, <br />start your digital transformation with Solicon.</span>
          </div>

          <div className='flexCenter search-bar'>
            <input type='text' />
            <button className='button'>Search</button>
          </div>
          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={8800} end={9000} duration={5} />
                <span className='orangeText'>+</span><br />
              </span>
              <span >Types of services</span>
            </div>

            <div className='flexColCenter stat'>
              <span>
                <CountUp start={20} end={150} duration={5} />
                <span className='orangeText'>+</span><br />

              </span>
              <span>Happy Employee's</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp end={50} duration={5} />
                <span className='orangeText'>+</span><br />
              </span>
              <span> Awards WIN</span>
            </div>
          </div>


        </div>

        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img className='imageee' src={Images} alt='' />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero;

// <div className='hero-container'>
//       <video src='/videos/practice.mp4' autoPlay loop muted />
//       <h1>ADVENTURE AWAITS</h1>
//       <p>What are you waiting for?</p>
//       <div className='hero-btns'>
//         <Button
//           className='btns'
//           buttonStyle='btn--outline'
//           buttonSize='btn--large'
//         >
//           GET STARTED
//         </Button>
//         <Button
//           className='btns'
//           buttonStyle='btn--primary'
//           buttonSize='btn--large'
//           onClick={console.log('hey')}
//         >
//           WATCH TRAILER <i className='far fa-play-circle' />
//         </Button>
//       </div>
//     </div>

// Counter Code //
// <div className='flexCenter stats'>
// <div className='flexColStart stat'>
// <span>
// <CountUp start={8800} end={9000} duration={5}/>
// <span>+</span><br/>
// All types of IT Services
// </span>
// </div>
// </div>