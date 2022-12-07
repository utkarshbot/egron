import React from 'react'
import './style.scss'

import ParallaxImage, {ParallaxImageProps} from "../parallax-image/ParallaxImage";
import {Container} from "react-bootstrap";
import {dsnCN} from "../../hooks/helper";


const BoxRight = ({className, children, ...restProps}: ParallaxImageProps) => {

    return (
        <div className={dsnCN('box-right-seat v-dark-head', className)}>
            <ParallaxImage {...restProps} heightMobile="60vh"/>
            <Container className="box-text p-relative" data-overlay={5}>
                <div className="inner-box">
                    {children}
                </div>

            </Container>

        </div>
    )
}

export default BoxRight