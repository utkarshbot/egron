import React from 'react'
import './style.scss'
import {Row, Col} from 'react-bootstrap';
import heroImage from '../../assets/img/header.jpg';
import BlogItem from './BlogItem';


const BlogDetails = [
    {
        title: "Re Styling",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        title: "Re Styling",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        title: "Re Styling",
        category: "Photography",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
]


const BlogClassic = ({...restProps}) => {
    return (
        <section className='dsn-blog'>
            <Row>
                {BlogDetails.map(
                    (item, index) => {
                        return (
                            <Col {...restProps} key={index}>
                                <BlogItem
                                    src={heroImage} title={item.title} category={item.category}
                                    description={item.description} href={"#0"}/>
                            </Col>

                        );
                    }
                )}
            </Row>
        </section>
    );
}


export default BlogClassic