import React, { useState, useEffect } from 'react';
import '../App.css';
import Headshot from "./headshot.jpg"
import Frontshot from "./frontshot.png"
import { TypeAnimation } from 'react-type-animation';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`Home ${isVisible ? 'fade-in' : ''}`}>
            <div className="flexbox">
                <div className="textContainer flexElement">
                    <div className='hello'>hi, i'm rishaan</div>
                    <div className='typetext'>
                        <TypeAnimation
                            sequence={[
                                "i'm a CS + Film Major at UW–Madison",
                                1000,
                                "i'm a Software Developer",
                                1000,
                                "i'm a Machine Learning Enthusiast",
                                1000,
                                "i'm a Storyteller with Code",
                                1000,
                                "i'm a Visual Thinker",
                                1000,
                                "i'm always learning.",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: "2em", display: "inline-block" }}
                            repeat={Infinity}
                        />
                    </div>
                </div>
                <div className="imageContainer flexElement">
                    <img src={Frontshot} className="frontshot" />
                </div>
            </div>
        </div>
    );
}

export default Home;
