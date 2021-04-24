import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import badge from '../../img/peachglutes.png';
import bands from '../../img/bands-1.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Container className="no-margin">
                    <Row className="desktop vert-center">
                        <Col md={6} className="center shift-left">
                            <img className="peach" src={badge}/>
                            <h1>Booty Bands</h1>
                            <h4 className="px-xs">THICK FABRIC BANDS THAT WON'T ROLL OR SLIDE.</h4>
                            <button class="btn-primary">Shop Workout Bands</button>
                        </Col>
                        <Col md={6} className="text-right">
                            <img class="bands-header" src={bands}/>
                        </Col>
                    </Row>
                </Container>
                <Container className="section">
                <div className="bands-bg text-right">
                            <img class="bands-header" src={bands}/>
                        </div>
                    <div className="mobile header-text">
                        <div className="center">
                            <img className="peach" src={badge}/>
                            <h1>Booty Bands</h1>
                            <h4 className="px-xs">THICK FABRIC BANDS THAT WON'T ROLL OR SLIDE.</h4>
                            <button class="btn-primary">Shop Workout Bands</button>
                        </div>

                    </div>
                </Container>

            </div>
        );
    }
}
