import React, { useState } from 'react';


const TaxCalculator = () => {
    const [income, setIncome] = useState('');
    const [filingStatus, setFilingStatus] = useState('single');
    const [estimatedTax, setEstimatedTax] = useState(null);

    const calculateTax = (e) => {
        e.preventDefault();
        const incomeNum = parseFloat(income);
        if (isNaN(incomeNum)) return;

        // Very simplified 2024 tax brackets for demonstration/educational purposes only
        // This is NOT accurate tax advice
        let tax = 0;
        if (filingStatus === 'single') {
            if (incomeNum <= 11600) tax = incomeNum * 0.10;
            else if (incomeNum <= 47150) tax = 1160 + (incomeNum - 11600) * 0.12;
            else if (incomeNum <= 100525) tax = 5426 + (incomeNum - 47150) * 0.22;
            else tax = 17170 + (incomeNum - 100525) * 0.24; // Simplified cap
        } else {
            // Married filing jointly (simplified)
            if (incomeNum <= 23200) tax = incomeNum * 0.10;
            else if (incomeNum <= 94300) tax = 2320 + (incomeNum - 23200) * 0.12;
            else if (incomeNum <= 201050) tax = 10852 + (incomeNum - 94300) * 0.22;
            else tax = 34337 + (incomeNum - 201050) * 0.24; // Simplified cap
        }

        setEstimatedTax(tax);
    };

    return (

        <div className="bg-surface p-8 rounded-md border border-border-main mt-8">
            <h3 className="mb-2 text-primary text-xl font-bold">Educational Tax Estimator</h3>
            <p className="text-sm mb-8 text-text-light">Estimate your federal tax liability based on 2024 brackets (Simplified).</p>

            <form onSubmit={calculateTax} className="mb-8">
                <div className="mb-4">
                    <label htmlFor="income" className="block mb-2 font-medium text-text-main">Annual Taxable Income ($)</label>
                    <input
                        type="number"
                        id="income"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="e.g. 75000"
                        required
                        className="w-full p-3 border border-border-main rounded text-base focus:outline-none focus:border-primary transition-colors"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="filingStatus" className="block mb-2 font-medium text-text-main">Filing Status</label>
                    <select
                        id="filingStatus"
                        value={filingStatus}
                        onChange={(e) => setFilingStatus(e.target.value)}
                        className="w-full p-3 border border-border-main rounded text-base focus:outline-none focus:border-primary transition-colors"
                    >
                        <option value="single">Single</option>
                        <option value="married">Married Filing Jointly</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary px-4 py-2 text-sm">Estimate Tax</button>
            </form>

            {estimatedTax !== null && (
                <div className="bg-white p-4 rounded-sm border border-border-main mb-8">
                    <h4 className="text-primary mb-2 font-bold">Estimated Federal Tax: ${estimatedTax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
                    <p>Effective Tax Rate: {((estimatedTax / parseFloat(income)) * 100).toFixed(1)}%</p>
                </div>
            )}

            <div className="text-xs text-text-light italic border-t border-border-main pt-4">
                <p>
                    Any calculators or tools are provided for educational purposes only and are not intended to provide specific investment recommendations. Results are hypothetical and do not reflect actual investment outcomes.
                </p>
            </div>
        </div>
    );
};

export default TaxCalculator;
