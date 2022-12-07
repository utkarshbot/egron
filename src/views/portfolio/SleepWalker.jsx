import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

//--> Component
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import HeaderFull from "../../components/header/HeaderFull";
import {Helmet} from "react-helmet";


const SleepWalker = ({data}) => {

    const nextData = getPortfolioItem(8);


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
                        overlay={data.overlay}
            >
                <strong className="color-heading">Published</strong> <span> - September 26th 2019 </span>
            </HeaderFull>
            {/*End Header Half*/}


            {/*Start Parallax Image*/}
            <ParallaxImage src="/assets/img/project/project7/2.jpg" caption="Caption #1" triggerHook="top"
                           animationActive={false} overlay={2} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>

            <ParallaxImage src="/assets/img/project/project7/3.jpg" caption="Caption #2" triggerHook="top"
                           animationActive={false} overlay={2} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>

            <ParallaxImage src="/assets/img/project/project7/4.jpg" caption="Caption #3" triggerHook="top"
                           animationActive={false} overlay={2} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>

            <ParallaxImage className="mb-section" src="/assets/img/project/project7/5.jpg" caption="Caption #4"
                           triggerHook="top"
                           animationActive={false} overlay={2} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>
            {/*End Parallax Image*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default SleepWalker;