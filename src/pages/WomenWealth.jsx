import React from 'react';


const WomenWealth = () => {
    return (

        <div className="py-32 bg-white">
            <div className="container mx-auto px-4 md:px-40">
                <h1 className="font-serif text-3xl md:text-4xl text-[#4a6fa5] mb-16 uppercase font-normal text-left">WOMEN & WEALTH</h1>

                <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between mb-32 gap-16">
                    <div className="flex-1 w-full md:max-w-[50%]">
                        <div className="mb-8">
                            <span className="block font-serif text-4xl text-[#555] leading-none">Roohi Darugar</span>
                            <span className="block font-sans text-xs text-[#777] tracking-wide mt-1">CRPC® – FINANCIAL ADVISOR</span>
                        </div>
                        <h2 className="font-serif text-3xl text-[#777] font-normal italic leading-tight">Helping You Take Control of Your Financial Future.</h2>
                    </div>
                    <div className="flex-1 w-full md:max-w-[50%]">
                        <img src="/assets/images/women-wealth-banner.png" alt="Women discussing finances" className="w-full h-auto block" />
                    </div>
                </section>

                <section className="max-w-full">
                    <p className="font-sans text-[1.05rem] leading-relaxed text-[#555] mb-8 text-left">
                        As a financial planner, I realized early in my career that few women had received the same encouragement and financial training that I had been given. I was surprised to learn how few women are truly comfortable talking about financial matters.
                    </p>
                    <p className="font-sans text-[1.05rem] leading-relaxed text-[#555] mb-8 text-left">
                        When I opened my own practice as a financial advisor, I made it my mission to focus time and energy on creating an environment where women are encouraged to learn about finances, become more engaged in the financial planning process and more confident in making financial decisions.
                    </p>
                    <p className="font-sans text-[1.05rem] leading-relaxed text-[#555] mb-8 text-left">
                        Many of my clients are dynamic women who are passionate about what they do, and are successful in life and their careers. They are often balancing the pressures and demands of their job and personal life, leaving little time for anything else. They want a financial advisor who understands their challenges.
                    </p>
                    <p className="font-sans text-[1.05rem] leading-relaxed text-[#555] mb-8 text-left">
                        With this in mind, I began hosting a series of events where smart and savvy women come together to discuss financial topics of interest. Past topics have included financial management, retirement planning, social security, and long term care planning. My goal is to educate women, create a community of shared knowledge and genuine relationships, and to empower women to become more engaged in the financial planning process. <a href="#contact" className="text-[#4a6fa5] font-bold no-underline hover:underline">Click here</a> to be added to my invitation list.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default WomenWealth;
