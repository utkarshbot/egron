import React from 'react';
import {useParams} from "react-router-dom";
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

function ProjectDetails(props) {
    const {slug} = useParams();
    const data = getPortfolioItem(slug, 'slug');


    if(!data)
        return <h1>{slug}</h1>


    return (data.component({data}));
}

export default ProjectDetails;