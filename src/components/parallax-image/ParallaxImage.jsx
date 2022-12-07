import React, {useEffect, useRef, useState} from 'react';
import './style.scss';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {dsnCN} from "../../hooks/helper";
import LazyImg, {LazyImgProps} from "../LazyImg";

export interface ParallaxImageProps extends LazyImgProps {
    speed?: number | string,
    parallax?: Object,
    overlay?: number,
    height?: string,
    heightTable?: string,
    heightMobile?: string,
    triggerHook?: string | 'top' | "center" | "bottom",
    animationActive?: boolean,
    caption?: string,
    parallaxFrom?: Object
}

function ParallaxImage(
    {
        speed,
        parallax,
        overlay,
        height,
        heightTable,
        heightMobile,
        triggerHook,
        animationActive,
        caption,
        className,
        parallaxFrom,
        ...restProps
    }: LazyImgProps) {

    const target = useRef();
    const img = useRef();
    const activeAnimateTrigger = useRef();
    const [active, setActive] = useState('');


    useEffect(() => {

        if (!restProps.src)
            return;


        if (triggerHook === 'bottom')
            gsap.set(img.current, {height: `+=${speed}%`, yPercent: `-=${speed}`});
        if (triggerHook === 'center')
            gsap.set(img.current, {height: `+=${speed / 2}%`, yPercent: `-=${speed / 2}`});

        if (parallaxFrom)
            gsap.set(img.current, parallaxFrom);


        if (animationActive)
            activeAnimateTrigger.current = ScrollTrigger.create({
                trigger: target.current,
                start: `top bottom`,
                onEnter: self => setActive('dsn-active')
            });

        const image = gsap.to(img.current, {
            ...parallax,
            yPercent: triggerHook === 'top' ? speed : 0,
            force3D: true,
            ease: "none",
            scrollTrigger: {
                trigger: target.current,
                start: `top ${triggerHook}`,
                scrub: true,
            }
        });


        return () => {
            image.scrollTrigger.kill();
            image.kill();
            activeAnimateTrigger.current?.kill();
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        restProps.src &&
        <div className={dsnCN('dsn-parallax-img', animationActive && 'dsn-animate', active, className)}
             data-overlay={overlay}
             ref={target}
             style={{'--height': height, '--height-table': heightTable, '--height-mobile': heightMobile}}
        >
            <LazyImg className="cover-bg-img p-absolute" {...restProps} targetRef={img}/>
            {caption && <div className="cap"><span>{caption}</span></div>}
        </div>
    );
}

ParallaxImage.defaultProps = {
    height: "100vh",
    heightTable: "80vh",
    heightMobile: "50vh",
    overlay: 0,
    triggerHook: "bottom",
    animationActive: true,
    speed: 30,
    parallax: {}
}

export default ParallaxImage;