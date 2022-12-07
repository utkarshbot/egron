import React from 'react';
import './style.scss';
import MoveTrigger from "../../../animation/MoveTrigger";
import {dsnCN} from "../../../hooks/helper";

function TitleCover({className, children, from, to, ease, start, end, scrub, markers}) {
    return (
        <MoveTrigger from={from} to={to} markers={markers} scrub={scrub} end={end} start={start} ease={ease}>
            {(ref) => <div className={dsnCN('p-relative cover-section', className)}>
                <div className="title-cover" ref={ref}>{children}</div>
            </div>}
        </MoveTrigger>

    );
}

TitleCover.defaultProps = {
    from: {y: -180, opacity: 0},
    to: {y: -80, opacity: 0.12},
    end: "75%"
}


export default TitleCover;