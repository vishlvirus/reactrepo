import React from 'react';
import './Program.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Imagess from '../../image/img_5.jpg';
import data from '../../utils/accordion';

const Program = () => {
    return (
        <section className='v-wrapper'>
            <div className='paddings innerWidth flexCenter v-container'>

                <div className='flexCenter v-left'>
                    <div className='image-container'>
                        <img src={Imagess} alt='' />
                    </div>
                </div>

            </div>

            <div className='flexColStart v-right'>
                <span className='orangeText'>Our Values</span>
                <span className='primaryText'>Values we give to You </span>
                <span className='secondaryText'> We are always ready to help by providing the best services for you.
                    <br />
                    We believe that a good service can make your work more easier and helpful.
                </span>
                <Accordion
                    className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                >
                    {
                        data && data.map((item, i) => {
                            return (
                                <AccordionItem className='accordionItem' key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        <div className='flexCenter icon'>{item.icon}</div>
                                        <span className='primaryText'> {item.heading}</span>
                                        <div className='flexCenter icon'>
                                        <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                    <p className='secondaryText'>{item.details}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>




            </div>

        </section>
    )
}

export default Program