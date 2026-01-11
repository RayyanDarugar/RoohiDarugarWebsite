import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-[1000] py-4">
            <div className="container mx-auto px-4 md:px-40 flex justify-between items-center">
                <div className="logo">
                    <Link to="/" className="flex flex-col text-primary">
                        <span className="font-serif text-2xl font-bold leading-tight -mb-[2px] block">Roohi Darugar</span>
                        <span className="text-sm text-text-light font-medium block">CRPC – Financial Advisor</span>
                    </Link>
                </div>

                <button className="lg:hidden text-2xl text-primary bg-none border-none cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <nav className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent flex flex-col lg:flex-row p-8 lg:p-0 shadow-md lg:shadow-none transition-transform duration-300 ease-in-out z-[999] items-start lg:items-center gap-8 ${isMenuOpen ? 'translate-y-0' : '-translate-y-[150%] lg:translate-y-0'}`}>
                    <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center w-full lg:w-auto mb-4 lg:mb-0 text-left">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-medium text-text-main cursor-pointer no-underline py-2 hover:text-primary w-full lg:w-auto border-b lg:border-none border-border-main">Home</Link>

                        <div className="relative inline-block group w-full lg:w-auto border-b lg:border-none border-border-main">
                            <span className="font-medium text-text-main cursor-pointer no-underline py-2 hover:text-primary block w-full lg:w-auto">About ▾</span>
                            <div className="block lg:hidden group-hover:block lg:absolute bg-white lg:min-w-[220px] lg:shadow-md z-10 rounded py-2 top-full left-0 pl-8 lg:pl-0 border-l-2 border-secondary lg:border-none static shadow-none">
                                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-text-main px-4 py-3 no-underline block text-[0.95rem] hover:bg-surface hover:text-primary">Meet Roohi</Link>
                                <Link to="/women-wealth" onClick={() => setIsMenuOpen(false)} className="text-text-main px-4 py-3 no-underline block text-[0.95rem] hover:bg-surface hover:text-primary">Women & Wealth</Link>
                            </div>
                        </div>

                        <div className="relative inline-block group w-full lg:w-auto border-b lg:border-none border-border-main">
                            <span className="font-medium text-text-main cursor-pointer no-underline py-2 hover:text-primary block w-full lg:w-auto">Services ▾</span>
                            <div className="block lg:hidden group-hover:block lg:absolute bg-white lg:min-w-[220px] lg:shadow-md z-10 rounded py-2 top-full left-0 pl-8 lg:pl-0 border-l-2 border-secondary lg:border-none static shadow-none">
                                <Link to="/services/investment-management" onClick={() => setIsMenuOpen(false)} className="text-text-main px-4 py-3 no-underline block text-[0.95rem] hover:bg-surface hover:text-primary">Investment Management</Link>
                                <Link to="/services/tax-planning" onClick={() => setIsMenuOpen(false)} className="text-text-main px-4 py-3 no-underline block text-[0.95rem] hover:bg-surface hover:text-primary">Tax Planning</Link>
                                <Link to="/services/risk-management" onClick={() => setIsMenuOpen(false)} className="text-text-main px-4 py-3 no-underline block text-[0.95rem] hover:bg-surface hover:text-primary">Risk Management</Link>
                                <Link to="/services/retirement-planning" onClick={() => setIsMenuOpen(false)} className="text-text-main px-4 py-3 no-underline block text-[0.95rem] hover:bg-surface hover:text-primary">Retirement Planning</Link>
                            </div>
                        </div>

                        <div className="relative inline-block group w-full lg:w-auto border-b lg:border-none border-border-main">
                            <span className="font-medium text-text-main cursor-pointer no-underline py-2 hover:text-primary block w-full lg:w-auto">Tools ▾</span>
                            <div className="block lg:hidden group-hover:block lg:absolute bg-white lg:min-w-[220px] lg:shadow-md z-10 rounded py-2 top-full left-0 pl-8 lg:pl-0 border-l-2 border-secondary lg:border-none static shadow-none">
                                <Link to="/tools/tax-estimator" onClick={() => setIsMenuOpen(false)} className="text-text-main px-4 py-3 no-underline block text-[0.95rem] hover:bg-surface hover:text-primary">Tax Estimator</Link>
                                <Link to="/tools/blog" onClick={() => setIsMenuOpen(false)} className="text-text-main px-4 py-3 no-underline block text-[0.95rem] hover:bg-surface hover:text-primary">Financial Insights Blog</Link>
                            </div>
                        </div>

                        <Link to="/process" onClick={() => setIsMenuOpen(false)} className="font-medium text-text-main cursor-pointer no-underline py-2 hover:text-primary w-full lg:w-auto border-b lg:border-none border-border-main">Process</Link>

                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="font-medium text-text-main cursor-pointer no-underline py-2 hover:text-primary w-full lg:w-auto border-b lg:border-none border-border-main">Contact</Link>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full lg:w-auto pt-4 lg:pt-0">
                        <a href="tel:8588798034" className="text-sm font-semibold text-text-main hover:text-primary">(858) 879-8034</a>
                        <a href="mailto:roohi.darugar@lpl.com" className="text-sm font-semibold text-text-main hover:text-primary">Email Us</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
