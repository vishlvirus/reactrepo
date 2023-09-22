import React from 'react';
import './Companies.css';
import Mart  from '../../Clients/1mart.png';
import Bajaj from '../../Clients/bajaj.gif';
import Invenio from '../../Clients/invenio.png';
import LimeRoad from '../../Clients/limeroad.png';
import Mvn from '../../Clients/MVN.png';
import Oxigen from '../../Clients/oxigen.png';
import Srs from '../../Clients/srs2.png';
import Viridian from '../../Clients/viridian.png';
import Wtcce from '../../Clients/wtcce.png'


const Companies = () => {
  return (
    <section className='c-wrapper'>

    <div className='flexStart secondaryText partners'>
    <h1>Our Partners</h1>
    </div>
    <div className='paddings innerWidth flexCenter c-container'>
    <img src={Mart} alt=''/>
    <img src={Bajaj} alt=''/>
    <img src={Invenio} alt=''/>
    <img src={LimeRoad} alt=''/>
    <img src={Mvn} alt=''/>
    <img src={Oxigen} alt=''/>
    <img src={Srs} alt=''/>
    <img src={Viridian} alt=''/>
    <img src={Wtcce} alt=''/>
    </div>
    </section>
  )
}

export default Companies