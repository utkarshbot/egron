import React from 'react';
import HeaderDefault from "../../components/header/HeaderDefault";


import DsnGrid from "../../components/DsnGrid";
import {Container} from "react-bootstrap";

import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import CommentForm from "../../components/blog/CommentForm";
import NextPage from "../../components/next/NextPage";
import Footer from "../../components/footer/Footer";

function BlogDetails({props}) {


    const heroContent = {
        title: "How to Write Great Blog Content",
        date: '2 september, 2019',
        category: ['Uncategorized'],
        src: "/assets/img/blog/4.jpg"
    }

    return (
        <>

            <HeaderDefault heroContent={heroContent}
                           parallax={{yPercent: 30}}
                           overlay={4}
                           height="80vh"
            />

            <Container className="single-post post-content mb-section">
                <DsnGrid>

                    <p>
                        As Vintage decided to have a closer look into fast-paced New York web design realm in person, we
                        get to
                        acquaint with most diverse and exceptionally captivating personalities.
                    </p>


                    <p>
                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                        would have been
                        rewritten a thousand times and everything that was left from its origin would be the word “and”
                        and the
                        Little Blind Text should turn around and return to its own, safe country.
                    </p>

                    {/*Start Box Info Center Content*/}
                    <div className="p-relative v-dark-head text-center">
                        <ParallaxImage src="/assets/img/blog/1.jpg" overlay={4}/>
                        <Container className="v-middle z-index-1">
                            <ButtonPopup href="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
                        </Container>
                    </div>
                    {/*End Box Info Center Content*/}


                    <h4><strong>Explore the World</strong></h4>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                        would have been
                        rewritten a thousand times and everything that was left from its origin would be the word “and”
                        and the
                        Little Blind Text should turn around and return to its own, safe country.</p>

                </DsnGrid>
                <CommentForm className="mt-section"/>

            </Container>

            <NextPage className="section-margin" text="Next Post" to="/blog-details">
                A lovely to London with my family
            </NextPage>
            <Footer/>

        </>


    );
}

export default BlogDetails;