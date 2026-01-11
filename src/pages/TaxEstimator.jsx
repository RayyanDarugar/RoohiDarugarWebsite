import React from 'react';
import TaxCalculator from '../components/TaxCalculator';


const TaxEstimator = () => {
    return (

        <div className="pb-32 bg-white">
            <section className="py-32 pb-16 text-left">
                <div className="container mx-auto px-4 md:px-40">
                    <h1 className="font-serif text-5xl text-primary mb-4 leading-tight">Tax Estimator</h1>
                    <p className="font-sans text-xl text-text-light max-w-[700px] mb-16">Estimate your federal tax liability with our simplified calculator.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-40">
                <div className="grid grid-cols-1 gap-16 max-w-[900px] mx-auto">
                    <section className="bg-white p-8 rounded-md shadow-sm mb-32 border border-border-main">
                        <TaxCalculator />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TaxEstimator;
