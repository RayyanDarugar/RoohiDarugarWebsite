import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">
                        <span className="advisor-name">Roohi Darugar</span>
                        <span className="advisor-title">CRPC – Financial Advisor</span>
                    </Link>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <div className="nav-list">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

                        <div className="nav-item-dropdown">
                            <span className="dropdown-trigger">About ▾</span>
                            <div className="dropdown-content">
                                <Link to="/about" onClick={() => setIsMenuOpen(false)}>Meet Roohi</Link>
                                <Link to="/women-wealth" onClick={() => setIsMenuOpen(false)}>Women & Wealth</Link>
                            </div>
                        </div>

                        <div className="nav-item-dropdown">
                            <span className="dropdown-trigger">Services ▾</span>
                            <div className="dropdown-content">
                                <Link to="/services/investment-management" onClick={() => setIsMenuOpen(false)}>Investment Management</Link>
                                <Link to="/services/tax-planning" onClick={() => setIsMenuOpen(false)}>Tax Planning</Link>
                                <Link to="/services/risk-management" onClick={() => setIsMenuOpen(false)}>Risk Management</Link>
                                <Link to="/services/retirement-planning" onClick={() => setIsMenuOpen(false)}>Retirement Planning</Link>
                            </div>
                        </div>

                        <div className="nav-item-dropdown">
                            <span className="dropdown-trigger">Tools ▾</span>
                            <div className="dropdown-content">
                                <Link to="/tools/tax-estimator" onClick={() => setIsMenuOpen(false)}>Tax Estimator</Link>
                                <Link to="/tools/blog" onClick={() => setIsMenuOpen(false)}>Financial Insights Blog</Link>
                            </div>
                        </div>

                        <Link to="/process" onClick={() => setIsMenuOpen(false)}>Process</Link>

                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </div>
                    <div className="header-contact">
                        <a href="tel:8588798034" className="phone-link">(858) 879-8034</a>
                        <a href="mailto:roohi.darugar@lpl.com" className="phone-link">Email Us</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
