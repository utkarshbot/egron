import React, {useEffect, useRef, useState} from 'react';
import {getPortfolioData} from "../../api/portfolio/PortfolioData";
import {Controller, Parallax} from "swiper";
import gsap from 'gsap';


// Importing the CSS
import 'swiper/css';
import './style.scss'

// Component
import {Swiper, SwiperSlide} from 'swiper/react';
import BgImage from "../header/BgImage";
import {useArrayRef} from "../../hooks/DsnHooks";
import dsnSplitting from "../../hooks/Spltting";
import NavSlider from "./NavSlider";
import ContentSlider from "./ContentSlider";
import ControlNav from "./ControlNav";
import SocialMediaSlider from "../social-media/SocialMediaSlider";
import {dsnCN} from "../../hooks/helper";


export interface SliderPortfolioProps {
    typeBg?: string | 'full-image' | 'padding-image',
    parallax?: Object,
    tag?: React.ElementType
}


function SliderPortfolio({className, typeBg, parallax, tag: Tag = 'div'}: SliderPortfolioProps) {

    const dataProject = getPortfolioData(),
        [contentRef, setContentRef] = useArrayRef(),
        [active, setActive] = useState(0),
        [bgSwiper, setBgSwiper] = useState(null),
        [navSwiper, setNavSwiper] = useState(null),
        rootSlider = useRef(),
        bg = useRef();

    let tl = gsap.timeline();


    useEffect(() => {

        const q = gsap.utils.selector(rootSlider);
        gsap.from(q('.post-info span '), {y: -15, stagger: 0.1, autoAlpha: 0});
        gsap.from(q('.btn-default , .dsn-description'), {
            y: 15, autoAlpha: 0, stagger: 0.1, onComplete: () => {
                gsap.set(q('.btn-default , .dsn-description'), {clearProps:true})
            }
        });

        contentRef.current.forEach((item) => {
            const title = item.querySelector('.title-heading');
            if (title)
                dsnSplitting.Char(title);
        });


        if (!parallax)
            return;

        gsap.to(bg.current, {
            ...parallax,
            ease: "none",
            scrollTrigger: {
                trigger: rootSlider.current,
                start: "top top",
                scrub: true
            }
        })


    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    const getContent = (swiper) => {
        const oldNum = swiper.slides[swiper.previousIndex].getAttribute("data-dsn-id");
        const newNum = swiper.slides[swiper.activeIndex].getAttribute("data-dsn-id");

        return [
            newNum,
            oldNum,
            gsap.utils.selector(contentRef.current[newNum]),
            gsap.utils.selector(contentRef.current[oldNum]),
        ]
    }


    const init = (swiper) => {
        swiper.slides.forEach((item) => {
            const video = item.querySelector('.swiper-slide:not(.swiper-slide-active) video');
            if (video)
                video.pause();
        });

    };

    const activeVideo = (swiper) => {
        const newVideo = swiper.slides[swiper.activeIndex].querySelector('video');
        const oldVideo = swiper.slides[swiper.previousIndex].querySelector('video');

        if (newVideo)
            newVideo.play();
        if (oldVideo)
            oldVideo.pause();
    }

    const swiperChange = (swiper) => {
        const [newNum, oldNum, newContent, oldContent] = getContent(swiper);
        const [newTitle, oldTitle] = [newContent('.title-heading .char'), oldContent('.title-heading .char')]
        const $isRight = oldNum < newNum;
        const animate = {
            show: {autoAlpha: 1, x: 0, stagger: 0.05, ease: "elastic.inOut", rotation: 0, scale: 1, yoyo: true},
            hide: {
                autoAlpha: 0,
                x: !$isRight ? "40%" : "-40%",
                stagger: 0.05,
                ease: "elastic.inOut",
                yoyo: true,
                rotation: 8,
                scale: 1.1
            }
        }
        activeVideo(swiper);
        tl.progress(1);
        tl = new gsap.timeline();


        tl.fromTo(
            $isRight ? oldTitle : oldTitle.reverse(), 1, animate.show,
            {...animate.hide, onComplete: () => setActive(Number.parseInt(newNum, 10))}
        );

        tl.fromTo($isRight ? newTitle.reverse() : newTitle, 1.2, animate.hide, animate.show, "-=.1");


    }

    const optionSwiper = {
        modules: [Parallax, Controller],
        spaceBetween: 50,
        slidesPerView: 1,
        parallax: true,
        speed: 1500,
        onInit: init,
        onSlideChange: swiperChange,
        onSwiper: setBgSwiper,
        controller: {control: navSwiper}
    }

    return (
        <Tag className={dsnCN('root-slider half-content v-dark-head background-main', className)} ref={rootSlider}>

            <div className={`bg-image hero-img ${typeBg}`} ref={bg}>
                <Swiper  {...optionSwiper} grabCursor>
                    {dataProject.map((item, key) =>
                        <SwiperSlide className="overflow" key={key} data-dsn-id={key}>
                            <BgImage className={"dsn-swiper-parallax-transform"} src={item.src} video={item.video}
                                     alt={item.title}
                                     overlay={item.overlay} height={"100%"} data-swiper-parallax={"30%"}/>
                        </SwiperSlide>
                    )}

                    <div className="control-num">
                        <span className="sup">{((active) <= 9 ? "0" : '') + (active + 1)}</span>
                    </div>
                    <ControlNav/>

                </Swiper>
            </div>
            <ContentSlider data={dataProject} ref={setContentRef} activeClass={active}/>
            <NavSlider data={dataProject}
                       speed={optionSwiper.speed}
                       onSwiper={setNavSwiper}
                       controller={{control: bgSwiper}}
            />
            <SocialMediaSlider/>
        </Tag>

    );
}

SliderPortfolio.defaultProps = {
    parallax: {
        yPercent: 30,
    },
}

export default SliderPortfolio;