import React from 'react';
import {dsnCN} from "../../hooks/helper";

function TitleSection({className, tag: Tag = 'h2', children, description}) {

    return (
        <div className={dsnCN('section-heading', className)}>
            {description && <p className="title-sub">{description}</p>}
            {children && <Tag className="title-section">{children}</Tag>}
        </div>
    );
}

export default TitleSection;