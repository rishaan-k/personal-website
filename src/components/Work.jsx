import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import uwLogo from './uw.jpeg';
import duploLogo from './duplo.png';
import trackTheSpot from './tts.png';
import mendota from './mendota.jpg';
import covid from './covid-o-grapher.png';

function Work() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const minSwipeDistance = 50;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000); // 10 seconds

        return () => clearInterval(interval);
    }, []);

    const projects = [
        {
            image: trackTheSpot,
            title: "TrackTheSpot",
            description: "User-Centric Spotify Data Visualization App",
            link: "https://github.com/rishaan-k/trackthespot"
        },
        {
            image: mendota,
            title: "Lake Mendota Ice Analysis",
            description: "Predictive Climate Modeling Using Linear Regression",
            link: "https://github.com/rishaan-k/Lake-Mendota-Ice-Analysis"
        },
        {
            image: covid,
            title: "Covid-O-Grapher",
            description: "COVID-19 Tracking and Graphing Tools",
            link: "https://github.com/rishaan-k/covid-o-grapher"
        }
    ];

    const experiences = [
        {
            company: "DuploCloud",
            title: "Software Engineer Intern",
            period: "May 2024 - August 2024",
            image: duploLogo
        },
        {
            company: "University of Wisconsin-Madison",
            title: "B.S. Computer Science, B.S. Film",
            period: "August 2022 - May 2026",
            image: uwLogo
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const onTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    return (
        <div className="work-container">
            <h2 className="work-title">My Work</h2>
            <div className="carousel">
                <button className="carousel-button prev" onClick={prevSlide}>
                    ←
                </button>
                <div 
                    className="carousel-content"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <a 
                        href={projects[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card {...projects[currentIndex]} />
                    </a>
                </div>
                <button className="carousel-button next" onClick={nextSlide}>
                    →
                </button>
            </div>
            <div className="carousel-dots">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <div className="experience-section">
                <h2 className="experience-title">My Experience</h2>
                <div className="experience-container">
                    {experiences.map((experience, index) => (
                        <div key={index} className="experience-card">
                            <div className="experience-image">
                                <img src={experience.image} alt={experience.company} />
                            </div>
                            <div className="experience-content">
                                <h3 className="experience-company">{experience.company}</h3>
                                <p className="experience-period">{experience.period}</p>
                                <h4 className="experience-job-title">{experience.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;
