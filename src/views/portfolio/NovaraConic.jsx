import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";


import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const NovaraConic = ({data}) => {

    const nextData = getPortfolioItem(9);


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
                        parallax={{yPercent: 30}}
                        textButton="View Website"
                        href="https://www.behance.net/gallery/69632537/Novara-Conic"
                        overlay={data.overlay}>
                <strong className="color-heading">Published</strong> <span>  - October 19th 2017 </span>
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Novara</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>A whole new brand</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                        Cal was first. The first public university in the great state of California. They are the
                        pioneers. They are the trailblazers who started it all. Same goes for Under Armour. When
                        status quo was the status quo, they changed everything. Starting revolutions. Challenging
                        authority. Being first. Thatu2019s what Cal and Under Armour have been doing since their
                        respective day ones. Now, together, through passion, design, and the relentless pursuit of
                        innovation, they fight to keep that revolutionary spirit alive.
                    </p>
                    <ButtonProject className={"mt-20"}
                                   href="https://www.behance.net/gallery/69632537/Novara-Conic"
                                   target="_blank" rel="noopener noreferrer">
                        VISIT SITE
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Grid Project*/}
            <Container className="section-margin">
                <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                    <img src="/assets/img/project/project8/2.jpg" alt=""/>
                    <img src="/assets/img/project/project8/3.jpg" alt=""/>
                    <img src="/assets/img/project/project8/4.jpg" alt=""/>
                    <img src="/assets/img/project/project8/1.jpg" alt=""/>
                </DsnGrid>
            </Container>
            {/*Start Grid Project*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project8/5.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) => <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                        <TitleCover>EGRON</TitleCover>
                        <h2 className='title-section border-line-left' ref={ref}>IT STARTS WITH US.</h2>
                        <h6 ref={ref}>
                            We set THE blue and gold standard, emblazoned it with a bear, and held it high. Then we
                            watched
                            our passion spread across the state.n
                        </h6>
                        <p ref={ref}>
                            Challenging the status quo, driving forward, never backing down. The future of intelligence.
                            The
                            future of excellence. The future of defiance, innovation, and sport. This is where it all
                            begins.n
                        </p>
                        <div className="button-box" ref={ref}>
                            <ButtonDefault text="launch" icon={faAngleRight} href="#0"/>
                        </div>

                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            <ParallaxImage className="mb-section" src="/assets/img/project/project8/6.jpg" caption="Caption #5"
                           triggerHook="top" parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>


            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default NovaraConic;