import React, {useEffect, useRef} from 'react';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

//--> Component
import BgImage from "./BgImage";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import MetaPost from "./MetaPost";
import ButtonLink from "../button/button-link/ButtonLink";
import {dsnCN} from "../../hooks/helper";


function HeaderHalf({
                        height,
                        separate,
                        attrContent,
                        overlay,
                        parallax,
                        heroContent,
                        parallaxContent,
                        children,
                        textButton,
                        href, className
                    }) {

    const header = useRef();
    const bg = useRef();
    const holder = useRef();
    const content = useRef();
    const q = gsap.utils.selector(header);
    const {category, title, src, video} = heroContent;


    useEffect(() => {
        gsap.from(q('.post-info span '), {y: -15, stagger: 0.1, autoAlpha: 0});
        gsap.from(q('h1 , .dsn-description'), {y: 15, autoAlpha: 0, stagger: 0.1});

        const animate = gsap.timeline();
        (bg.current && parallax) && animate.to(bg.current.children, {...parallax, ease: "none"}, 0);
        (content.current && parallaxContent) && animate.to(content.current, {...parallaxContent, ease: "none"}, 0);
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


    if (!Object.keys(heroContent).length || !src)
        return <></>;

    return (

        <header ref={header}
                className={dsnCN("half-content", (src || video) && 'v-dark-head background-main', className)}>
            {src && <BgImage src={src} height={height} overlay={overlay} video={video} ref={bg}/>}

            {
                heroContent &&
                <Container fluid  {...attrContent} className="hero-content" ref={content}>
                    {category && <MetaPost category={category} separate={separate}/>}
                    {title && <h1 className="title-heading">{title}</h1>}
                    {children && <div className="dsn-description mt-30">{children}</div>}
                </Container>
            }


            <FooterHead className="container-fluid" ref={holder}>
                <div className="scroll">
                    <span className="background"/>
                    <span className="triangle"/>
                </div>
                <ButtonLink href={href} target="_blank" rel="noopener noreferrer">
                    {textButton}
                </ButtonLink>
            </FooterHead>

        </header>
    );
};

const FooterHead = styled.div`
  position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index : 1;
  
  .scroll {
 
    display: block;
 
    .background {
        position: relative;
        background: rgba(218, 218, 218, 0.24);
        animation: background 5s infinite;
        width: 1px;
        height: 30px;
        top: 6px;
        left: 3px;
    }

    @keyframes background {
      0% {
        transform: translateY(0) scaleY(1);
      }
      50% {
        transform: translateY(0) scaleY(1);
      }
      75% {
        transform: translateY(30px) scaleY(0);
      }
      76% {
        transform: translateY(-20px) scaleY(0);
      }
      93% {
        transform: translateY(0) scaleY(1);
      }
    }

    .triangle {
      display: block;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid rgba(218, 218, 218, 0.24);
      animation: triangle 5s infinite;
      transform-origin: 50% 0;

    }

    @keyframes triangle {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1);
      }
      60% {
        transform: scale(0);
      }
      90% {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
  }
`;


HeaderHalf.defaultProps = {
    height: "100%",
    parallax: {
        yPercent: 30,
    },
    parallaxContent: {
        yPercent: 40,
        autoAlpha: 0
    },
    heroContent: {}
}


export default HeaderHalf;
