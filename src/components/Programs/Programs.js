import React from 'react';
import './Programs.css';
import {servicesData} from '../../utils/servicesData';

const Programs = () => {
    return (
        <div className='Programs' id='programs'>
            <div className='programs-header'>
                <span className='primaryText'>Explore</span>
                <span className='primaryText'> Our Services </span>
                <span className='primaryText'> To make your Business Effective </span>
            </div>

            <div className='program-categories'>
                {servicesData.map((services) => (
                    <div className='category'>
                        {services.image}
                        <span> {services.heading} </span>
                        <span> {services.details} </span>
                        <div className='join us'>Join us</div>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default Programs;