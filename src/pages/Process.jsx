import React from 'react';
import './Process.css';

const Process = () => {
    return (
        <div className="process-page">
            <div className="container">
                {/* 1. Hero Section */}
                <section className="process-hero">
                    <h1 className="hero-headline">A Thoughtful, Ongoing Financial Planning Process</h1>
                    <p className="hero-subhead">Clear. Collaborative. Designed to evolve with your life.</p>
                </section>

                {/* 2. Core Visual & Process Explanation (2-Column Layout) */}
                <section className="process-content-wrapper">
                    <div className="process-visual-col">
                        <div className="sticky-image-container">
                            <img
                                src="/assets/images/process-diagram.png"
                                alt="The Financial Planning Process Cycle"
                                className="process-diagram"
                            />
                            <p className="image-caption">Our Planning Framework</p>
                        </div>
                    </div>

                    <div className="process-steps-col">
                        <div className="process-step-item">
                            <h2 className="step-title">Discover</h2>
                            <p className="step-description">
                                We begin with an introductory meeting to get to know each other. We listen carefully to understand your values, goals, and current financial situation, whether it's planning for retirement or leaving a legacy.
                            </p>
                        </div>

                        <div className="process-step-item">
                            <h2 className="step-title">Design</h2>
                            <p className="step-description">
                                We analyze your complete financial picture and collaboratively build a tailored plan. This phase involves identifying strategies for investment, tax efficiency, and risk management that align with your objectives.
                            </p>
                        </div>

                        <div className="process-step-item">
                            <h2 className="step-title">Deliver</h2>
                            <p className="step-description">
                                We present your comprehensive financial plan and discuss recommended strategies. Once agreed upon, we implement the plan and provide access to our client portal for you to track your progress.
                            </p>
                        </div>

                        <div className="process-step-item">
                            <h2 className="step-title">Dynamic</h2>
                            <p className="step-description">
                                Life changes, and so should your plan. We provide ongoing monitoring and regular reviews to ensure your strategy remains aligned with your goals as your life evolves.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* 5. CTA Section (Refined) */}
            <section className="process-cta">
                <div className="container">
                    <div className="cta-content">
                        <p className="cta-text">Want a closer look at how the process works in practice?</p>
                        <button className="btn-minimal" onClick={() => alert('PDF Download functionality coming soon!')}>
                            Download the Process Overview (PDF)
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Process;
