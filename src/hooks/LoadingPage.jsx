import React, {useLayoutEffect, useState} from 'react';
import {useSelector} from "./DsnHooks";
import {pageLoad} from "./helper";
import gsap from 'gsap';

function LoadingPage(props) {
    const [q, preloader] = useSelector();
    const [percent, setPercent] = useState(0);
    const [remove, setRemove] = useState(false);


    useLayoutEffect(() => {

        const timer = pageLoad(0, 100, 300, function (val) {
            setPercent(val);
        });

        const handleLoad = () => {
            clearInterval(timer);
            const progress = {value: percent < 100 ? percent : 95};
            gsap.to(progress, {
                duration: 0.5, value: 100, yoyo: true,
                onUpdate: () => {
                    if (progress.value > percent)
                        setPercent(parseInt(progress.value, 10));
                },
                onComplete: () => {
                    gsap.to(q('.preloader-bar'), .5, {left: "100%"});
                    gsap.to(q('.title'), 1, {autoAlpha: 0, y: -100});
                    gsap.to(q('.loading'), 1, {autoAlpha: 0, y: 100});
                    gsap.to(q('.percent'), 1, {autoAlpha: 0});
                    gsap.to(q('.preloader-before'), 1, {y: "-100%", delay: .7});
                    gsap.to(q('.preloader-after'), 1, {
                        y: "100%", delay: .7, onComplete: () => setRemove(true)
                    });
                }
            });
        }


        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearInterval(timer);
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        !remove && <div className="preloader" ref={preloader}>
            <div className="preloader-after"/>
            <div className="preloader-before"/>
            <div className="preloader-block">
                <div className="title">EGRON</div>
                <div className="percent">{percent}</div>
                <div className="loading">loading...</div>
            </div>
            <div className="preloader-bar">
                <div className="preloader-progress" style={{width: percent + "%"}}/>
            </div>
        </div>

    );
}

export default LoadingPage;