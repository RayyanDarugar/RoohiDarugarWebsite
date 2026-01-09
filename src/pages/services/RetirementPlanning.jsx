import React from 'react';
import '../../pages/Services.css';

const RetirementPlanning = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Retirement Planning</h1>
                    <p className="page-subtitle">Designing a roadmap for your ideal retirement.</p>
                </div>
            </section>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-icon-large">
                        <img src="/assets/images/retirement-icon.png" alt="Retirement Planning" />
                    </div>
                    <div className="service-text-large">
                        <h2>Confidence in Your Next Chapter</h2>
                        <p>
                            Retirement is a significant life transition that requires careful planning. Whether you are decades away from retiring or already enjoying your golden years, we help you create a strategy to accumulate wealth, generate sustainable income, and maintain your desired lifestyle.
                        </p>
                        <h3>Planning Components:</h3>
                        <ul>
                            <li><strong>Income Projections:</strong> Estimating your future income needs and sources (Social Security, pensions, savings).</li>
                            <li><strong>Savings Strategies:</strong> Maximizing contributions to 401(k)s, IRAs, and other retirement accounts.</li>
                            <li><strong>Distribution Planning:</strong> Determining the most efficient way to draw down your assets in retirement.</li>
                            <li><strong>Healthcare Costs:</strong> Factoring in Medicare and other medical expenses.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RetirementPlanning;
