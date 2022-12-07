import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";


const menuContent = [
    // {
    //     name: "Home",
    //     dropdownMenu: [
    //         {name: "Main Demo", to: "/"},
    //         {name: "One Page 2", to: "/demo-2"},
    //         {name: "One Page 3", to: "/demo-3"},
    //     ]
    // },
    {name: "Home", to: "/"},
    {name: "Services", to: "/portfolio-2"},
    {name: "About Us", to: "/about"},
    {name: "Contact Us", to: "/contact"},
    {name: "Inqury", to: "/inqury"}
];

const DroowMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link to={items.to} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="80px" height="26px"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

DroowMenu.defaultProps = {
    hamburger: false
}


export default DroowMenu;