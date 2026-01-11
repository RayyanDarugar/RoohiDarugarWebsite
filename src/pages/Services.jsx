import React from 'react';


const Services = () => {
    return (

        <div className="pb-32">
            <section className="bg-surface py-16 text-center mb-16">
                <div className="container mx-auto px-4 md:px-40">
                    <h1 className="text-4xl text-primary mb-4 font-serif">Our Services</h1>
                    <p className="text-lg text-text-light text-center max-w-full mx-auto font-sans">Comprehensive financial planning tailored to your unique needs.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-40">
                <div className="grid grid-cols-1 gap-16 max-w-full mx-auto">
                    {/* Investment Management */}
                    <section className="bg-white p-8 rounded-md border border-border-main transition-shadow hover:shadow-md" id="investment-management">
                        <div className="w-16 h-16 mb-4">
                            <img src="/assets/images/investment-icon.png" alt="Investment Management Icon" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-primary border-b-2 border-secondary pb-2 mb-8 inline-block text-2xl font-bold font-serif">Investment Management</h2>
                        <div className="service-content">
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                Understanding the unique circumstances of each client enables the development of a varied portfolio tailored to their risk tolerance and time horizon. Investment management is the expert supervision and optimization of an individual's or institution's investment portfolio, aimed at attaining financial goals while effectively handling risks and taxes.
                            </p>
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                This involves a spectrum of activities focused on making well-informed investment choices, maximizing returns, and minimizing tax implications. Once a thorough plan is formulated, it guides the direction for selecting investments in your portfolio, ensuring that it aligns with your risk tolerance, time horizon, and liquidity requirements.
                            </p>
                        </div>
                    </section>

                    {/* Tax Planning */}
                    <section className="bg-white p-8 rounded-md border border-border-main transition-shadow hover:shadow-md" id="tax-planning">
                        <div className="w-16 h-16 mb-4">
                            <img src="/assets/images/tax-icon.png" alt="Tax Planning Icon" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-primary border-b-2 border-secondary pb-2 mb-8 inline-block text-2xl font-bold font-serif">Tax Planning</h2>
                        <div className="service-content">
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                Tax Planning Strategies are essential in navigating the inevitability of taxes. My role is to minimize tax liabilities on investment portfolios and employ effective tax planning strategies for optimal wealth transfer events.
                            </p>
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                For instance, addressing tax drag is crucial, as it can potentially reduce annual returns on taxable investment accounts by 1–3%. Another strategy involves Roth IRA Conversions, which can contribute to lowering overall tax payments and increasing the tax-exempt portion of your estate.
                            </p>
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                Conscious consideration of taxes enables us to strategically select positions and formulate plans that align with your financial goals. I implement tax-loss harvesting strategies when applicable and utilize tax-advantaged retirement accounts to alleviate your overall tax burden.
                            </p>
                        </div>
                    </section>

                    {/* Risk Management */}
                    <section className="bg-white p-8 rounded-md border border-border-main transition-shadow hover:shadow-md" id="risk-management">
                        <div className="w-16 h-16 mb-4">
                            <img src="/assets/images/risk-icon.png" alt="Risk Management Icon" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-primary border-b-2 border-secondary pb-2 mb-8 inline-block text-2xl font-bold font-serif">Risk Management</h2>
                        <div className="service-content">
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                Wealth management encompasses the identification, assessment, and mitigation of potential risks that may affect the financial well-being, plans, and goals of individuals or families.
                            </p>
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                This involves deploying a variety of strategies to safeguard wealth, minimize losses, and establish long-term financial security. I offer flexibility to accommodate various outcomes, recognizing that life is replete with uncontrollable circumstances such as the need for long-term care.
                            </p>
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                To address this, we have access to a comprehensive range of variable annuities from top external companies, providing an additional layer of income support as the foundation for portfolios with specific income requirements.
                            </p>
                        </div>
                    </section>

                    {/* Retirement Planning */}
                    <section className="bg-white p-8 rounded-md border border-border-main transition-shadow hover:shadow-md" id="retirement-planning">
                        <div className="w-16 h-16 mb-4">
                            <img src="/assets/images/retirement-icon.png" alt="Retirement Planning Icon" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-primary border-b-2 border-secondary pb-2 mb-8 inline-block text-2xl font-bold font-serif">Retirement Planning</h2>
                        <div className="service-content">
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
                                Retirement offers diverse potential income sources, including Social Security, Pensions, Deferred Compensation, Restricted Share Units (RSUs), Stock Grants, other stock options, Investment Portfolio Income, Real Estate Income, proceeds from the Sale of a Business or Real Estate, Inheritance, and more.
                            </p>
                            <p className="mb-4 text-text-main last:mb-0 font-sans">
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
