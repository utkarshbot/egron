import React, {useEffect, useState} from 'react';


export interface LazyImgProps extends React.ImgHTMLAttributes {
    targetRef?: React.LegacyRef,
    readAsBlob?: boolean,
}

function LazyImg({src: lp, readAsBlob, targetRef, ...restProps}: LazyImgProps) {

    const [url, setUrl] = useState();


    useEffect(() => {
        fetch(lp)
            .then(response => readAsBlob ? response.blob() : response.url)
            .then(blob => {
                if (!readAsBlob) {
                    setUrl(blob);
                } else {
                    const fr = new FileReader();
                    fr.readAsDataURL(blob);
                    fr.onload = function () {
                        setUrl(this.result);
                    };
                }
            })
    }, [lp, readAsBlob]);

    return (
        <img src={url} alt={restProps.alt || "EGRON Image"}
             style={{opacity: url ? 1 : 0}} width="100%" height="100%"
             {...restProps} ref={targetRef}/>
    );
}

LazyImg.defaultProps = {
    readAsBlob: true
}

export default LazyImg;