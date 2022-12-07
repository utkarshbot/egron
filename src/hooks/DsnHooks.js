import {useMemo, useRef} from "react";
import gsap from 'gsap';

export function useArrayRef() {
    const refs = useRef([]);
    refs.current = [];
    return [refs, (ref) => ref && refs.current.push(ref)];
}

export function useSelector() {
    const ref = useRef();
    const q = useMemo(() => gsap.utils.selector(ref), [ref]);
    return [q, ref];
}