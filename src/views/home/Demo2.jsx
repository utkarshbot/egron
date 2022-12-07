import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import HeaderNormal from "../../components/header/HeaderNormal";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import TitleSection from "../../components/heading/TitleSection";
import ServiceOne from "../../components/services/ServiceOne";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import HeroSection from "../../components/hero-section/HeroSection";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import DsnGrid from "../../components/DsnGrid";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import {Helmet} from "react-helmet";


const heroContent = {
    title: "DIGITAL CREATIVE AGENCY",
    description: `We Bring Ideas To Life`,

}

function Demo2(props) {
    return (
        <>
            <Helmet>
                <title>EGRON - Portfolio & Agency React Template </title>
            </Helmet>
            <HeaderNormal className="background-section" description={heroContent.description}>
                {heroContent.title}
            </HeaderNormal>

            {/*Start Portfolio Swiper*/}
            <Container className="under-header section-margin">
                <Row>
                    <Col lg={{span: 8, offset: 4}}>
                        <PortfolioSwiper desktop={{slidesPerView: 2.5}} grabCursor/>
                    </Col>
                </Row>
            </Container>
            {/*End Portfolio Swiper*/}

            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="Our Services">
                    New Branding Agency
                </TitleSection>
                <ServiceOne className="text-center" col={3} colMobile={1} colGap={0} colGapTablet={30}/>
            </Container>
            {/*End Service Section*/}

            {/*Start Box Info Center Content*/}
            <div className="p-relative section-margin v-dark-head text-center">
                <ParallaxImage src="/assets/img/skills-2.jpg" heightMobile="50vh" heightTable="100vh" overlay={0}/>
                <FadeUpTrigger tag={Container} className="v-middle z-index-1">
                    <h2>People a Lift</h2>
                    <p className="m-w570 mt-20 dsn-auto">
                        When the Escalators Died in Stockholm’s Subway, Reebok Was
                        There to Give People a Lift.Literally
                    </p>
                    <ButtonPopup className="mt-20" href="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
                </FadeUpTrigger>
            </div>
            {/*End Box Info Center Content*/}

            {/*Start Hero Section*/}
            <Container className="section-margin dsn-right-container">
                <HeroSection/>
            </Container>
            {/*End Hero Section*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <TitleCover>EGRON</TitleCover>
                <FadeUpTrigger tag={DsnGrid} col={1} rowGap={30} rowGapTablet={20}>
                    <h2 className='title-section border-line-left'>
                        Time Tag Watch.
                    </h2>
                    <h6>
                        Sometimes, we need to check the time, wondering when our work or meeting will finish,
                        without getting caught by others.
                    </h6>
                    <p>
                        To avoid your boss’s staring eye, you should not roll your eyes to check the time. The Time
                        Tag Watch is a consummately appropriate for it. Those tags do the role of the hands of the
                        watch. By rotating the face of the watch not the hands, it gets harder to be damaged. It
                        provides you with experience to feel the time at the end of your finger without damaging
                        your watch.
                    </p>
                    <div className="button-box">
                        <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                    </div>
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Team*/}
            <Container className="section-margin dsn-right-container">
                <TitleSection description="our team">
                    The best team ever!
                </TitleSection>
                <Team loop grabCursor/>
            </Container>
            {/*End Team*/}

            <NextPageContent className="section-margin"/>
            <Footer/>

        </>
    );
}

export default Demo2;