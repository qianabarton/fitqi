import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import material from '../../img/material.png';

export default class Material extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="box-spacer-2 center">
                        <Col md={3}/>
                        <Col md={6} className="">
                            <h2>comfort and booty gains</h2>
                            <h4 className="py-2">no more rolling bands</h4>
                            <p className="p-small">FitQi bands are designed for comfort and functionality.
                                The fabric bands can be worn over your leggings or on bare skin and they won’t
                                pinch or cut into you. Their thick, fabric design means they;ll never roll down
                                or slide out of place during a workout.</p>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row>
                        <Col md={4} className="pt-5">
                            <MaterialInfo
                                padding="py-5" 
                                heading="engineered durability"
                                text="created with woven polyester and reinforced
                                stitching to allow maximum band strength and stretch capability, they’ll
                                withstand more squats and donkey kicks than you could ever do in a lifetime"/>
                            <MaterialInfo 
                                padding="" 
                                heading="perfect fit" 
                                text="measuring a 25-29 inch circumference, these bands
                                fit comfortably around your ankles, knees and thighs"/>
                        </Col>
                        <Col md={4} className="center">
                            <img className="material-img" src={material}/>
                        </Col>
                        <Col md={4}>
                            <MaterialInfo 
                                padding="pb-5" 
                                heading="ideal resistance" 
                                text="each band provides the perfect amount of resistance
                                    for training your legs and glutes. The green band is 60 lbs and the pink band is
                                    90 lbs."/>
                            <MaterialInfo
                                padding=""
                                heading="portability"
                                text="workout wherever you please. Use them at home or
                                take them on the go to the gym or the park."/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const MaterialInfo = props => (
    <Row className={props.padding}>
        <h4>{props.heading}</h4>
        <p className="p-small pt-2">{props.text}</p>
    </Row>
);
