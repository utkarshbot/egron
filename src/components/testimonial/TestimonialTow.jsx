import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {SwiperOptions} from "swiper";
import ControlNav from "../slider-portfolio/ControlNav";
import {dsnCN} from "../../hooks/helper";

const TestimonialDetails = [
    {
        authorName: "Brandon Barbello",
        label: "Vivalnk Inc | Google IO",
        description: `Dave & his team at Blacksmith Agency were incredible partners at a critical time for our company. Day in & day out, they were there for us every step of the way delivering results for us & our high profile corporate partner.`
    },
    {
        authorName: "Helen Ginsberg",
        label: "CEO of Treasure",
        description: `Dave & his team at Blacksmith Agency were incredible partners at a critical time for our company. Day in & day out, they were there for us every step of the way delivering results for us & our high profile corporate partner.`
    },
]


function TestimonialTow({className, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial testimonial-tow', className)}>
            <div className="testimonial-inner">
                <div className='content-box'>
                    <Swiper slidesPerView={1} {...restProps} >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            authorName={item.authorName} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>
                                );
                            }
                        )}
                        <ControlNav/>

                    </Swiper>
                </div>
            </div>
        </section>

    )
}


export default TestimonialTow;