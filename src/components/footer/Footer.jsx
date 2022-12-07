import React from 'react'
import './style.scss'

import {Container} from 'react-bootstrap';

import SocialMedia from '../social-media/SocialMedia';
import DsnGrid from '../DsnGrid';
import Brand from "../brand/Brand";
import NavLink from "../button/NavLink";
import MenuFooter from "./MenuFooter";
import ContentFooter from "./ContentFooter";
import AddressFooter from "./AddressFooter";
import Copyright from "./Copyright";
import {dsnCN} from "../../hooks/helper";


function Footer({className, ...restProps}) {


    return (
        <footer className={dsnCN('footer background-section', className)} {...restProps}>
            <Container>
                <div className="footer-links pt-80 pb-40">
                    <DsnGrid col={4} colTablet={2}>
                        {/*Band & Social*/}
                        <div className='dsn-col-footer'>
                            <NavLink to="/">
                                <Brand width="90px"/>
                            </NavLink>
                            <SocialMedia className="mt-20"/>
                        </div>

                        {/*Navigation*/}
                        <div className='dsn-col-footer '>
                            <h4 className="footer-title">Logg inn</h4>
                            <MenuFooter/>
                        </div>

                        {/*Contact*/}
                        <div className='dsn-col-footer'>
                            <h4 className="footer-title">Kontakt oss</h4>
                            <ContentFooter/>
                        </div>


                        <div className='dsn-col-footer'>
                            <h4 className="footer-title">Address</h4>
                            <AddressFooter/>
                        </div>
                    </DsnGrid>
                </div>
                <Copyright className="pt-40 pb-40"/>
            </Container>
        </footer>
    )
}


export default Footer