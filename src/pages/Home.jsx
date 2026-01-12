import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (

        <div className="home-page">
            <section className="bg-surface py-20 text-center bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('${import.meta.env.BASE_URL}assets/images/hero-bg.png')` }}>
                <div className="container mx-auto px-4 md:px-40">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl mb-4 text-primary max-w-full mx-auto font-serif">Personalized, long-term financial planning</h1>
                        <p className="text-xl text-text-light mb-8 max-w-full mx-auto">Helping individuals, families, and businesses pursue financial goals</p>
                        <Link to="/contact" className="btn btn-primary inline-block px-6 py-3 rounded bg-primary text-white hover:bg-[#002244] transition-colors mb-8">Schedule a Consultation</Link>
                        <p className="text-sm text-text-main font-medium">
                            Check the background of investment professionals associated with this site on FINRA’s <a href="http://brokercheck.finra.org" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-secondary">BrokerCheck</a>
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-40">
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-center">
                        <div className="text-left">
                            <h2 className="text-3xl text-primary mb-4 font-serif">Roohi Darugar CRPC – Financial Advisor @ LPL Financial</h2>
                            <div className="intro-content">
                                <p className="mb-4 text-lg text-text-main">
                                    The heart of my work as a Financial Advisor lies in my desire to personally help individuals, families and businesses work to pursue their financial goals and strive to establish a trusting long-term relationship. Since the very beginning of my career in 1999, I have used my talents to help families, women, and businesses pursue their financial aspirations.
                                </p>
                                <p className="mb-4 text-lg text-text-main">
                                    The passion I have for my clients originates in my upbringing in a large family. For me, my view of family grows every time I meet someone who I can have the opportunity to assist and help others pursue their financial goals. My goals are to clarify and prioritize my client's financial goals, implement a course of action, and provide investment and financial planning services that put your financial goals and objectives first.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link to="/about" className="btn btn-outline inline-block px-6 py-3 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors">Learn More About My Approach</Link>
                            </div>
                        </div>
                        {/* Placeholder for advisor image if available, otherwise use a nice abstract or office image */}
                        <div className="max-w-[400px] mx-auto rounded-md overflow-hidden shadow-md">
                            <img src={`${import.meta.env.BASE_URL}assets/images/headshot.jpg`} alt="Roohi Darugar - Financial Advisor" className="w-full h-auto block" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
