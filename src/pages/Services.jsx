import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-subtitle">Comprehensive financial planning tailored to your unique needs.</p>
                </div>
            </section>

            <div className="container">
                <div className="services-grid">
                    {/* Investment Management */}
                    <section className="service-card" id="investment-management">
                        <div className="service-icon">
                            <img src="/assets/images/investment-icon.png" alt="Investment Management Icon" />
                        </div>
                        <h2>Investment Management</h2>
                        <div className="service-content">
                            <p>
                                Understanding the unique circumstances of each client enables the development of a varied portfolio tailored to their risk tolerance and time horizon. Investment management is the expert supervision and optimization of an individual's or institution's investment portfolio, aimed at attaining financial goals while effectively handling risks and taxes.
                            </p>
                            <p>
                                This involves a spectrum of activities focused on making well-informed investment choices, maximizing returns, and minimizing tax implications. Once a thorough plan is formulated, it guides the direction for selecting investments in your portfolio, ensuring that it aligns with your risk tolerance, time horizon, and liquidity requirements.
                            </p>
                        </div>
                    </section>

                    {/* Tax Planning */}
                    <section className="service-card" id="tax-planning">
                        <div className="service-icon">
                            <img src="/assets/images/tax-icon.png" alt="Tax Planning Icon" />
                        </div>
                        <h2>Tax Planning</h2>
                        <div className="service-content">
                            <p>
                                Tax Planning Strategies are essential in navigating the inevitability of taxes. My role is to minimize tax liabilities on investment portfolios and employ effective tax planning strategies for optimal wealth transfer events.
                            </p>
                            <p>
                                For instance, addressing tax drag is crucial, as it can potentially reduce annual returns on taxable investment accounts by 1–3%. Another strategy involves Roth IRA Conversions, which can contribute to lowering overall tax payments and increasing the tax-exempt portion of your estate.
                            </p>
                            <p>
                                Conscious consideration of taxes enables us to strategically select positions and formulate plans that align with your financial goals. I implement tax-loss harvesting strategies when applicable and utilize tax-advantaged retirement accounts to alleviate your overall tax burden.
                            </p>
                        </div>
                    </section>

                    {/* Risk Management */}
                    <section className="service-card" id="risk-management">
                        <div className="service-icon">
                            <img src="/assets/images/risk-icon.png" alt="Risk Management Icon" />
                        </div>
                        <h2>Risk Management</h2>
                        <div className="service-content">
                            <p>
                                Wealth management encompasses the identification, assessment, and mitigation of potential risks that may affect the financial well-being, plans, and goals of individuals or families.
                            </p>
                            <p>
                                This involves deploying a variety of strategies to safeguard wealth, minimize losses, and establish long-term financial security. I offer flexibility to accommodate various outcomes, recognizing that life is replete with uncontrollable circumstances such as the need for long-term care.
                            </p>
                            <p>
                                To address this, we have access to a comprehensive range of variable annuities from top external companies, providing an additional layer of income support as the foundation for portfolios with specific income requirements.
                            </p>
                        </div>
                    </section>

                    {/* Retirement Planning */}
                    <section className="service-card" id="retirement-planning">
                        <div className="service-icon">
                            <img src="/assets/images/retirement-icon.png" alt="Retirement Planning Icon" />
                        </div>
                        <h2>Retirement Planning</h2>
                        <div className="service-content">
                            <p>
                                Retirement offers diverse potential income sources, including Social Security, Pensions, Deferred Compensation, Restricted Share Units (RSUs), Stock Grants, other stock options, Investment Portfolio Income, Real Estate Income, proceeds from the Sale of a Business or Real Estate, Inheritance, and more.
                            </p>
                            <p>
                                A meticulously crafted income plan is crucial to effectively address the timing and tax implications associated with these sources. Ensuring that the income plan aligns with the specific expenses of the individual or family is paramount to the success of the overall financial strategy.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Services;
