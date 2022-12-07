import React from 'react'


function TeamItem({src, title, subTitle}) {

    return (
        <div className="team-item">
            <div className="box-img">
                <img src={src} alt={title}/>
            </div>
            <div className="info">
                <div className="box-content">
                    <h5 className=' mb-20'>{title}</h5>
                    <h6>{subTitle}</h6>
                </div>
            </div>
        </div>
    )
}

export default TeamItem
