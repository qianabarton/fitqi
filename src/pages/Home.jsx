import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import ReactPlayer from "react-player"

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
            <section className="home">
            <div>
                <div className="ovals">
                    <Nav/>
                    <Header/>
                    <Product/>
                </div>
                <div className="video-container">
                    <ReactPlayer 
                    className="video" 
                    url="https://vimeo.com/541004098" 
                    controls='false'
                    playing='true'
                    loop='true'
                    muted='true'
                    playsinline='true'
                    />
                </div>
                <Material/>
                <div className="section"></div>
            </div>
            </section>
        );
    }
}
