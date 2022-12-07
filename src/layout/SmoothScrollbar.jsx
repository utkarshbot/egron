import React, {useLayoutEffect, useRef} from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin, {OverscrollOptions} from "smooth-scrollbar/plugins/overscroll";


export interface SmoothScrollbarProps {
    refTarget?: void,
    height?: number | string,
    option?: {
        damping?: number | 0.1,
        thumbMinSize?: number | 20,
        renderByPixels?: boolean,
        alwaysShowTracks?: boolean,
        continuousScrolling?: boolean,
        plugins?: Object | OverscrollOptions
    }

}

function SmoothScrollbar({children, tag: Tag = "div", refTarget, height, option, ...restProps}: SmoothScrollbarProps) {
    const scrollbar = useRef();
    useLayoutEffect(() => {
        if (option.plugins)
            Scrollbar.use(OverscrollPlugin);

        const scroll = Scrollbar.init(scrollbar.current, option);
        if (refTarget)
            refTarget(scroll, scrollbar.current);


        return () => {
            scroll.destroy()
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <Tag {...restProps} ref={scrollbar} style={{overflow: "hidden", height: height}}>
            {children}
        </Tag>
    );
}

SmoothScrollbar.defaultProps = {
    height: "100vh",
    option: {}
}


export default SmoothScrollbar;