import React, {useEffect} from 'react';
import Scrollbar from "smooth-scrollbar";
import {useSelector} from "react-redux";

function useEffectScroll(listener) {
    const scrollbar: React.MutableRefObject<null | Scrollbar> = useSelector(state => state.scrollbar);

    useEffect(() => {
        const scrollbarCurrent = scrollbar.current;
        const scroll = (e) => {
            listener(e, window.scrollX, window.scrollY);
        }
        if (scrollbarCurrent) {
            scrollbarCurrent.addListener((e) => {
                listener(e, e.offset.x, e.offset.y);
            });
        } else
            window.addEventListener("scroll", scroll);


        return () => {
            if (!scrollbarCurrent)
                window.removeEventListener("scroll", scroll);
        }
    }, [scrollbar]);// eslint-disable-line react-hooks/exhaustive-deps


    return null;
}


export default useEffectScroll;