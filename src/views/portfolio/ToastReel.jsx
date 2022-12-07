import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const ToastReel = ({data}) => {

    const nextData = getPortfolioItem(5);


    return (
        <React.Fragment>
            <Helmet>
                <title>EGRON - {data.title} </title>
                <meta
                    name="description"
                    content={data.description}
                />
            </Helmet>

            {/*Start Header Half*/}
            <HeaderHalf heroContent={data}
                        parallax={{yPercent: 30, scale: 1.1}}
                        textButton="View Website"
                        href="https://www.behance.net/gallery/88610693/Toast-2019-Reel"
                        overlay={data.overlay}
            >
                <strong className="color-heading">Seohee Lee</strong> <span> - September 26th 2017</span>
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Toast</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Toast Reel</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    {(ref) => <>
                        <p className="mt-20" ref={ref}>
                            We are thrilled to share our new reel with you all! Special thanks to all of our talented
                            friends we've had the pleasure of working with over the past year. We're excited to see what
                            the next year brings!
                        </p>
                        <ul className="mt-20 color-heading">
                            <li ref={ref}>Art Direction: by Toast</li>
                            <li className="mt-1" ref={ref}>Music: Vulfpeck - Dean Town</li>
                            <li className="mt-1" ref={ref}>Sound Design: John Poon</li>
                        </ul>
                    </>}
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Parallax Image*/}
            <ParallaxImage src="/assets/img/project/project4/2.jpg" caption="Caption #1" triggerHook="top"
                           animationActive={false}/>
            <ParallaxImage src="/assets/img/project/project4/3.jpg" caption="Caption #2" triggerHook="top"
                           animationActive={false}/>
            <ParallaxImage src="/assets/img/project/project4/4.jpg" caption="Caption #3" triggerHook="top"
                           animationActive={false}/>
            <ParallaxImage src="/assets/img/project/project4/5.jpg" caption="Caption #4" triggerHook="top"
                           animationActive={false}/>
            <ParallaxImage className="mb-section" src="/assets/img/project/project4/6.jpg" caption="Caption #5"
                           triggerHook="top" animationActive={false} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>
            {/*End Parallax Image*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default ToastReel;