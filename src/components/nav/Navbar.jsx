import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import './style.scss';
import Dropdown from "./Dropdown";
import Toggle from "./Toggle";
import {Link} from "react-router-dom";
import useEffectScroll from "../../hooks/useEffectScroll";
import {dsnCN} from "../../hooks/helper";


const Navbar = ({children, textOpen, textMenu, textClose, hamburger}) => {

    const nav = useRef();
    const [typeNave, setTypeNave] = useState("");
    const [reserved, setReserved] = useState(false);
    let scrDown = 0;

    useEffectScroll((e, x, y) => {

        if (y > 170) {
            if (scrDown < y) {
                nav.current.classList.add("nav-bg", "hide-nav");
            } else {
                nav.current.classList.remove("hide-nav");
            }
        } else {
            nav.current.classList.remove("nav-bg", "hide-nav");
        }

        scrDown = y;
    });


    const cutterElement = () => {

        nav.current.querySelectorAll('ul').forEach((item, index) => {

            item.style.setProperty('--dsn-li-name', "dsn" + index);
            Object.keys(item.children).forEach(($key) => {
                item.children[$key].style.setProperty('--dsn-li-index', $key);

            });
        });


    }


    const TransEnd = () => {
        if (reserved)
            nav.current.querySelector('.primary-nav').classList.add('open');
    }

    const removeOpenMenu = useCallback(() => {
        nav.current.querySelectorAll('ul').forEach(item => item.classList.remove('open'));
    }, []);

    // only runs after first render
    useLayoutEffect(() => {
        const resizeNav = () => {
            if (window.innerWidth > 991) {
                setTypeNave("");
                removeOpenMenu();
                setReserved(false);
            } else
                setTypeNave("dsn-hamburger");
        };

        if (!hamburger) {
            window.addEventListener('resize', resizeNav);
            resizeNav();
        } else {
            setTypeNave("dsn-hamburger");
        }


        cutterElement();

        return () => {
            window.removeEventListener('resize', resizeNav);
        }


    }, [hamburger]);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <header className={dsnCN('site-header container-fluid', typeNave)} ref={nav}>
            {children}
            {typeNave && <Toggle
                textOpen={textOpen}
                textMenu={textMenu}
                textClose={textClose}
                targetNav={nav}
                reserved={reserved}
                setReserved={setReserved}
                removeOpenMenu={removeOpenMenu}
            />}
            <div className="bg background-section"/>
            <div className="bg background-main" onTransitionEnd={TransEnd}/>

        </header>
    );
};


Navbar.defaultProps = {
    textOpen: 'Open',
    textMenu: 'Menu',
    textClose: 'Close',
};


const handleClickCloseMenu = (e) => {
    e.stopPropagation();
    const parent = e.currentTarget.closest('.site-header');
    if (!parent)
        return;

    if (!parent.classList.contains("dsn-hamburger") || !parent.classList.contains("dsn-open"))
        return;

    const navToggle = parent.querySelector('.navbar-toggle');
    if (navToggle) navToggle.click();
}

export const Brand = ({children, ...restProps}) => {
    return (<div className="main-logo" onClick={handleClickCloseMenu}>
        <Link  {...restProps} >{children}</Link>
    </div>)
};

Navbar.Brand = Brand;


export const Collapse = ({children, cover}) => {
    return (
        <nav className="main-navigation">
            {cover && (<div className="menu-cover-title header-container dsn-container">{cover}</div>)}
            {children}
        </nav>
    );
};
Navbar.Collapse = Collapse


export const Nav = ({children, className, ...restProps}) => {
    return (
        <ul className={dsnCN('primary-nav h2', className)} {...restProps} >{children} </ul>
    );
};


export const ItemLink = ({children, ...restProps}) => {

    return (
        <li className="nav-item" onClick={handleClickCloseMenu}>
            <Link {...restProps}>
            <span className="overflow">
                {children}
            </span>
            </Link>
        </li>
    );
};
Nav.Link = ItemLink;


Dropdown.defaultProps = {textBack: 'Back'};
Nav.Dropdown = Dropdown;

export {
    Dropdown
}


export default Navbar;
