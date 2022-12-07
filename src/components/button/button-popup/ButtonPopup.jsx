import React, {useEffect, useRef} from 'react';
import './style.scss';
import "@fancyapps/ui/dist/fancybox.css";
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {Fancybox as NativeFancybox} from "@fancyapps/ui";
import {dsnCN} from "../../../hooks/helper";

interface ButtonPopupProps extends FontAwesomeIconProps {
    bgColor?: 'main' | 'section' | 'theme'
}

function ButtonPopup({href, className, bgColor, group, type, preload, width, height, ...restProps}: ButtonPopupProps) {

    const target = useRef();

    useEffect(() => {

        NativeFancybox.bind("[data-fancybox]", {parentEl: target.current});

        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return (
        href &&
        <a className={dsnCN('dsn-btn-popup dsn-auto', `background-${bgColor}`, className)}
            ref={target}

           href={href}
           data-fancybox={group || ''}
           data-type={type || ''}
           data-preload={preload}
           data-width={width}
           data-height={height}>

            <FontAwesomeIcon {...restProps}  />


        </a>
    );
}

ButtonPopup.defaultProps = {
    bgColor: 'main',
    icon: faPlay
}

export default ButtonPopup;