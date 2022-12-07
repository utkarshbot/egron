import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
//--> Component


import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import BoxGallery from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import HeaderFull from "../../components/header/HeaderFull";
import {Helmet} from "react-helmet";


const WhatIfGold = ({data}) => {

    const nextData = getPortfolioItem(6);


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
                <strong className="color-heading">Alexander Shepard</strong> <span> - November 28th 2019</span>
            </HeaderFull>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin text-center">
                <TitleCover>Gold</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>What If Gold</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        The series of high quality visualization renders are based on Apple products in a proposed
                        gold color. The idea is to showcase some stylish, realistic photos of Apple product such as
                        iMac (Pro), MacBook and Mac Pro in gold version. As we know, almost of all Apple computers
                        are offered in two color options at the moment (excluding Macbook 12 & MacBook Air 2019).
                        So, we wonder - what if gold?
                    </p>
                    <ButtonProject className={"mt-20"}
                                   href="https://www.behance.net/gallery/88747469/What-If-Gold"
                                   target="_blank" rel="noopener noreferrer">
                        VISIT SITE
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            <ParallaxImage className="section-margin" src="/assets/img/project/project5/3.jpg" caption="Caption #1"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>


            {/*Start Gallery List*/}
            <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}
                        images={[
                            {src: "/assets/img/project/project5/2.jpg", caption: "Trevor Bittinger"},
                            {src: "/assets/img/project/project5/4.jpg", caption: "Sef McCullough"},
                            {src: "/assets/img/project/project5/5.jpg", caption: "Sef McCullough"}
                        ]}
            />
            {/*End Gallery List*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project5/6.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) => <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                        <TitleCover>Gold</TitleCover>
                        <h2 className='title-section border-line-left' ref={ref}>What If Gold?</h2>
                        <h6 ref={ref}>
                            The series of high quality visualization renders are based on Apple products in a proposed
                            gold color.
                        </h6>
                        <p ref={ref}>
                            The idea is to showcase some stylish, realistic photos of Apple product such as iMac (Pro),
                            MacBook and Mac Pro in gold version. As we know, almost of all Apple computers are offered
                            in two color options at the moment (excluding Macbook 12 & MacBook Air 2019). So, we wonder
                            - what if gold?
                        </p>
                        <div className="button-box" ref={ref}>
                            <ButtonDefault text="launch" icon={faAngleRight} href="#0"/>
                        </div>

                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}


            <NextProject heroContent={nextData}/>


        </React.Fragment>
    );
}


export default WhatIfGold;