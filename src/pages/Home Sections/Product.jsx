import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import product from '../../img/bands-product.png';
import product_mobile from '../../mobile-img/bands-product.png';


export default class Product extends Component {
    render() {
        return (
            <div className="box-spacer">
                <Container>
                    <Row>
                        <Col md={6} className="center">
                        <img className="desktop-i product-img" src={product}/>
                        <img className="mobile product-img" src={product_mobile}/>
                        </Col>
                        <Col md={6} className="pt-md-5 mt-5 mobile-center">
                            <h2>Workout Band Set</h2>
                            <h3>$20</h3>
                            <p>These highly durable workout bands are made from woven polyester. Each set
                                comes with 2 bands, lighter resistance (green) and harder resistance (pink).</p>
                            <button className="btn-primary">BUY NOW</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
