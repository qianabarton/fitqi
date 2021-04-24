import React, {Component} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {Tween} from 'react-gsap';

// Material
import material1 from '../img/material-1.png';
import material2 from '../img/material-2.png';
import material3 from '../img/material-3.png';

var duration = 600;

export default class MaterialAnimation extends Component {
    render() {
        return (
            <div>
                <div id="trigger"></div>
                <div className="animation-container">
                    <img className="material-img order1" src={material1}/>
                    <Controller>
                        <Scene triggerElement="#trigger" duration={duration}>
                            {(progress) => (
                                <Tween to={{top: '150px'}}
                                    ease="Strong.easeOut"
                                    totalProgress={progress}
                                    paused>
                                    <img className="material-img order2" src={material2}/>
                                </Tween>
                            )}
                        </Scene>
                        <Scene triggerElement="#trigger" duration={duration}>
                            {(progress) => (
                                <Tween
                                    to={{
                                    top: '250px'
                                }}
                                    ease="Strong.easeOut"
                                    totalProgress={progress}
                                    paused>
                                    <img className="material-img order3" src={material3}/>
                                </Tween>
                            )}
                        </Scene>
                    </Controller>
                </div>
            </div>
        );
    }
}
