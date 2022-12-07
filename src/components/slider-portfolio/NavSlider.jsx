import React from 'react';
import {Controller} from "swiper";
import BgImage from "../header/BgImage";
import {Swiper, SwiperSlide} from 'swiper/react';

function NavSlider({data, ...restProps}) {
    return (
        <div className="nav-slider">
            <Swiper
                modules={[Controller]}
                slidesPerView={3}
                centeredSlides={true}
                touchRatio={0.2}
                slideToClickedSlide={true}
                direction={"vertical"}
                resistanceRatio={0.65}
                spaceBetween={10}
                {...restProps}
            >
                {data.map((item, key) =>
                    <SwiperSlide key={key}>
                        <BgImage className="image-bg" src={item.srcSlider ? item.srcSlider : item.src}
                                 video={item.video}
                                 imageOnly={true} overlay={2}
                                 height={"100%"}/>
                        <div className="content">
                            <p>{((key) <= 9 ? "0" : '') + (key + 1)}</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default NavSlider;