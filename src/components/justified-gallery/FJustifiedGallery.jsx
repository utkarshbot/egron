import React, {useEffect, useRef} from 'react';
import fjGallery from 'flickr-justified-gallery';
import 'flickr-justified-gallery/src/fjGallery.css';
import {generateString} from "../../hooks/helper";
import {Fancybox as NativeFancybox} from "@fancyapps/ui";

export interface FJustifiedGalleryProps {
    gutter?: number | Object | { horizontal: 10, vertical: 10 },
    rowHeight?: number,
    rowHeightTolerance?: number,
    lastRow?: 'left' | 'center' | 'right' | 'hide',
    resizeDebounce?: number,
    images?: [{ src?: string, alt?: string, caption?: string, groupPopup?: string }],
    options?: {
        infinite: true | false,
        hideScrollbar: true | false,
        animated: true | false,
        startIndex: 0,

    }
}


function FJustifiedGallery({images, className, children,options, ...restProps}: FJustifiedGalleryProps) {
    const ref = useRef();
    const generateId = generateString(5);



    useEffect(() => {
        const gallery = fjGallery(ref.current, {
            itemSelector: '.fj-gallery-item',
            ...restProps
        });

        NativeFancybox.bind("[data-fancybox]", {parentEl: ref.current, ...options,});

        return () => {
            fjGallery(gallery, 'destroy');
            NativeFancybox.destroy();
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={`fj-gallery ${className || ''}`} ref={ref}>
            {images && images.map(({src, alt, caption, groupPopup}, index) =>
                <FjgItem src={src} alt={alt}
                         caption={caption} key={index}
                         groupPopup={groupPopup || generateId}/>)}
            {children}
        </div>
    );
}

FJustifiedGallery.defaultProps = {
    gutter: 15,
}


export function FjgItem({src, alt, caption, groupPopup}) {
    return (
        <div className="fj-gallery-item"
             data-src={src}
             data-caption={caption}
             data-fancybox={groupPopup || ''}>
            <img src={src} alt={alt || ''}/>
            {caption && <div className="cap"><span>{caption}</span></div>}
        </div>
    );
}

FJustifiedGallery.item = FjgItem;

export default FJustifiedGallery;