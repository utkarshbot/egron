import React, { useState } from 'react';
import TitleCover from "../heading/title-cover/TitleCover";
import { dsnCN } from "../../hooks/helper";

function FilterPortfolio({ fitlerValue,filterChange}) {   
    return (
        <>
            <div className="myFilteringStyle">
                {/* <div className="p-relative cover-section text-center">
                    <div className="title-cover" style="opacity: 0.0516; transform: translate3d(0px, -28.7321px, 0px);">Portfolio</div>
                </div> */}
                <div className="filtering-wrap">
                    <div className="filtering">
                        <div className="selector"></div>
                        <button type="button" className={`${fitlerValue === 0 ? 'active' : ''}`} onClick={() => filterChange(0)}>All</button>
                        <button type="button" className={`${fitlerValue === 1 ? 'active' : ''}`} onClick={() => filterChange(1)}>Service 1</button>
                        <button type="button" className={`${fitlerValue === 2 ? 'active' : ''}`} onClick={() => filterChange(2)}>Serive 2</button>
                        <button type="button" className={`${fitlerValue === 3 ? 'active' : ''}`} onClick={() => filterChange(3)}>Service 3</button>
                        <button type="button" className={`${fitlerValue === 4 ? 'active' : ''}`} onClick={() => filterChange(4)}>Service 4</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default FilterPortfolio;