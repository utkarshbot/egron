import React from 'react';
import {dsnCN} from "../../hooks/helper";

function AddressFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-address' , className)} {...restProps}>
            <p>
                El-Mahalla El-Kubra 37 <br/>
                1776 Damietta <br/>
                Egypt
            </p>
        </div>
    );
}

export default AddressFooter;