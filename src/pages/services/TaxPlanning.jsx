import React from 'react';


const TaxPlanning = () => {
    return (

        <div className="pb-32">
            <section className="bg-surface py-16 text-center mb-16">
                <div className="container mx-auto px-4 md:px-40">
                    <h1 className="text-4xl text-primary mb-4 font-serif">Tax Planning</h1>
                    <p className="text-lg text-text-light text-center max-w-full mx-auto font-sans">Proactive strategies to minimize your tax liability.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-40">
                <div className="flex flex-col md:flex-row gap-16 items-start bg-white p-8 rounded-md shadow-sm">
                    <div className="shrink-0 w-20 h-20 bg-surface rounded-full p-4 flex items-center justify-center mx-auto md:mx-0">
                        <img src="/assets/images/tax-icon.png" alt="Tax Planning" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-primary mb-4 text-3xl font-serif">Keep More of What You Earn</h2>
                        <p className="mb-4 text-text-main">
                            Taxes can significantly erode your investment returns and overall wealth over time. We incorporate tax planning into every aspect of your financial strategy, looking for opportunities to reduce your current and future tax burden. By working proactively, we aim to help you keep more of your hard-earned money.
                        </p>
                        <h3 className="text-primary mt-8 mb-4 text-xl font-bold">Key Focus Areas:</h3>
                        <ul className="list-disc pl-4 mb-4">
                            <li className="mb-2 text-text-main"><strong>Tax-Efficient Withdrawal Strategies:</strong> Planning how and when to take distributions from retirement accounts.</li>
                            <li className="mb-2 text-text-main"><strong>Asset Location:</strong> Placing investments in the most tax-appropriate account types (e.g., IRA vs. taxable brokerage).</li>
                            <li className="mb-2 text-text-main"><strong>Capital Gains Management:</strong> Strategically harvesting losses to offset gains.</li>
                            <li className="mb-2 text-text-main"><strong>Charitable Giving:</strong> Utilizing donor-advised funds or other vehicles to maximize tax benefits.</li>
                        </ul>
                        <p className="text-sm text-text-light italic mt-4 border-t border-border-main pt-2">
                            *LPL Financial and its representatives do not provide tax or legal advice. Please consult with your tax advisor or attorney regarding your specific situation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaxPlanning;
