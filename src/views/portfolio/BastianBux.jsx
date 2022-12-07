import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";


import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import NextProject from "../../components/next/NextProject";
import BoxRight from "../../components/box-right/BoxRight";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import {Helmet} from "react-helmet";


const BastianBux = ({data}) => {

    const nextData = getPortfolioItem(1);


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
                        textButton="View Website"
                        href="https://www.behance.net/gallery/37100597/Bastian-Bux?tracking_source=search"
                        overlay={data.overlay}>
                <strong className="color-heading">Published </strong> <span> - July 15th 2019 </span>
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Bastian</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Who is Bux?</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Bastian bux is the consequence of reducing everything surrounding a dj and producer to its
                        essential element: the music. that is the intention of bux: be stripped of all artifice and
                        be judged by his work. Pieces full of deep textures, powerful harmonies, heavy beats and fat
                        basslines; where everything is assembled with soul and sensibility.
                    </p>
                    <ButtonProject className="mt-20"
                                   href="https://www.behance.net/gallery/37100597/Bastian-Bux?tracking_source=search"
                                   target="_blank" rel="noopener noreferrer"> VISIT SITE </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            <ParallaxImage className="section-margin container" src="/assets/img/project/project9/2.jpg"
                           height={"80vh"}
                           caption="Caption #1"/>

            {/*Start Box Right Info*/}
            <BoxRight className="section-margin" src="/assets/img/project/project9/3.jpg">
                <FadeUpTrigger>
                    {(ref) =>
                        <React.Fragment>
                            <h2 ref={ref}>
                                How is your <br/>visual identity?
                            </h2>

                            <p className="mt-30" ref={ref}>
                                A system that young people around the world with a club culture and techno enthusiasts
                                feel
                                identified. We generated a simple logo that is the basis for generating a geometric and
                                liquid system.
                            </p>

                        </React.Fragment>}
                </FadeUpTrigger>
            </BoxRight>
            {/*End Box Right Info*/}

            <ParallaxImage className="section-margin" src="/assets/img/project/project9/4.gif" caption="Caption #5"
                           triggerHook="top"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>

            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default BastianBux;