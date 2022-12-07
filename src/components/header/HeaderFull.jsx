import React, {useEffect, useRef} from 'react';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

//--> Component
import BgImage from "./BgImage";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import MetaPost from "./MetaPost";
import {dsnCN} from "../../hooks/helper";


function HeaderFull({
                        height,
                        className,
                        separate,
                        attrContent,
                        overlay,
                        parallax,
                        heroContent,
                        parallaxContent,
                        children
                    }) {

    const header = useRef();
    const bg = useRef();
    const holder = useRef();
    const content = useRef();
    const animateText = useRef();
    const q = gsap.utils.selector(header);
    const {category, title, src, video, subTitle} = heroContent;


    useEffect(() => {
        gsap.from(q('.post-info span '), {y: -15, stagger: 0.1, autoAlpha: 0});
        gsap.from(q('.text-head , .dsn-description'), {y: 15, autoAlpha: 0, stagger: 0.1});

        const animate = gsap.timeline();
        (bg.current && parallax) && animate.to(bg.current.children, {...parallax, ease: "none"}, 0);
        (content.current && parallaxContent) && animate.to(content.current, {...parallaxContent, ease: "none"}, 0);
        (animateText.current) && animate.to(animateText.current, {clipPath: 'inset(-20% 0 -10px 0)', ease: "none"}, 0);
        animate.to(holder.current, {y: 70, autoAlpha: 0, ease: "none"}, 0);

        ScrollTrigger.create({
            animation: animate,
            trigger: header.current,
            start: "top top",
            scrub: true
        });


        return () => {
            if (animate.scrollTrigger)
                animate.scrollTrigger.kill();

            animate.kill();
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <Header className={dsnCN("overflow", (src || video) && 'v-dark-head', className)} ref={header}>
            {src && <BgImage src={src} height={height} overlay={overlay} video={video} ref={bg}/>}

            {
                heroContent &&
                <Container   {...attrContent} className="hero-content" ref={content}>
                    {subTitle && <MetaPost category={subTitle} separate={' '}/>}
                    {category && <MetaPost category={category} separate={separate}/>}
                    {title && (
                        <div className="text-head">
                            <h1 className="title-heading">{title}</h1>
                            <span className="title-heading h1" ref={animateText}>{title}</span>
                        </div>
                    )}
                    {children && <div className="dsn-description mt-30">{children}</div>}
                </Container>
            }


            <FooterHead className="container-fluid" ref={holder}>
                <span className="letter">discover</span>
                <div className="scroll-down__line">
                    <span/>
                </div>
                <span className="letter">scroll to</span>
            </FooterHead>

        </Header>
    );
};

const Header = styled.header`
   
    height: 100vh;
    
    
    .hero-img{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }
    
    .hero-content{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
        text-align: center;
    }
    
    .text-head{
        position: relative;
            h1 {
               color: transparent;
               -webkit-text-stroke: 1px var(--heading-color); 
            }
            .h1{
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
                clip-path: inset(70% 0 -10px 0);
            }
    }
    
`;

const FooterHead = styled.div`
   position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.4s ease-in-out;
    z-index: 4;

    .scroll-down__line {
      position: relative;
      height: 65px;
      width: 2px;
      background-color: rgba(255, 255, 255, 0.1);

      span {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: height 2s infinite cubic-bezier(0.17, 0.67, 0.59, 0.85);
        background-color: var(--heading-color);
      }
    }

    @keyframes height {
      0% {
        transform: scaleY(0);
        transform-origin: 0% 0%;
        opacity: 0;
      }

      50% {
        transform: scaleY(1);
        transform-origin: 0% 0%;
        opacity: 1;
      }

      51% {
        transform: scaleY(1);
        transform-origin: 0% 100%;
        opacity: 1;
      }

      100% {
        transform: scaleY(0);
        transform-origin: 0% 100%;
        opacity: 0.5;
      }
    }

    .letter {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 0 10px;
      color: var(--heading-color);;
      margin-bottom: 10px;
    }
`;


HeaderFull.defaultProps = {
    height: "100%",
    parallax: {
        yPercent: 30,
    },
    parallaxContent: {
        yPercent: 50,
        autoAlpha: 0
    }
}


export default HeaderFull;
