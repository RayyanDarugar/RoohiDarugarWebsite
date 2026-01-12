import React from 'react';


const Footer = () => {
    return (

        <footer className="bg-surface text-text-main py-32 pb-8 mt-auto border-t border-border-main">
            <div className="container mx-auto px-4 md:px-40">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-16 mb-4 flex-wrap">
                    {/* Left Column: Disclaimers */}
                    <div className="flex-[2] min-w-[300px] w-full md:w-auto text-center md:text-left">
                        <div className="footer-disclaimers">
                            <p className="text-xs text-text-light mb-4 leading-normal text-center md:text-justify">
                                Roohi Darugar is a registered representative with, and Securities and Advisory services offered through LPL Financial, a Registered Investment Advisor. Member FINRA & SIPC.
                            </p>
                            <p className="text-xs text-text-light mb-4 leading-normal text-center md:text-justify">
                                The financial professionals associated with LPL Financial may discuss and/or transact business only with residents of the states in which they are properly registered or licensed. No offers may be made or accepted from any resident of any other state.
                            </p>
                            <p className="text-xs text-text-light mb-4 leading-normal text-center md:text-justify">
                                Securities and advisory services offered through LPL Financial, a registered investment advisor. Member FINRA/SIPC.
                            </p>
                            <p className="text-sm font-bold text-center md:text-justify mb-4">
                                <a href="https://www.lpl.com/CRS" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LPL Financial Form CRS</a>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="flex-1 min-w-[250px] text-center flex flex-col items-center w-full md:w-auto">
                        <h3 className="font-serif text-2xl text-primary mb-8">Roohi Darugar <span className="font-sans text-base font-normal text-text-light">CRPC®</span></h3>

                        <div className="footer-contact-details">
                            <p className="mb-2 text-[0.95rem] text-text-main leading-relaxed">
                                <a href="tel:8588798034" className="text-text-main no-underline font-medium hover:text-secondary">(858) 879-8034</a>
                            </p>
                            {/* Placeholder for Fax if needed, or just remove if not provided */}
                            {/* <p className="contact-fax">Fax: (555) 555-5555</p> */}

                            <p className="mb-2 text-[0.95rem] text-text-main leading-relaxed mt-1">
                                16776 Bernardo Center Drive, Suite 203<br />
                                San Diego, CA 92128
                            </p>

                            <p className="mb-2 text-[0.95rem] text-text-main leading-relaxed">
                                <a href="mailto:roohi.darugar@lpl.com" className="text-text-main no-underline font-medium hover:text-secondary">roohi.darugar@lpl.com</a>
                            </p>
                        </div>

                        {/* Social Icons Placeholder */}
                        <div className="footer-social">
                            {/* Add icons here if needed */}
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs text-text-light border-t border-border-main pt-8 mt-16">
                    <p>&copy; {new Date().getFullYear()} Roohi Darugar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
