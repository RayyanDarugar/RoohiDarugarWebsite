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
                        <img src={`${import.meta.env.BASE_URL}assets/images/women-wealth-banner.png`} alt="Women discussing finances" className="w-full h-auto block" />
                    </div>
                </section>

                <section className="max-w-full">
                    <p className="font-sans text-[1.05rem] leading-relaxed text-[#555] mb-8 text-left">
                        Early in my career as a financial planner, I noticed a striking gap: far fewer women had received the encouragement and financial education I had. I was surprised by how many women felt uncomfortable discussing financial matters—not because of a lack of capability, but a lack of access and support.
                    </p>
                    <p className="font-sans text-[1.05rem] leading-relaxed text-[#555] mb-8 text-left">
                        When I opened my own financial advisory practice, I made it my mission to change that. I intentionally created an environment where women feel welcomed, informed, and empowered to engage in the financial planning process and make confident financial decisions.
                    </p>
                    <p className="font-sans text-[1.05rem] leading-relaxed text-[#555] mb-8 text-left">
                        Many of my clients are accomplished, driven women who are passionate about their careers and lives. They often juggle demanding professional and personal responsibilities, leaving little time to focus on their finances. They want an advisor who understands those pressures and meets them where they are.
                    </p>
                    <p className="font-sans text-[1.05rem] leading-relaxed text-[#555] mb-8 text-left">
                        With this in mind, I began hosting a series of events that bring together smart, savvy women to explore financial topics that matter most to them. Past discussions have included financial management, retirement planning, Social Security, and long-term care planning. My goal is to educate, build a supportive community rooted in shared knowledge and genuine relationships, and empower women to take an active role in their financial future.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default WomenWealth;
