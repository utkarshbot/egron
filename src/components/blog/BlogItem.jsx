import React from 'react'

import './style.scss'
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";

function BlogItem({src, category, title, description, to}) {

    return (
        <div className="blog-item">
            <div className="box-img">
                <img src={src} alt=""/>
            </div>
            <div className="box-content background-section">
                {category && <MetaPost category={category} separate=", "/>}
                {title && <h4 className='title-block'>
                    <NavLink to={to}>{title}</NavLink>
                </h4>}
                {description && <p className="mt-15">{description}</p>}
            </div>
        </div>
    )
}

export default BlogItem