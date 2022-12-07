import React from 'react';
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";
import {getPortfolioLink} from "../../api/portfolio/PortfolioData";
import ButtonDefault from "../button/button-default/ButtonDefault";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

function ContentSlider({data , activeClass} , ref) {



    return (
        <div className="dsn-slider-content hero-content">
            {data.map((item, key) =>
                <div className={`slide-content ${activeClass === key ? 'dsn-active' : ''}`} key={key}
                     ref={ref}>
                    {item.category && <MetaPost category={item.category} separate=", "/>}
                    {item.title &&
                    <h1  className="title-heading"><NavLink to={getPortfolioLink(item)}>{item.title}</NavLink>
                    </h1>}
                    {item.description && <div className="dsn-description mt-30">{item.description}</div>}
                    <ButtonDefault to={getPortfolioLink(item)} className="mt-30" text="View Case"
                                   icon={faAngleRight}/>
                </div>
            )}

        </div>
    );
}

export default React.forwardRef(ContentSlider);