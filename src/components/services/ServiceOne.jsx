import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: 'assets/img/services/service1.png',
        title: "Trekke Traller",
        //description: "Web design encompasses many different skills and disciplines in the production of all web.",
    },
    {
        icon: 'assets/img/services/service1.png',
        title: "Thermo Transport",
        //description: "Web design encompasses many different skills and disciplines in the production of all web.",
    },
    {
        icon: 'assets/img/services/service1.png',
        title: "Ekspress transport",
        //description: "Web design encompasses many different skills and disciplines in the production of all web.",
    },
    {
        icon: 'assets/img/services/service1.png',
        title: "Stykkgods transport",
        //description: "Web design encompasses many different skills and disciplines in the production of all web.",
    },
]

const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                        <a href='/service'>
                                <span className='icon mb-20'>
                                    <LazyImg src={item.icon} alt={item.title}/>
                                </span>
                            <h4 className='title-block mb-20'>{item.title}</h4>
                            <p className='mt-15 dsn-auto'>{item.description}</p>
                        </a>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceOne