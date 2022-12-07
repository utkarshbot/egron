import React from 'react'
import { Container } from 'react-bootstrap';

import './style.scss'
import NavLink from "../button/NavLink";
import {BsPrefixRefForwardingComponent} from "react-bootstrap/helpers";
import {NavLinkProps} from "react-bootstrap/NavLink";
import {dsnCN} from "../../hooks/helper";

interface NextPageProps extends BsPrefixRefForwardingComponent<'a', NavLinkProps>{
    text?:string
}

function NextPage({ className , children ,text, ...restProps }:NextPageProps) {

    return (
        <div className={dsnCN('next-page section-padding' , className)} >
            <Container>
                <div className="c-wrap">
                    <NavLink {...restProps}>
                        <span className="hiring">{children}</span>
                        <span className="career">{text}</span>
                    </NavLink>
                </div>
            </Container>
        </div>
    )
}

export default NextPage