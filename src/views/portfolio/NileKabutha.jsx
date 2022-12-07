import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";

//--> Component
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import HeaderFull from "../../components/header/HeaderFull";
import {Helmet} from "react-helmet";


const NileKabutha = ({data}) => {

    const nextData = getPortfolioItem(7);


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
            <HeaderFull heroContent={data}
                        parallax={{yPercent: 30, scale: 1.1}}
                        textButton="View Website"
                        href="https://www.behance.net/gallery/57136617/Time-Tag_Watch?tracking_source=search%7Cwatch%20"
                        overlay={data.overlay}>
                <strong className="color-heading">Kabutha Kago</strong> <span> - June 10th 2018</span>
            </HeaderFull>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin text-center">
                <TitleCover>Nile</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>A whole new brand</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Striking and powerful Aston Martin Vantage captivates you at the first sight. We
                        couldnu2019t resist the temptation to create a series of beautiful images for this car.
                        Striking and powerful Aston Martin Vantage captivates you at the first sight. We
                        couldnu2019t resist the temptation to create a series of beautiful images for this car.
                    </p>
                    <ButtonProject className="mt-20"
                                   href="https://www.behance.net/gallery/66646747/Nile"
                                   target="_blank" rel="noopener noreferrer">
                        VISIT SITE
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            <ParallaxImage className="section-margin container" src="/assets/img/project/project6/2.jpg" height={"80vh"}
                           caption="Caption #1"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>
            <ParallaxImage className="section-margin" src="/assets/img/project/project6/3.jpg" caption="Caption #1"
                           triggerHook="top"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>

            {/*Start Info Box*/}
            <Container className="p-relative section-margin text-center">
                <TitleCover>Nile</TitleCover>
                <TextTrigger duration={0.5} stagger={0.1}>
                    {(ref) => <h5 className="m-w750 dsn-auto" ref={ref}>
                        The Brief team has been sincerely committed to designing great communication around our
                        projects. Our love their creative work - and so do we!
                    </h5>}
                </TextTrigger>
            </Container>

            <ParallaxImage className="section-margin container" src="/assets/img/project/project6/4.jpg" height={"80vh"}
                           caption="Caption #4"/>
            <ParallaxImage className="section-margin" src="/assets/img/project/project6/5.jpg" caption="Caption #5"
                           triggerHook="top"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>

            <NextProject heroContent={nextData}/>


        </React.Fragment>
    );
}


export default NileKabutha;