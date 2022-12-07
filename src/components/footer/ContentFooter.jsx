import React from 'react';
import {dsnCN} from "../../hooks/helper";

function ContentFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p>
                <strong>T</strong> <span>:</span> +001 225 3351
            </p>
            <p className="mt-2">
                <strong>F</strong> <span>:</span> +001 225 3351
            </p>
            <p className="mt-2">
                <strong>E</strong> <span>:</span> <a href="0#"> info@dsngrid.com</a>
            </p>
        </div>
    );
}

export default ContentFooter;