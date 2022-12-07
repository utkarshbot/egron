import React from 'react';
import {NavLink as NavLinkBootstrap} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsPrefixRefForwardingComponent} from "react-bootstrap/helpers";
import {NavLinkProps} from "react-bootstrap/NavLink";

const  NavLink= React.forwardRef(({children, to , ...restProps}: BsPrefixRefForwardingComponent<'a', NavLinkProps> , ref)=> {
    return (
        <NavLinkBootstrap as={to ? Link : undefined} to={to} {...restProps} ref={ref}>{children}</NavLinkBootstrap>
    );
});

export default NavLink;