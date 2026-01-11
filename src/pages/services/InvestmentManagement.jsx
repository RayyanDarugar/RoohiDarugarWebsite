import React from 'react';


const InvestmentManagement = () => {
    return (

        <div className="pb-32">
            <section className="bg-surface py-16 text-center mb-16">
                <div className="container mx-auto px-4 md:px-40">
                    <h1 className="text-4xl text-primary mb-4 font-serif">Investment Management</h1>
                    <h2 className="text-lg text-text-light text-center max-w-full mx-auto font-sans">Strategies tailored to your goals and risk tolerance.</h2>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-40">
                <div className="flex flex-col md:flex-row gap-16 items-start bg-white p-8 rounded-md shadow-sm">
                    <div className="shrink-0 w-20 h-20 bg-surface rounded-full p-4 flex items-center justify-center mx-auto md:mx-0">
                        <img src="/assets/images/investment-icon.png" alt="Investment Management" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-primary mb-4 text-3xl font-serif">Building and Preserving Wealth</h2>
                        <p className="mb-4 text-text-main">
                            We believe that effective investment management is about more than just chasing returns. It's about constructing a portfolio that aligns with your specific financial goals, time horizon, and comfort with risk. We utilize a disciplined approach to asset allocation and diversification to help you navigate market fluctuations.
                        </p>
                        <h3 className="text-primary mt-8 mb-4 text-xl font-bold">Our Approach Includes:</h3>
                        <ul className="list-disc pl-4 mb-4">
                            <li className="mb-2 text-text-main"><strong>Personalized Portfolio Design:</strong> Creating a mix of assets that reflects your unique situation.</li>
                            <li className="mb-2 text-text-main"><strong>Risk Assessment:</strong> Understanding your tolerance for volatility to ensure you stay comfortable with your strategy.</li>
                            <li className="mb-2 text-text-main"><strong>Ongoing Monitoring:</strong> Regularly reviewing your portfolio to ensure it remains aligned with your objectives.</li>
                            <li className="mb-2 text-text-main"><strong>Tax-Efficient Investing:</strong> seeking opportunities to minimize tax liability within your investment accounts.</li>
                        </ul>
                        <p className="text-sm text-text-light italic mt-4 border-t border-border-main pt-2">
                            *Asset allocation and diversification do not guarantee a profit or protect against a loss.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentManagement;
