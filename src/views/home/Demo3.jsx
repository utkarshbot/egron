import React from 'react';
import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import HeaderFull from "../../components/header/HeaderFull";
import HeroSection from "../../components/hero-section/HeroSection";
import TitleSection from "../../components/heading/TitleSection";
import ServiceTow from "../../components/services/ServiceTow";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import HeroSectionTow from "../../components/hero-section/HeroSectionTow";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import DsnGrid from "../../components/DsnGrid";
import Testimonial from "../../components/testimonial/Testimonial";
import BlogSwiper from "../../components/blog/BlogSwiper";
import BrandClient from "../../components/brand-client/BrandClient";
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import {Helmet} from "react-helmet";


const heroContent = {
    title: "We Are Digital Agency.",
    src: '//theme.dsngrid.com/video/videos.mp4',
    video: {
        poster: '/assets/img/video-bg.jpg',
        loop: true
    },
    subTitle: `We make digital products and services.`,

}

function Demo3(props) {
    return (
        <React.Fragment>
            <Helmet>
                <title>EGRON - Portfolio & Agency React Template </title>
            </Helmet>

            <HeaderFull heroContent={heroContent} overlay={6}/>

            {/*Start Hero Section*/}
            <Container className="section-margin dsn-right-container">
                <HeroSection/>
            </Container>
            {/*End Hero Section*/}

            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="Our Services">
                    New Branding Agency
                </TitleSection>
                <ServiceTow col={2} colMobile={1}/>
            </Container>
            {/*End Service Section*/}

            {/*Start Box Right Info*/}
            <HeroSectionTow className="section-margin text-center"/>
            {/*End Box Right Info*/}

            {/*Start Portfolio Swiper*/}
            <Container as={TitleSection} description="Our Work" className="mt-section">
                Featured Projects
            </Container>
            <PortfolioSwiper className="mb-section" grabCursor autoplay/>
            {/*End Portfolio Swiper*/}

            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project1/7.jpg" className="section-margin">
                <TitleCover>EGRON</TitleCover>
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                                Time Tag Watch.
                            </h2>
                            <h6 ref={ref}>
                                Sometimes, we need to check the time, wondering when our work or meeting will finish,
                                without getting caught by others.
                            </h6>
                            <p ref={ref}>
                                To avoid your boss’s staring eye, you should not roll your eyes to check the time. The
                                Time
                                Tag Watch is a consummately appropriate for it. Those tags do the role of the hands of
                                the
                                watch. By rotating the face of the watch not the hands, it gets harder to be damaged. It
                                provides you with experience to feel the time at the end of your finger without damaging
                                your watch.
                            </p>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                            </div>

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Testimonial*/}
            <Container className="section-margin">
                <Testimonial autoHeight loop grabCursor title="Feedback from our clients."/>
            </Container>
            {/*End Testimonial*/}

            {/*Start Blog*/}
            <Container className="section-margin dsn-right-container">
                <TitleSection description="Latest News">
                    Latest & Greatest Post
                </TitleSection>
                <BlogSwiper grabCursor loop autoHeight/>
            </Container>
            {/*End Blog*/}

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description="Our clients">
                    Your successful, our <br/> reputation
                </TitleSection>
                <BrandClient
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}

            <NextPageContent className="section-margin"/>
            <Footer/>

        </React.Fragment>
    );
}

export default Demo3;