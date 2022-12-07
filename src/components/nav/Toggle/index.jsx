import React, {useEffect, useRef} from "react";
import dsnSplitting from "../../../hooks/Spltting";
import {dsnCN} from "../../../hooks/helper";

const Toggle =
    ({textOpen, textMenu, textClose, targetNav, reserved, setReserved, removeOpenMenu, className, ...restProps}) => {

        const splitMenu = useRef();
        const splitOpen = useRef();
        const splitClose = useRef();


        const toggleClick = (e) => {
            e.currentTarget.classList.toggle('open');
            targetNav.current.classList.toggle('dsn-open');
            setReserved(!reserved)

            if (reserved)
                removeOpenMenu();
        }


        useEffect(() => {
            dsnSplitting.Char(splitMenu.current);
            dsnSplitting.Char(splitOpen.current);
            dsnSplitting.Char(splitClose.current);

        }, []);

        return (
            <div className={dsnCN('navbar-toggle', className)} {...restProps} onClick={toggleClick}>
                <div className="toggle-icon">
                    <div className="toggle-line"/>
                    <div className="toggle-line"/>
                    <div className="toggle-line"/>
                </div>
                <div className="toggle-text">
                    <div className="text-menu" ref={splitMenu}>{textMenu}</div>
                    <div className="text-open" ref={splitOpen}>{textOpen}</div>
                    <div className="text-close" ref={splitClose}>{textClose}</div>
                </div>

            </div>
        );
    }


export default React.memo(Toggle);
