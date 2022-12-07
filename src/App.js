import React, {useLayoutEffect} from "react";
// Importing the Bootstrap CSS
import 'swiper/css/pagination';

import 'bootstrap/dist/css/bootstrap-grid.css';

import './assets/sass/style.scss';

import Router from "./router/Router";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import dsnEffect, {fade, moveSection, textAnimation} from "./animation/DsnEffect";
import Layout from "./layout/Layout";


function App() {


    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        dsnEffect.registerEffect(moveSection, fade, textAnimation)


        gsap.config({
            nullTargetWarn: false
        });
        gsap.defaults({
            ease: "none",
            duration: 1,
            overwrite: "auto",
        });
    }, []);

    return (

        <Layout className="v-light background-main" tag="main">
            <Router/>
        </Layout>


    );
}

export default App;
