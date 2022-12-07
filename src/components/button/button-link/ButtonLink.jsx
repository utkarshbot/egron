import React from 'react'
import './style.scss'
import NavLink from "../NavLink";
import {BsPrefixRefForwardingComponent} from "react-bootstrap/helpers";
import {NavLinkProps} from "react-bootstrap/NavLink";
import {dsnCN} from "../../../hooks/helper";


function ButtonLink({children, className, ...restProps}: BsPrefixRefForwardingComponent<'a', NavLinkProps>) {

    return (
        <NavLink className={dsnCN('btn-link', className)} {...restProps}>
            <span className='text'>{children}</span>
        </NavLink>
    )
}

ButtonLink.defaultProps = {
    className: ''
}

export default ButtonLink