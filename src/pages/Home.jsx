import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

// Sections
import Nav from '../components/Nav.jsx'
import Header from './Home Sections/Header.jsx'
import Product from './Home Sections/Product.jsx'
import Material from './Home Sections/Material.jsx'

// Media
import video from '../img/fitqi-video.MOV';

export default class Home extends Component {
    render() {
        return (
            <div className="">
                <div className="ovals">
                    <Nav/>
                    <Header/>
                    <Product/>
                </div>

                <div className="video-container">
                    <video className="video" autoPlay loop muted>
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
                <Material/>
            </div>
        );
    }
}
