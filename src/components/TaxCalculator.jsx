import React, { useState } from 'react';
import './TaxCalculator.css';

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
        <div className="tax-calculator">
            <h3>Educational Tax Estimator</h3>
            <p className="calculator-intro">Estimate your federal tax liability based on 2024 brackets (Simplified).</p>

            <form onSubmit={calculateTax} className="calculator-form">
                <div className="form-group">
                    <label htmlFor="income">Annual Taxable Income ($)</label>
                    <input
                        type="number"
                        id="income"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="e.g. 75000"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="filingStatus">Filing Status</label>
                    <select
                        id="filingStatus"
                        value={filingStatus}
                        onChange={(e) => setFilingStatus(e.target.value)}
                    >
                        <option value="single">Single</option>
                        <option value="married">Married Filing Jointly</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary btn-sm">Estimate Tax</button>
            </form>

            {estimatedTax !== null && (
                <div className="calculator-result">
                    <h4>Estimated Federal Tax: ${estimatedTax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
                    <p>Effective Tax Rate: {((estimatedTax / parseFloat(income)) * 100).toFixed(1)}%</p>
                </div>
            )}

            <div className="tool-disclaimer">
                <p>
                    Any calculators or tools are provided for educational purposes only and are not intended to provide specific investment recommendations. Results are hypothetical and do not reflect actual investment outcomes.
                </p>
            </div>
        </div>
    );
};

export default TaxCalculator;
