import React from 'react'

import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import DsnGrid, {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const BrandDetails = [
    {
        src: "/assets/img/logo/1.png",
        title: "DIGITAL PRODUCTS",
        href: "http://www.google.com",
        linkText: "www.google.com",
    },
    {
        src: "/assets/img/logo/2.png",
        title: "DIGITAL PRODUCTS",
        href: "http://www.google.com",
        linkText: "www.google.com",
    },
    {
        src: "/assets/img/logo/3.png",
        title: "DIGITAL PRODUCTS",
        href: "http://www.google.com",
        linkText: "www.google.com",
    },
    {
        src: "/assets/img/logo/4.png",
        title: "DIGITAL PRODUCTS",
        href: "http://www.google.com",
        linkText: "www.google.com",
    },
    {
        src: "/assets/img/logo/5.png",
        title: "DIGITAL PRODUCTS",
        href: "http://www.google.com",
        linkText: "www.google.com",
    },
    {
        src: "/assets/img/logo/6.png",
        title: "DIGITAL PRODUCTS",
        href: "http://www.google.com",
        linkText: "www.google.com",
    },
]

function BrandClient({className, ...restProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN('wrapper-brand', className)} {...restProps}>
            {BrandDetails.map(
                (item, index) => {
                    return (
                        <div key={index} className="brand-item background-section">
                            <div className="box-img">
                                <LazyImg src={item.src} alt=""/>
                            </div>
                            <div className="info">
                                <div className="content">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>

                                    <div className="entry">
                                        <div>
                                            <h5 className='mb-20'>
                                                {item.title}
                                            </h5>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.linkText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </DsnGrid>

    )
}

export default BrandClient
