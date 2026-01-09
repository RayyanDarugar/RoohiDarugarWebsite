import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="about-content-wrapper">
                    {/* Top Section: Headshot and Contact */}
                    <div className="about-profile-header">
                        <div className="about-headshot">
                            <img src="/assets/images/headshot.jpg" alt="Roohi Darugar" />
                        </div>
                        <div className="about-contact-summary">
                            <h3 className="contact-title">CONTACT</h3>
                            <div className="contact-info">
                                <p><strong>Office</strong> (858) 879-8034</p>
                                <p><strong>Email</strong> <a href="mailto:roohi.darugar@lpl.com">roohi.darugar@lpl.com</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Bio */}
                    <div className="about-full-bio">
                        <div className="advisor-identity">
                            <h3 className="role-title">FINANCIAL ADVISOR</h3>
                            <h2 className="advisor-name">
                                Roohi Darugar
                                <span className="advisor-credentials">CRPC®</span>
                            </h2>
                        </div>

                        <div className="bio-text">
                            <p>
                                With 20 years in the financial services industry, Roohi helps individuals, families, and businesses achieve their financial goals through tailored advice on investments, insurance, retirement, estate planning, intergenerational wealth, and education funding.
                            </p>
                            <p>
                                Prior to joining LPL Financial in 2018, Roohi was affiliated with Waddell and Reed, where she became a Chartered Retirement Planning Counselor. She earned a Bachelor's in Finance from California State University, Northridge and a certificate in International Business from UCLA.
                            </p>
                            <p>
                                Through a personalized process, Roohi prioritizes her clients' goals to deliver successful strategies. Her main objective is adding value through tax-wise investment solutions, creating action plans that instill financial confidence.
                            </p>
                            <p>
                                Roohi's mission is to educate clients, clarify objectives, implement effective courses of action, and provide consistent, ongoing service.
                            </p>
                            <p>
                                Outside the office, Roohi enjoys time with her husband and three sons, independent films, theater, and camping. She is committed to giving back through local non-profits and breast cancer awareness activities.
                            </p>
                            <p>
                                She is a member of Business Network International, Rancho Santa Fe Business and Professional Women’s Association, NISWA, DIL, and SDNari.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
