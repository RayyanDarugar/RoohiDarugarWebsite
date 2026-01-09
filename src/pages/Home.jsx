import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Personalized, long-term financial planning</h1>
                        <p className="hero-subtitle">Helping individuals, families, and businesses pursue financial goals</p>
                        <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
                    </div>
                </div>
            </section>

            <section className="section advisor-intro">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h2 className="section-title">Roohi Darugar CRPC – Financial Advisor @ LPL Financial</h2>
                            <div className="intro-content">
                                <p>
                                    The heart of my work as a Financial Advisor lies in my desire to personally help individuals, families and businesses work to pursue their financial goals and strive to establish a trusting long-term relationship. Since the very beginning of my career in 1999, I have used my talents to help families, women, and businesses pursue their financial aspirations.
                                </p>
                                <p>
                                    The passion I have for my clients originates in my upbringing in a large family. For me, my view of family grows every time I meet someone who I can have the opportunity to assist and help others pursue their financial goals. My goals are to clarify and prioritize my client's financial goals, implement a course of action, and provide investment and financial planning services that put your financial goals and objectives first.
                                </p>
                            </div>
                            <div className="intro-cta">
                                <Link to="/about" className="btn btn-outline">Learn More About My Approach</Link>
                            </div>
                        </div>
                        {/* Placeholder for advisor image if available, otherwise use a nice abstract or office image */}
                        <div className="intro-image">
                            <img src="/assets/images/headshot.jpg" alt="Roohi Darugar - Financial Advisor" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
