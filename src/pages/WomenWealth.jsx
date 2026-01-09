import React from 'react';
import './WomenWealth.css';

const WomenWealth = () => {
    return (
        <div className="women-wealth-page">
            <div className="container">
                <h1 className="page-title">WOMEN & WEALTH</h1>

                <section className="banner-section">
                    <div className="banner-text">
                        <div className="banner-logo">
                            <span className="banner-advisor-name">Roohi Darugar</span>
                            <span className="banner-advisor-title">CRPC® – FINANCIAL ADVISOR</span>
                        </div>
                        <h2 className="banner-tagline">Helping You Take Control of Your Financial Future.</h2>
                    </div>
                    <div className="banner-image">
                        <img src="/assets/images/women-wealth-banner.png" alt="Women discussing finances" />
                    </div>
                </section>

                <section className="content-section">
                    <p>
                        As a financial planner, I realized early in my career that few women had received the same encouragement and financial training that I had been given. I was surprised to learn how few women are truly comfortable talking about financial matters.
                    </p>
                    <p>
                        When I opened my own practice as a financial advisor, I made it my mission to focus time and energy on creating an environment where women are encouraged to learn about finances, become more engaged in the financial planning process and more confident in making financial decisions.
                    </p>
                    <p>
                        Many of my clients are dynamic women who are passionate about what they do, and are successful in life and their careers. They are often balancing the pressures and demands of their job and personal life, leaving little time for anything else. They want a financial advisor who understands their challenges.
                    </p>
                    <p>
                        With this in mind, I began hosting a series of events where smart and savvy women come together to discuss financial topics of interest. Past topics have included financial management, retirement planning, social security, and long term care planning. My goal is to educate women, create a community of shared knowledge and genuine relationships, and to empower women to become more engaged in the financial planning process. <a href="#contact" className="invitation-link">Click here</a> to be added to my invitation list.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default WomenWealth;
