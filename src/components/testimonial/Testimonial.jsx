import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import MoveTrigger from "../../animation/MoveTrigger";
import {Pagination, SwiperOptions} from "swiper";
import {dsnCN} from "../../hooks/helper";


const TestimonialDetails = [
    {
        name: "Helen Ginsberg",
        label: "CEO of Treasure Island",
        src: "assets/img/avatar/1.jpg",
        description: `"The Brief team has been sincerely committed to designing great communication around our projects. Our customers love their  creative work - and so do we!"`
    },
    {
        name: "Helen Ginsberg",
        label: "CEO of Treasure Island",
        src: "assets/img/avatar/2.jpg",
        description: `"Stage direction, music, ballet, workshops, backstage, the GTG presents the first episode of the series “Les Indes galantes en création"`
    },
    {
        name: "Helen Ginsberg",
        label: "CEO of Treasure Island",
        src: "assets/img/avatar/3.jpg",
        description: `"The Brief team has been sincerely committed to designing great communication around our projects. Our customers love their  creative work - and so do we!"`
    },
    {
        name: "Helen Ginsberg",
        label: "CEO of Treasure Island",
        src: "assets/img/avatar/4.jpg",
        description: `"Stage direction, music, ballet, workshops, backstage, the GTG presents the first episode of the series “Les Indes galantes en création"`
    },

]


function Testimonial({className, title, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial background-section testimonial-one', className)}>
            <div className="testimonial-inner ">
                <div className="title-box">
                    {title &&
                    <MoveTrigger from={{y: 0, opacity: 0}} to={{y: -60, opacity: 1}} mobile={false}>
                        {(ref) => <h2 className='title-section p-relative z-index-1' ref={ref}>
                            {title}
                        </h2>}
                    </MoveTrigger>
                    }

                </div>
                <div className='content-box'>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable: true, el: '.swiper-pagination'}}
                        slidesPerView={1}
                        {...restProps}
                    >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            src={item.src} authorName={item.name} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>

                                );
                            }
                        )}

                        <div className="swiper-pagination"/>

                    </Swiper>
                </div>

            </div>
        </section>

    )
}


export default Testimonial;