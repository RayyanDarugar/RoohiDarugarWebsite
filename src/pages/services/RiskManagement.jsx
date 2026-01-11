import React from 'react';


const RiskManagement = () => {
    return (

        <div className="pb-32">
            <section className="bg-surface py-16 text-center mb-16">
                <div className="container mx-auto px-4 md:px-40">
                    <h1 className="text-4xl text-primary mb-4 font-serif">Risk Management</h1>
                    <p className="text-lg text-text-light text-center max-w-full mx-auto font-sans">Protecting what matters most to you.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-40">
                <div className="flex flex-col md:flex-row gap-16 items-start bg-white p-8 rounded-md shadow-sm">
                    <div className="shrink-0 w-20 h-20 bg-surface rounded-full p-4 flex items-center justify-center mx-auto md:mx-0">
                        <img src="/assets/images/risk-icon.png" alt="Risk Management" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-primary mb-4 text-3xl font-serif">Safeguarding Your Financial Future</h2>
                        <p className="mb-4 text-text-main">
                            Life is unpredictable, and unexpected events can derail even the best-laid financial plans. Risk management is about identifying potential threats to your financial security and putting measures in place to mitigate them. We help you evaluate your insurance needs to ensure you and your loved ones are protected.
                        </p>
                        <h3 className="text-primary mt-8 mb-4 text-xl font-bold">Protection Strategies:</h3>
                        <ul className="list-disc pl-4 mb-4">
                            <li className="mb-2 text-text-main"><strong>Life Insurance:</strong> Providing financial security for your family in the event of your passing.</li>
                            <li className="mb-2 text-text-main"><strong>Long-Term Care Insurance:</strong> Planning for potential healthcare costs in retirement.</li>
                            <li className="mb-2 text-text-main"><strong>Disability Income Insurance:</strong> Protecting your income stream if you are unable to work.</li>
                            <li className="mb-2 text-text-main"><strong>Estate Planning Coordination:</strong> Working with your attorney to ensure your assets are distributed according to your wishes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskManagement;
