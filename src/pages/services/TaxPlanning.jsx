import React from 'react';
import '../../pages/Services.css';

const TaxPlanning = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Tax Planning</h1>
                    <p className="page-subtitle">Proactive strategies to minimize your tax liability.</p>
                </div>
            </section>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-icon-large">
                        <img src="/assets/images/tax-icon.png" alt="Tax Planning" />
                    </div>
                    <div className="service-text-large">
                        <h2>Keep More of What You Earn</h2>
                        <p>
                            Taxes can significantly erode your investment returns and overall wealth over time. We incorporate tax planning into every aspect of your financial strategy, looking for opportunities to reduce your current and future tax burden. By working proactively, we aim to help you keep more of your hard-earned money.
                        </p>
                        <h3>Key Focus Areas:</h3>
                        <ul>
                            <li><strong>Tax-Efficient Withdrawal Strategies:</strong> Planning how and when to take distributions from retirement accounts.</li>
                            <li><strong>Asset Location:</strong> Placing investments in the most tax-appropriate account types (e.g., IRA vs. taxable brokerage).</li>
                            <li><strong>Capital Gains Management:</strong> Strategically harvesting losses to offset gains.</li>
                            <li><strong>Charitable Giving:</strong> Utilizing donor-advised funds or other vehicles to maximize tax benefits.</li>
                        </ul>
                        <p className="disclaimer-text">
                            *LPL Financial and its representatives do not provide tax or legal advice. Please consult with your tax advisor or attorney regarding your specific situation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaxPlanning;
