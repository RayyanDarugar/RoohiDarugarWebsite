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
                                Securities and advisory services are offered through LPL Financial, a registered investment advisor and broker-dealer. Member FINRA and SIPC.
                            </p>
                            <p className="text-xs text-text-light mb-4 leading-normal text-center md:text-justify">
                                The information on this website is for general informational purposes only and should not be considered individualized investment, tax, or legal advice. Investing involves risk, including the potential loss of principal.
                            </p>
                            <p className="text-xs text-text-light mb-4 leading-normal text-center md:text-justify">
                                Roohi Darugar does not provide legal or tax advice. Please consult your attorney or tax professional regarding your specific circumstances.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="flex-1 min-w-[250px] text-center md:text-right flex flex-col items-center md:items-end w-full md:w-auto">
                        <h3 className="font-serif text-2xl text-primary mb-8">Roohi Darugar <span className="font-sans text-base font-normal text-text-light">CRPC®</span></h3>

                        <div className="footer-contact-details">
                            <p className="mb-2 text-[0.95rem] text-text-main leading-relaxed">
                                <a href="tel:8588798034" className="text-text-main no-underline font-medium hover:text-secondary">(858) 879-8034</a>
                            </p>
                            {/* Placeholder for Fax if needed, or just remove if not provided */}
                            {/* <p className="contact-fax">Fax: (555) 555-5555</p> */}

                            <p className="mb-2 text-[0.95rem] text-text-main leading-relaxed mt-1">
                                1234 Financial Way, Suite 100<br />
                                San Diego, CA 92101
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
