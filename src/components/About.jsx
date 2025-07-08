import React, { useState, useEffect } from 'react';
import '../App.css';
import Headshot from "./headshot.jpg"
import { TypeAnimation } from 'react-type-animation';

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`Home ${isVisible ? 'fade-in' : ''}`}>
            <div className="flexbox">
                <div className="imageContainer flexElement">
                    <img src={Headshot} className="headshot" />
                </div>
                <div className="textContainer flexElement">
                    <div className='header'>About Me</div>
                    <div className='bio'>I’m Rishaan Kumar, a double-major in Computer Science and Communication Arts at UW-Madison, who loves turning complex problems into elegant code and compelling narratives. Whether collaborating in hackathons, contributing to research, or exploring new frameworks, I’m always seeking the next opportunity to learn, create, and connect ideas across disciplines.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
