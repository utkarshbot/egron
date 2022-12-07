import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";

const data = [
    {
        id: 1,
        title: "Vi har mange ulike kunder",
        slug: 'time-tag-watch',
        category: ['Service 1'],
        description: 'Fra Kristiansand i Sør til Tromsø i nord, er mer enn 130 mennesker hver dag i sving med håndtering av forsendelser og rapportering til våre kunder. Alle med ett mål for øyet;',
        src: '/assets/img/project/project1/1.jpg',
        srcSlider: '/assets/img/project/project1/1.jpg',
        overlay: 2,
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: "Vi har mange ulike kunder",
        slug: 'under-armour',
        src: '/assets/img/project/project2/2.jpg',
        srcSlider: '/assets/img/project/project2/2.jpg',
        category: ['Serive 2'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,

        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 3,
        title: "Vi har mange ulike kunder",
        slug: 're-styling',
        src: '/assets/img/project/project3/1.jpg',
        srcSlider: '/assets/img/project/project3/1.jpg',
        category: ['Service 3'],
        description: 'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
        overlay: 2,
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 4,
        title: "Vi har mange ulike kunder",
        slug: 're-styling',
        src: '/assets/img/project/project3/1.jpg',
        srcSlider: '/assets/img/project/project3/1.jpg',
        category: ['Service 4'],
        description: 'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
        overlay: 2,
        component: (props) => <ReStyling {...props}/>
    },
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};