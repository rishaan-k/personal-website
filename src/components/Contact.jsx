import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaGlobe } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import resume from './resume.pdf';

function Contact() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`contact-page ${isVisible ? 'fade-in' : ''}`}>
            <div className="contact-container">
                <h2>Let's Connect</h2>
                <p>Feel free to reach out to me through any of these platforms</p>
                <p className="email-text">
                    <a href="mailto:rakumar2@wisc.edu">rakumar2@wisc.edu</a>
                </p>
                
                <div className="social-links">
                    <div className="social-item">
                        <a href="https://github.com/rishaan-k" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub className="social-icon" />
                        </a>
                        <span className="social-text">GitHub</span>
                    </div>
                    <div className="social-item">
                        <a href="https://www.linkedin.com/in/rishaan-kumar" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <span className="social-text">LinkedIn</span>
                    </div>
                    <div className="social-item">
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaFileAlt className="social-icon" />
                        </a>
                        <span className="social-text">Resume</span>
                    </div>
                    <div className="social-item">
                        <a href="mailto:rakumar2@wisc.edu" className="social-link">
                            <FaEnvelope className="social-icon" />
                        </a>
                        <span className="social-text">Email</span>
                    </div>
                    <div className="social-item">
                        <a href="https://rishaan.studio/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGlobe className="social-icon" />
                        </a>
                        <span className="social-text">Portfolio</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
