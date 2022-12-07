import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useSwiper} from 'swiper/react';
import {dsnCN} from "../../hooks/helper";

function ControlNav({className, ...restProps}) {
    const swiper = useSwiper();
    return (
        <div className={dsnCN('control-nav', className)} {...restProps}>
            <div className="prev-container" onClick={() => swiper.slidePrev()}>
                <FontAwesomeIcon icon={faAngleLeft}/>
            </div>

            <div className="next-container" onClick={() => swiper.slideNext()}>
                <FontAwesomeIcon icon={faAngleRight}/>
            </div>
        </div>
    );
}

export default ControlNav;