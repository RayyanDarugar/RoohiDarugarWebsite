import React from 'react';
import './Tools.css'; // Reusing Tools.css

const Blog = () => {
    return (
        <div className="tools-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="page-title">Financial Insights Blog</h1>
                    <p className="page-subtitle">Market trends, financial planning strategies, and more.</p>
                </div>
            </section>

            <div className="container">
                <div className="tools-grid">
                    <section className="tool-section blog-section">
                        <div className="blog-placeholder">
                            <p>Coming Soon: Regular updates on market trends, financial planning strategies, and more.</p>
                            <div className="blog-disclaimer">
                                <p>
                                    Opinions expressed are for general informational purposes only and are subject to change. They should not be considered investment advice or a recommendation of any particular security or strategy.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Blog;
