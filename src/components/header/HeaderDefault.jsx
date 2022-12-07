import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

//--> Component
import {Container} from "react-bootstrap";
import MetaPost from "./MetaPost";
import BgImage from "./BgImage";


const HeaderDefault = ({height, separate, attrContent, overlay, parallax, heroContent}) => {

    const header = useRef();
    const bg = useRef();
    const q = gsap.utils.selector(header);
    const {date, category, title, src, video} = heroContent;

    useEffect(() => {
        gsap.from(q('.post-info span '), {y: -15, stagger: 0.1, autoAlpha: 0});
        gsap.from(q('h1'), {y: 15, autoAlpha: 0});


        (bg.current && parallax) && gsap.to(bg.current.children, {
            ...parallax,
            ease: "none",
            scrollTrigger: {
                trigger: header.current,
                start: "top top",
                scrub: true
            }
        });


    },[]);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <header ref={header}>
            {src && <BgImage src={src} video={video} overlay={overlay} height={height} ref={bg}/>}

            {
                heroContent &&
                <Container  {...attrContent} className="hero-content mt-section mb-60">
                    {(date || category) && <MetaPost category={category} separate={separate} date={date}/>}
                    {title && <h1 className="title-section">{title}</h1>}
                </Container>
            }


        </header>
    );
};

HeaderDefault.defaultProps = {
    height: "80vh",
    overlay: 4,
    parallax: {
        yPercent: 30,
    }
}


export default HeaderDefault;
