import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import TextTrigger from "../../animation/TextTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import BoxGallery from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const TimeTagWatch = ({data}) => {


    const nextData = getPortfolioItem(3);


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
                        href="https://www.behance.net/gallery/57437111/Under-Armour-Cal?tracking_source=search%7CPhotography"
                        textButton="View Website"
                        overlay={data.overlay}>
                <strong className="color-heading">Seohee Lee</strong> <span> - October 19th 2017</span>
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Armour</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>A whole new brand</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    {(ref) => <>
                        <p className="mt-20" ref={ref}>
                            Cal was first. The first public university in the great state of California. They are the
                            pioneers. They are the trailblazers who started it all. Same goes for Under Armour. When
                            status quo was the status quo, they changed everything. Starting revolutions. Challenging
                            authority. Being first. Thatu2019s what Cal and Under Armour have been doing since their
                            respective day ones. Now, together, through passion, design, and the relentless pursuit of
                            innovation, they fight to keep that revolutionary spirit alive.
                        </p>
                        <ul className="mt-20 color-heading">
                            <li ref={ref}>Art Direction: Kirk Roush</li>
                            <li className="mt-1" ref={ref}>Photography: Sam Gordon</li>
                            <li className="mt-1" ref={ref}>Copy: Dane Rahlf & Matt Norman</li>
                        </ul>

                    </>}
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}


            {/*Start Gallery List*/}
            <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}
                        images={[
                            {src: "/assets/img/project/project2/3.jpg", caption: "Trevor Bittinger"},
                            {src: "/assets/img/project/project2/4.jpg", caption: "Sef McCullough"},
                            {src: "/assets/img/project/project2/5.jpg", caption: "Sef McCullough"}
                        ]}
            />
            {/*End Gallery List*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project2/2.jpg" className="section-margin" overlay={4}>
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


            <FJustifiedGallery rowHeight={300} className="section-margin"
                               images={[
                                   {src: "/assets/img/project/project2/6.jpg", caption: "CAPTION #1"},
                                   {src: "/assets/img/project/project2/7.jpg", caption: "CAPTION #2"},
                                   {src: "/assets/img/project/project2/8.jpg", caption: "CAPTION #3"},
                                   {src: "/assets/img/project/project2/9.jpg", caption: "CAPTION #4"},
                                   {src: "/assets/img/project/project2/10.jpg", caption: "CAPTION #5"},
                                   {src: "/assets/img/project/project2/11.jpg", caption: "CAPTION #6"},
                                   {src: "/assets/img/project/project2/12.jpg", caption: "CAPTION #7"},
                               ]}/>


            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default TimeTagWatch;