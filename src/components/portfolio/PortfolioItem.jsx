import React, { useEffect, useRef } from 'react'
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";
import BgImage from "../header/BgImage";
import { getPortfolioLink } from "../../api/portfolio/PortfolioData";
import { dsnCN } from "../../hooks/helper";
import TitleSection from '../heading/TitleSection';
import ServiceTow from '../services/ServiceTow';
import {Container} from "react-bootstrap";


function PortfolioItem({ id }) {


    return (
        <>
            {id === 0 && <div className="serviceItem">
            <Container className="section-margin">
                <TitleSection description="About Us">
                    About Us 0
                </TitleSection>
                <ServiceTow col={2} colMobile={1}/>
            </Container>
            </div>}
            {id === 1 && <div className="serviceItem">
            <Container className="section-margin">
                <TitleSection description="About Us">
                    About Us 1
                </TitleSection>
                <ServiceTow col={2} colMobile={1}/>
            </Container>
            </div>}
            {id === 2 && <div className="serviceItem">
            <Container className="section-margin">
                <TitleSection description="About Us">
                    About Us 2
                </TitleSection>
                <ServiceTow col={2} colMobile={1}/>
            </Container>
            </div>}
            {id === 3 && <div className="serviceItem">
            <Container className="section-margin">
                <TitleSection description="About Us">
                    About Us 3
                </TitleSection>
                <ServiceTow col={2} colMobile={1}/>
            </Container>
            </div>}
            {id === 4 && <div className="serviceItem">
            <Container className="section-margin">
                <TitleSection description="About Us">
                    About Us 4
                </TitleSection>
                <ServiceTow col={2} colMobile={1}/>
            </Container>
            </div>}
        </>

    )
}


export default React.memo(PortfolioItem);