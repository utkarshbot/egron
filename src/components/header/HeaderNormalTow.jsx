import React from 'react';
import style from './style.module.scss'
import {Container} from "react-bootstrap";
import {BsPrefixRefForwardingComponent} from "react-bootstrap/helpers";
import {ContainerProps} from "react-bootstrap/Container";
import {dsnCN} from "../../hooks/helper";


interface HeaderNormalProps extends BsPrefixRefForwardingComponent<'div', ContainerProps> {
    description?: string
}

function HeaderNormal({className, description, children, ...restProps}: HeaderNormalProps) {


    return (
        <header className={dsnCN(style.hn2, className)}>
            <Container {...restProps}>
                {description && <h5 className={`mb-10 m-w570 ${style.hd}`}>
                    {description}
                </h5>}
                <h1 className={`title-heading ${style.ht}`}>
                    {children}
                </h1>

            </Container>
        </header>
    );
}

export default HeaderNormal;