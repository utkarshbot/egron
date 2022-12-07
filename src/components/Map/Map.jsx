import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapIcon from './map-marker.png';
import './style.scss' ;


interface MapProps {
    apiKey: string,
    googleMapKey?: string,
    bootstrapURLKeys: any,
    defaultCenter: { lat: number, lng: number },
    center: { lat: number, lng: number },
    defaultZoom: number,
    zoom: number,
    onBoundsChange: void,
    onChange: void,
    onClick: void,
    onChildClick: void,
    onChildMouseDown: void,
    onChildMouseUp: void,
    onChildMouseMove: void,
    onChildMouseEnter: void,
    onChildMouseLeave: void,
    onZoomAnimationStart: void,
    onZoomAnimationEnd: void,
    onDrag: void,
    onDragEnd: void,
    onMapTypeIdChange: void,
    onTilesLoaded: void,
    options: any,
    distanceToMouse: void,
    hoverDistance: number,
    debounced: boolean,
    margin: [],
    googleMapLoader: any,
    onGoogleApiLoaded: void,
    yesIWantToUseGoogleMapApiInternals: boolean,
    draggable: boolean,
    style: any,
    resetBoundsOnResize: boolean,
    layerTypes: string[],
    shouldUnregisterMapOnUnmount: boolean,
    height?: string,
    showMarker?: boolean,
    markerOption?: {
        lat?: string,
        lng?: string,
        title?: string,
    },
    mapIcon?: string
}


function Map({googleMapKey, showMarker, mapIcon, className, height, markerOption, ...restProps}: MapProps) {

    const defaultCenter = restProps.defaultCenter || {},
        center = restProps.center || {};


    return (
        <div className={className} style={{height: height, width: '100%'}}>

            <GoogleMapReact
                bootstrapURLKeys={{key: googleMapKey}}
                {...restProps}
            >
                {showMarker && <Marker
                    {...markerOption}
                    lat={center.lat || defaultCenter.lat}
                    lng={center.lng || defaultCenter.lng}
                    mapIcon={mapIcon}
                />}
            </GoogleMapReact>

        </div>
    );
}


const Marker = (props: any) => {
    const {title, mapIcon} = props;
    return (
        <div className="marker"
             style={{background: `url(${mapIcon}) no-repeat`, cursor: 'pointer'}}
             title={title}

        />
    );
};

Map.defaultProps = {
    height: "80vh",
    defaultZoom: 14,
    mapIcon: mapIcon
}

export const optionDroowMap = {
    styles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36,
            },
                {
                    "color": "#000000",
                },
                {
                    "lightness": 40,
                },
            ],
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on",
            },
                {
                    "color": "#000000",
                },
                {
                    "lightness": 16,
                },
            ],
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off",
            }],
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 20,
                },
            ],
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 17,
                },
                {
                    "weight": 1.2,
                },
            ],
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 20,
                },
            ],
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 21,
                },
            ],
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 17,
                },
            ],
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 29,
                },
                {
                    "weight": 0.2,
                },
            ],
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 18,
                },
            ],
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 16,
                },
            ],
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 19,
                },
            ],
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000",
            },
                {
                    "lightness": 17,
                },
            ],
        },
    ],

};

export default Map;







