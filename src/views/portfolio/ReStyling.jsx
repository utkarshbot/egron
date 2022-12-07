import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
//--> Component

import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const ReStyling = ({data}) => {

    const nextData = getPortfolioItem(4);


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
                        href="https://www.behance.net/gallery/82911685/Re-Styling-for-Neorama?tracking_source=projectScroller"
                        overlay={data.overlay}>
                <strong className="color-heading">Seohee Lee</strong> <span> - September 26th 2017</span>
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>styling</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>A whole new brand</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Once the brand strategy was sharp and real for everyone inside of the company, all the brand
                        behavior started to roll out as stationary material, social media efforts, office ambiance,
                        and internal communication, modernizing its interface with clients, prospects, suppliers and
                        the creative industry in general.
                    </p>
                    <ButtonProject className="mt-20"
                                   href="https://www.behance.net/gallery/82911685/Re-Styling-for-Neorama?tracking_source=projectScroller"
                                   target="_blank" rel="noopener noreferrer"> VISIT SITE</ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Parallax Image*/}
            <ParallaxImage className="section-margin" src="/assets/img/project/project3/2.jpg" caption="Neorama"/>
            {/*End Parallax Image*/}

            {/*Start Info Box*/}
            <Container className="p-relative section-margin text-center">
                <TitleCover>Neorama</TitleCover>
                <TextTrigger duration={0.5} stagger={0.1}>
                    {(ref) => <h5 className="m-w750 dsn-auto" ref={ref}>
                        New projects, new people, greater goals. So they reached us to help them expand their ability to
                        communicate with their stakeholders and to refresh their identity system
                    </h5>}
                </TextTrigger>
            </Container>
            {/*End Info Box*/}

            {/*Start Parallax Image*/}
            <ParallaxImage className="section-margin" src="/assets/img/project/project3/3.jpg" caption="Neorama"
                           triggerHook="top" parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>
            {/*End Parallax Image*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default ReStyling;