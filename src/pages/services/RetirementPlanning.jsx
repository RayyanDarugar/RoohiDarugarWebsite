import React from 'react';


const RetirementPlanning = () => {
    return (

        <div className="pb-32">
            <section className="bg-surface py-16 text-center mb-16">
                <div className="container mx-auto px-4 md:px-40">
                    <h1 className="text-4xl text-primary mb-4 font-serif">Retirement Planning</h1>
                    <p className="text-lg text-text-light text-center max-w-full mx-auto font-sans">Designing a roadmap for your ideal retirement.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-40">
                <div className="flex flex-col md:flex-row gap-16 items-start bg-white p-8 rounded-md shadow-sm">
                    <div className="shrink-0 w-20 h-20 bg-surface rounded-full p-4 flex items-center justify-center mx-auto md:mx-0">
                        <img src={`${import.meta.env.BASE_URL}assets/images/retirement-icon.png`} alt="Retirement Planning" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-primary mb-4 text-3xl font-serif">Confidence in Your Next Chapter</h2>
                        <p className="mb-4 text-text-main">
                            Retirement is a significant life transition that requires careful planning. Whether you are decades away from retiring or already enjoying your golden years, we help you create a strategy to accumulate wealth, generate sustainable income, and maintain your desired lifestyle.
                        </p>
                        <h3 className="text-primary mt-8 mb-4 text-xl font-bold">Planning Components:</h3>
                        <ul className="list-disc pl-4 mb-4">
                            <li className="mb-2 text-text-main"><strong>Income Projections:</strong> Estimating your future income needs and sources (Social Security, pensions, savings).</li>
                            <li className="mb-2 text-text-main"><strong>Savings Strategies:</strong> Maximizing contributions to 401(k)s, IRAs, and other retirement accounts.</li>
                            <li className="mb-2 text-text-main"><strong>Distribution Planning:</strong> Determining the most efficient way to draw down your assets in retirement.</li>
                            <li className="mb-2 text-text-main"><strong>Healthcare Costs:</strong> Factoring in Medicare and other medical expenses.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RetirementPlanning;
