import React from 'react';
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../button/button-default/ButtonDefault";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import BoxRight from "../box-right/BoxRight";
import {ParallaxImageProps} from "../parallax-image/ParallaxImage";

const heroContent = {
    title: "How is your \nvisual identity?",
    src: '/assets/img/project/project9/parralaxbg.jpg',
    description: `A system that young people around the world with a club culture and techno enthusiasts feel identified. We generated a simple logo that is the basis for generating a geometric and liquid system.`,
    to: "portfolio/bastian-bux",
    textButton: "LEARN MORE",
    icon : faAngleRight
};

function HeroSectionTow({...restProps}: ParallaxImageProps) {
    return (
        <BoxRight  {...restProps} src={heroContent.src}>
            <FadeUpTrigger>
                <h2 className="pre-line">{heroContent.title}</h2>

                <p className="mt-30 m-w750 dsn-auto">{heroContent.description}</p>
                <ButtonDefault className="mt-30" icon={heroContent.icon} text={heroContent.textButton}
                               to={heroContent.to}/>
            </FadeUpTrigger>
        </BoxRight>
    );
}

export default HeroSectionTow;