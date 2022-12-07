import React, {useLayoutEffect, useRef} from 'react';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

//--> Component

import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import BgImage from "../header/BgImage";
import {getPortfolioLink} from "../../api/portfolio/PortfolioData";
import {dsnCN} from "../../hooks/helper";


function NextProject({height, attrContent, overlay, heroContent, to, className}) {

    const header = useRef();
    const bg = useRef();
    const content = useRef();
    const {title, src, video} = heroContent || {};

    useLayoutEffect(() => {


        const animate = gsap.timeline();

        (bg.current) && animate.fromTo(bg.current.children, {yPercent: -30, scale: 1.08}, {
            yPercent: 0,
            scale: 1,
            ease: "none"
        }, 0);
        (content.current) && animate.from(content.current, {yPercent: -20, autoAlpha: 0, ease: "none"}, 0);


        ScrollTrigger.create({
            animation: animate,
            trigger: header.current,
            end: "top",
            scrub: true
        });

        setTimeout(ScrollTrigger.refresh, 500);


        return () => {
            if (animate.scrollTrigger)
                animate.scrollTrigger.kill();

            animate.kill();

        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div ref={header} className={dsnCN("half-content", (src || video) && 'v-dark-head background-main', className)}>
            {src && <BgImage src={src} height={height} overlay={overlay} video={video} ref={bg}/>}

            {
                heroContent &&
                <Container fluid  {...attrContent} className="hero-content" ref={content}>
                    {title &&
                    <Link to={to || getPortfolioLink(heroContent)}><h1 className="title-heading">{title}</h1></Link>}
                    <p className="mt-30 h6">Next Project</p>
                </Container>
            }


        </div>
    );
};


NextProject.defaultProps = {
    height: "100%",
}


export default NextProject;
