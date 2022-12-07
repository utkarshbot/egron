import {ReactComponent as ArrowLeft} from "../../../assets/img/left-arrow.svg";
import dsnSplitting from "../../../hooks/Spltting";
import React, {useEffect, useRef} from "react";


const NavDropdown = ({children, name, textBack, ...restProps}) => {
    const refName = useRef();
    const refBack = useRef();


    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.closest('.open').classList.remove('open');
    }

    const handleClickSubMenu = (e) => {
        handleClick(e);
        e.currentTarget.querySelector('ul').classList.add("open");
    }

    const handleClickBackMenu = (e) => {
        handleClick(e);
        e.currentTarget.closest('ul').closest('li').closest('ul').classList.add("open");

    }


    useEffect(() => {
        dsnSplitting.Char(refName.current);
        dsnSplitting.Char(refBack.current);
    }, []);


    return (
        <li className="nav-item has-sub-menu" onClick={handleClickSubMenu}>
            <a href="#0" {...restProps}>
                <span className="overflow">{name}</span>
            </a>
            <ul className="sub-menu h3">
                <li className="dsn-back" onClick={handleClickBackMenu}>
                    <span>
                        <ArrowLeft/>
                        <span className="text-toggle-back">
                        <span className="text-name" ref={refName}>{name}</span>
                        <span className="text-back" ref={refBack}>{textBack}</span>
                        </span>

                    </span>
                </li>
                {children}
            </ul>
        </li>


    );
};


export default NavDropdown;