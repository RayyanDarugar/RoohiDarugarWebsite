import React from 'react';


const Process = () => {
    return (

        <div className="bg-white text-text-main pt-32 pb-40">
            <div className="container mx-auto px-4 md:px-40">
                {/* 1. Hero Section */}
                <section className="py-32 max-w-[900px] mx-auto">
                    <h1 className="font-serif text-4xl md:text-6xl font-normal text-primary leading-tight mb-8 -tracking-wide">A Thoughtful, Ongoing Financial Planning Process</h1>
                    <p className="font-sans text-xl text-text-light font-normal max-w-[600px]">Clear. Collaborative. Designed to evolve with your life.</p>
                </section>

                {/* 2. Core Visual & Process Explanation (2-Column Layout) */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 items-start">
                    <div className="relative">
                        <div className="lg:sticky lg:top-[100px] text-center mb-16 lg:mb-0">
                            <img
                                src="/assets/images/process-diagram.png"
                                alt="The Financial Planning Process Cycle"
                                className="w-full max-w-[450px] h-auto block mx-auto mb-4"
                            />
                            <p className="font-serif text-sm text-text-light uppercase tracking-wide mt-4">Our Planning Framework</p>
                        </div>
                    </div>

                    <div className="pt-0 lg:pt-16">
                        <div className="mb-12 lg:mb-20 pl-0 lg:pl-16 border-l border-transparent hover:border-secondary transition-colors">
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 font-normal">Discover</h2>
                            <p className="font-sans text-lg leading-relaxed text-text-main max-w-[500px]">
                                We begin with an introductory meeting to get to know each other. We listen carefully to understand your values, goals, and current financial situation, whether it's planning for retirement or leaving a legacy.
                            </p>
                        </div>

                        <div className="mb-12 lg:mb-20 pl-0 lg:pl-16 border-l border-transparent hover:border-secondary transition-colors">
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 font-normal">Design</h2>
                            <p className="font-sans text-lg leading-relaxed text-text-main max-w-[500px]">
                                We analyze your complete financial picture and collaboratively build a tailored plan. This phase involves identifying strategies for investment, tax efficiency, and risk management that align with your objectives.
                            </p>
                        </div>

                        <div className="mb-12 lg:mb-20 pl-0 lg:pl-16 border-l border-transparent hover:border-secondary transition-colors">
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 font-normal">Deliver</h2>
                            <p className="font-sans text-lg leading-relaxed text-text-main max-w-[500px]">
                                We present your comprehensive financial plan and discuss recommended strategies. Once agreed upon, we implement the plan and provide access to our client portal for you to track your progress.
                            </p>
                        </div>

                        <div className="mb-12 lg:mb-20 pl-0 lg:pl-16 border-l border-transparent hover:border-secondary transition-colors">
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 font-normal">Dynamic</h2>
                            <p className="font-sans text-lg leading-relaxed text-text-main max-w-[500px]">
                                Life changes, and so should your plan. We provide ongoing monitoring and regular reviews to ensure your strategy remains aligned with your goals as your life evolves.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* 5. CTA Section (Refined) */}
            <section className="bg-surface py-32 mt-32 mb-16">
                <div className="container mx-auto px-4 md:px-40">
                    <div className="flex flex-col items-center text-center gap-8">
                        <p className="font-serif text-2xl text-primary">Want a closer look at how the process works in practice?</p>
                        <button className="bg-transparent border border-primary text-primary px-8 py-4 text-base font-sans cursor-pointer transition-all rounded-sm hover:bg-primary hover:text-white" onClick={() => alert('PDF Download functionality coming soon!')}>
                            Download the Process Overview (PDF)
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Process;
