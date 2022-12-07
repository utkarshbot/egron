import React, {MutableRefObject,  useEffect, useRef, useState} from 'react';
import Scrollbar from "smooth-scrollbar";
import {ScrollbarOptions} from "smooth-scrollbar/interfaces";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useDispatch} from "react-redux";
import {setOptionScroll, setScrollbar} from "../features/smooth-scrollbar/smoothScrollbarSlice";


type UseSmoothScrollbarHook = [React.RefObject<Scrollbar>, string];

const useSmoothScrollbar = (
    ref: React.RefObject<HTMLElement>, option?: Partial<ScrollbarOptions>
): UseSmoothScrollbarHook => {

    /**
     *
     * @type {React.MutableRefObject<null|Scrollbar>}
     */
    const scrollbar = useRef(null);
    const [classNameScroll, setClassNameScroll] = useState("");
    const dispatch = useDispatch();


    useEffect(() => {

        if (!ref.current)
            return;

        scrollbar.current = Scrollbar.init(ref.current, option);
        setClassNameScroll("dsn-scrollbar");
        ScrollTrigger.defaults({
            scroller: ref.current
        });
        scrollbar.current.addListener(() => ScrollTrigger.refresh());
        dispatch(setScrollbar(scrollbar.current));
        dispatch(setOptionScroll(option));

        return () => {
            scrollbar.current?.destroy();
            setClassNameScroll("");
            ScrollTrigger.defaults({
                scroller: null
            });
        }

    }, [ref])

    return [scrollbar, classNameScroll];

}


export default useSmoothScrollbar;