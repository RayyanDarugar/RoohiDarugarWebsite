import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-layout">
                    {/* Left Column: Disclaimers */}
                    <div className="footer-left">
                        <div className="footer-disclaimers">
                            <p>
                                Securities and advisory services are offered through LPL Financial, a registered investment advisor and broker-dealer. Member FINRA and SIPC.
                            </p>
                            <p>
                                The information on this website is for general informational purposes only and should not be considered individualized investment, tax, or legal advice. Investing involves risk, including the potential loss of principal.
                            </p>
                            <p>
                                Roohi Darugar does not provide legal or tax advice. Please consult your attorney or tax professional regarding your specific circumstances.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="footer-right">
                        <h3 className="footer-advisor-name">Roohi Darugar <span className="footer-credentials">CRPC®</span></h3>

                        <div className="footer-contact-details">
                            <p className="contact-phone">
                                <a href="tel:8588798034">(858) 879-8034</a>
                            </p>
                            {/* Placeholder for Fax if needed, or just remove if not provided */}
                            {/* <p className="contact-fax">Fax: (555) 555-5555</p> */}

                            <p className="contact-address">
                                1234 Financial Way, Suite 100<br />
                                San Diego, CA 92101
                            </p>

                            <p className="contact-email">
                                <a href="mailto:roohi.darugar@lpl.com">roohi.darugar@lpl.com</a>
                            </p>
                        </div>

                        {/* Social Icons Placeholder */}
                        <div className="footer-social">
                            {/* Add icons here if needed */}
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Roohi Darugar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
