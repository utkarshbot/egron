import React from "react";
import styled from "styled-components";
import LazyImg from "../LazyImg";

const Bg = styled.div`
        height : ${props => props.theme.height};
`;

const BgImage = React.forwardRef(({src, video, height, overlay, imageOnly, alt, ...restProps}, ref) => {

    return (
        <Bg theme={{height: height}} data-overlay={overlay} className="hero-img overflow" {...restProps} ref={ref}>
            {!video && <LazyImg src={src} className="cover-bg-img" alt={alt}/>}
            {(video && !imageOnly) &&
            <video className="cover-bg-video" preload="none" autoPlay muted playsInline  {...video} >
                <source src={src} type="video/mp4"/>
            </video>}
            {(video && imageOnly) && <LazyImg className="cover-bg-video" src={video.poster} alt={alt}/>}
        </Bg>

    );
});

BgImage.defaultProps = {
    height: "80vh",
    overlay: 4,
}

export default BgImage;