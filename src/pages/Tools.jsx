import React from 'react';
import TaxCalculator from '../components/TaxCalculator';
import './Tools.css';

const Tools = () => {
    return (
        <div className="tools-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Tools & Resources</h1>
                    <p className="page-subtitle">Educational resources to help you understand your financial picture.</p>
                </div>
            </section>

            <div className="container">
                <div className="tools-grid">
                    <section className="tool-section">
                        <h2>Tax Estimator</h2>
                        <TaxCalculator />
                    </section>

                    <section className="tool-section blog-section">
                        <h2>Financial Insights Blog</h2>
                        <div className="blog-placeholder">
                            <p>Coming Soon: Regular updates on market trends, financial planning strategies, and more.</p>
                            <div className="blog-disclaimer">
                                <p>
                                    Opinions expressed are for general informational purposes only and are subject to change. They should not be considered investment advice or a recommendation of any particular security or strategy.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Tools;
