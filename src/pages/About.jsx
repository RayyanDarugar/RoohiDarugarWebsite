import React from 'react';


const About = () => {
    return (
        <div className="pb-32 bg-surface min-h-screen">
            <div className="container mx-auto px-4 md:px-40">
                <div className="py-16">
                    {/* Top Section: Headshot and Contact */}
                    <div className="flex flex-col md:flex-row justify-start items-center gap-12 mb-32 flex-wrap max-w-full mx-auto">
                        <div className="w-full max-w-[300px] h-auto md:w-[300px] md:h-[300px] shrink-0 shadow-md overflow-hidden rounded">
                            <img src={`${import.meta.env.BASE_URL}assets/images/headshot.jpg`} alt="Roohi Darugar" className="w-full h-full object-cover block" />
                        </div>
                        <div className="text-left bg-white p-8 rounded-md shadow-sm w-full md:min-w-[600px] lg:min-w-[800px] flex flex-col justify-center text-center md:text-left">
                            <h3 className="font-sans text-[1.9rem] tracking-wide text-secondary uppercase mb-4 font-semibold">CONTACT</h3>
                            <div className="contact-info">
                                <p className="mb-2 text-[1.6rem] text-text-main"><strong>Office</strong> (858) 879-8034</p>
                                <p className="mb-2 text-[1.6rem] text-text-main"><strong>Email</strong> <a href="mailto:roohi.darugar@lpl.com" className="text-text-main hover:text-secondary transition-colors">roohi.darugar@lpl.com</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Bio */}
                    <div className="max-w-[90%] md:max-w-[65%] mx-auto text-left">
                        <div className="text-center mb-16">
                            <h3 className="font-sans text-sm tracking-wide text-secondary uppercase mb-2 font-semibold">FINANCIAL ADVISOR</h3>
                            <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-primary leading-tight">
                                Roohi Darugar
                                <span className="inline-block text-[1.5rem] ml-2 font-normal text-primary">CRPC®</span>
                            </h2>
                        </div>

                        <div className="bio-text">
                            <p className="mb-8 text-[1.6rem] leading-relaxed text-text-main">
                                With 20 years in the financial services industry, Roohi helps individuals, families, and businesses achieve their financial goals through tailored advice on investments, insurance, retirement, estate planning, intergenerational wealth, and education funding.
                            </p>
                            <p className="mb-8 text-[1.6rem] leading-relaxed text-text-main">
                                Prior to joining LPL Financial in 2018, Roohi was affiliated with Waddell and Reed, where she became a Chartered Retirement Planning Counselor. She earned a Bachelor's in Finance from California State University, Northridge and a certificate in International Business from UCLA.
                            </p>
                            <p className="mb-8 text-[1.6rem] leading-relaxed text-text-main">
                                Through a personalized process, Roohi prioritizes her clients' goals to deliver successful strategies. Her main objective is adding value through tax-wise investment solutions, creating action plans that instill financial confidence.
                            </p>
                            <p className="mb-8 text-[1.6rem] leading-relaxed text-text-main">
                                Outside the office, Roohi enjoys time with her husband and three sons, independent films, theater, and camping. She is committed to giving back through local non-profits and breast cancer awareness activities.
                            </p>
                            <p className="mb-8 text-[1.6rem] leading-relaxed text-text-main">
                                She is a member of Business Network International, Rancho Santa Fe Business and Professional Women’s Association, NISWA, DIL, and SDNari.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
