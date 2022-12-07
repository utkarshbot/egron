import React from 'react';

import { Container } from "react-bootstrap";

import PortfolioClassic from "../components/portfolio/portfolioClassic";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import HeaderNormal from "../components/header/HeaderNormal";
import { Helmet } from "react-helmet";

function WorkTow(props) {
    return (
        <React.Fragment>
            <Helmet>
                <title>EGRON - Portfolio & Agency React Template </title>
            </Helmet>
            <HeaderNormal className="background-section text-uppercase" description="Some Of Our Latest">
                Awesome Best<br /> Portfolio
            </HeaderNormal>
            <Container fluid className="mt-section">
                <PortfolioClassic col={3}
                    colGap={50}
                    colGapTablet={30}
                    rowGap={50}
                    rowGapTablet={30}
                />
            </Container>

            <NextPageContent className="section-margin" />
            <Footer />


        </React.Fragment>
    );
}

export default WorkTow;