import React from 'react';
import TaxCalculator from '../components/TaxCalculator';
import './Tools.css'; // Reusing Tools.css for now as styles are compatible

const TaxEstimator = () => {
    return (
        <div className="tools-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Tax Estimator</h1>
                    <p className="page-subtitle">Estimate your federal tax liability with our simplified calculator.</p>
                </div>
            </section>

            <div className="container">
                <div className="tools-grid">
                    <section className="tool-section">
                        <TaxCalculator />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TaxEstimator;
