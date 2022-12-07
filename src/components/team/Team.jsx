import React from 'react'

import './style.scss'
import TeamItem from './TeamItem';
import 'swiper/css';


import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, SwiperOptions} from "swiper";

const TeamDetails = [
    {
        src: "/assets/img/team/1.png",
        title: "Blake Hamilton",
        subTitle: "Project manager",
    },
    {
        src: "/assets/img/team/2.png",
        title: "John Doe",
        subTitle: "Engineer",
    },
    {
        src: "/assets/img/team/3.png",
        title: "Ira Mulanax",
        subTitle: "Founder",
    }

]


const Team = ({className, desktop, mobile, tablet, ...restProps}: SwiperOptions) => {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{clickable: true, el: '.swiper-pagination'}}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile
            }}
            className={`dsn-team ${className || ''}`}
            {...restProps}
        >
            {TeamDetails.map((item, index) =>
                <SwiperSlide key={index}>
                    <TeamItem src={item.src} title={item.title} subTitle={item.subTitle}/>
                </SwiperSlide>
            )}
            <div className="swiper-pagination"/>
        </Swiper>
    );
}

Team.defaultProps = {
    desktop: {
        slidesPerView: 2.5
    },
    tablet: {
        slidesPerView: 2

    },
    mobile: {
        slidesPerView: 2
    }
}

export default Team
