import React from 'react';


const Blog = () => {
    return (

        <div className="pb-32 bg-white">
            <section className="py-32 pb-16 text-left">
                <div className="container mx-auto px-4 md:px-40">
                    <h1 className="font-serif text-5xl text-primary mb-4 leading-tight">Financial Insights Blog</h1>
                    <p className="font-sans text-xl text-text-light max-w-[700px] mb-16">Market trends, financial planning strategies, and more.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-40">
                <div className="grid grid-cols-1 gap-16 max-w-[900px] mx-auto">
                    <section className="bg-white p-8 rounded-md shadow-sm mb-32 border border-border-main">
                        <div className="bg-surface p-16 rounded-sm text-center text-text-light">
                            <p>Coming Soon: Regular updates on market trends, financial planning strategies, and more.</p>
                            <div className="mt-8 pt-8 border-t border-border-main text-xs italic">
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
