import React from 'react';
import '../../pages/Services.css'; // Reuse existing styles

const InvestmentManagement = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Investment Management</h1>
                    <h2 className="page-subtitle">Strategies tailored to your goals and risk tolerance.</h2>
                </div>
            </section>

            <div className="container">
                <div className="service-detail-content">
                    <div className="service-icon-large">
                        <img src="/assets/images/investment-icon.png" alt="Investment Management" />
                    </div>
                    <div className="service-text-large">
                        <h2>Building and Preserving Wealth</h2>
                        <p>
                            We believe that effective investment management is about more than just chasing returns. It's about constructing a portfolio that aligns with your specific financial goals, time horizon, and comfort with risk. We utilize a disciplined approach to asset allocation and diversification to help you navigate market fluctuations.
                        </p>
                        <h3>Our Approach Includes:</h3>
                        <ul>
                            <li><strong>Personalized Portfolio Design:</strong> Creating a mix of assets that reflects your unique situation.</li>
                            <li><strong>Risk Assessment:</strong> Understanding your tolerance for volatility to ensure you stay comfortable with your strategy.</li>
                            <li><strong>Ongoing Monitoring:</strong> Regularly reviewing your portfolio to ensure it remains aligned with your objectives.</li>
                            <li><strong>Tax-Efficient Investing:</strong> seeking opportunities to minimize tax liability within your investment accounts.</li>
                        </ul>
                        <p className="disclaimer-text">
                            *Asset allocation and diversification do not guarantee a profit or protect against a loss.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentManagement;
