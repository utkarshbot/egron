import React from 'react'
import './style.scss'
import NavLink from "../NavLink";
import {BsPrefixRefForwardingComponent} from "react-bootstrap/helpers";
import {NavLinkProps} from "react-bootstrap/NavLink";
import {dsnCN} from "../../../hooks/helper";


const ButtonProject = React.forwardRef((
    {children, className, ...restProps}: BsPrefixRefForwardingComponent<'a', NavLinkProps>, ref) => {


    return (
        <NavLink className={dsnCN('btn-project', className)} {...restProps} ref={ref}>
            <p className='text'>{children}</p>
        </NavLink>
    )
});


export default ButtonProject