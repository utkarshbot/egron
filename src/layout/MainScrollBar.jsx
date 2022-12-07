import React, {useLayoutEffect, useRef} from 'react';
import SmoothScrollbar from "./SmoothScrollbar";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useDispatch} from "react-redux";
import {setScrollbar} from "../features/smooth-scrollbar/smoothScrollbarSlice";


function MainScrollBar({children, tag, activeScrollbar, ...restProps}) {
    const scrollbar = useRef({target: null, ref: null});
    const dispatch = useDispatch();

    useLayoutEffect(() => {

        ScrollTrigger.defaults({
            scroller: scrollbar.current.ref
        });
        scrollbar.current.target?.addListener(() => ScrollTrigger.refresh());
        dispatch(setScrollbar(scrollbar.current.target));

        return () => {
            ScrollTrigger.defaults({
                scroller: null
            });
            scrollbar.current.target?.destroy();
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <SmoothScrollbar id="dsn-scrollbar"
                         tag={tag}
                         height="100vh"
                         option={{damping: 0.08}}
                         refTarget={(target, ref) => scrollbar.current = {target, ref}}
                         {...restProps}
        >
            {children}
        </SmoothScrollbar>
    );
}

export default MainScrollBar;