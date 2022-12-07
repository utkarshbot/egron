import React, { useState } from 'react';

import { Container } from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import Footer from "../components/footer/Footer";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const headerContent = {
    title: 'Inqury',
    description: `Lat's Tock`
}

function Contact(props) {

    const [items, setItems] = useState([{ length: '', breath: '', height: '', weight: '' }]);

    const addFeilds = () => {
        setItems([...items, { length: '', breath: '', height: '', weight: '' }])
    }
    const removeFeild = (i) => {
        let newItems = [...items];
        newItems.splice(i, 1);
        setItems(newItems)
    }
    return (
        <React.Fragment>

            <Helmet>
                <title>EGRON - Kontakt oss </title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormalTow description={headerContent.description}>
                {headerContent.title}
            </HeaderNormalTow>

            {/*Start Contact Form && Info Box*/}
            <Container className="">
                <div className="formOuterContainer mb-80">
                    <div className="formGrp">
                        <label htmlFor="speed" className="formLabel">Service / Speed: *</label>
                        <select name="speed" id="speed" className="formSelector">
                            <option value="Distribusjon">Distribution</option>
                            <option value="Distribusjon">Distribution</option>
                            <option value="Distribusjon">Distribution</option>
                            <option value="Distribusjon">Distribution</option>
                        </select>
                    </div>
                    <h4 className="formTitle">Size</h4>
                    {items.map((item, i) => {
                        return (
                            <div className="formFlexOuter" key={i}>
                                <div className="btnGrp">
                                    <button className="addBtn" onClick={() => { i ===0 || items.length === 1 ? addFeilds() : removeFeild(i) }}>
                                        {i === 0 ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H12.75V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H11.25V5C11.25 4.58579 11.5858 4.25 12 4.25Z" fill="black" />
                                        </svg> :
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z" fill="black" />
                                            </svg>

                                        }
                                        {i === 0 ? 'Add Item' : 'Remove Item'}
                                    </button>
                                </div>
                                <div className="formFlex">
                                    <div className="formGrp">
                                        <label htmlFor="length" className="formLabel">Length</label>
                                        <input type="number" name="length" id="length" />
                                        <span>cm</span>
                                    </div>
                                    <div className="formGrp">
                                        <label htmlFor="Breadth" className="formLabel">Breadth</label>
                                        <input type="number" name="Breadth" id="Breadth" />
                                        <span>cm</span>
                                    </div>
                                    <div className="formGrp">
                                        <label htmlFor="height" className="formLabel">Height</label>
                                        <input type="number" name="height" id="height" />
                                        <span>cm</span>
                                    </div>
                                    <div className="formGrp">
                                        <label htmlFor="weight" className="formLabel">Weight</label>
                                        <input type="number" name="weight" id="weight" />
                                        <span>Kg</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="formFlex">
                        <div className="formGrp">
                            <label htmlFor="price" className="formLabel">Customer number for price according to agreed prices:*</label>
                            <input type="number" name="price" id="price" />
                        </div>
                        <div className="formGrp">
                            <label htmlFor="email" className="formLabel">E-mail*</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="formGrp">
                            <label htmlFor="code" className="formLabel">From postal code*</label>
                            <input type="number" name="code" id="code" />
                        </div>
                        <div className="formGrp">
                            <label htmlFor="code2" className="formLabel">For postal code:*</label>
                            <input type="number" name="code2" id="code2" />
                        </div>
                    </div>

                    <button type='button'>Send</button>
                </div>
            </Container>
            <Footer />


        </React.Fragment>
    );
}

export default Contact;