import React from 'react';
import '../../pages/Services.css';

const RiskManagement = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Risk Management</h1>
                    <p className="page-subtitle">Protecting what matters most to you.</p>
                </div>
            </section>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-icon-large">
                        <img src="/assets/images/risk-icon.png" alt="Risk Management" />
                    </div>
                    <div className="service-text-large">
                        <h2>Safeguarding Your Financial Future</h2>
                        <p>
                            Life is unpredictable, and unexpected events can derail even the best-laid financial plans. Risk management is about identifying potential threats to your financial security and putting measures in place to mitigate them. We help you evaluate your insurance needs to ensure you and your loved ones are protected.
                        </p>
                        <h3>Protection Strategies:</h3>
                        <ul>
                            <li><strong>Life Insurance:</strong> Providing financial security for your family in the event of your passing.</li>
                            <li><strong>Long-Term Care Insurance:</strong> Planning for potential healthcare costs in retirement.</li>
                            <li><strong>Disability Income Insurance:</strong> Protecting your income stream if you are unable to work.</li>
                            <li><strong>Estate Planning Coordination:</strong> Working with your attorney to ensure your assets are distributed according to your wishes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskManagement;
