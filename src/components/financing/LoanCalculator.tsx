import { useState } from 'react';
import { formatPrice } from '../../utils/formatters';

interface LoanCalculatorProps {
  carPrice: number;
}

export default function LoanCalculator({ carPrice }: LoanCalculatorProps) {
  const [downPayment, setDownPayment] = useState(carPrice * 0.2);
  const [term, setTerm] = useState(60); // months
  const [interestRate, setInterestRate] = useState(3.99);

  const calculateMonthlyPayment = () => {
    const principal = carPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Finance Calculator
      </h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Vehicle Price: {formatPrice(carPrice)}
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Down Payment
          </label>
          <input
            type="range"
            min={0}
            max={carPrice}
            step={1000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {formatPrice(downPayment)} ({((downPayment / carPrice) * 100).toFixed(1)}%)
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Loan Term (months)
          </label>
          <select
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value={36}>36 months (3 years)</option>
            <option value={48}>48 months (4 years)</option>
            <option value={60}>60 months (5 years)</option>
            <option value={72}>72 months (6 years)</option>
            <option value={84}>84 months (7 years)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Interest Rate (APR)
          </label>
          <input
            type="number"
            min={0}
            max={20}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div className="pt-6 border-t dark:border-gray-700">
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            Estimated Monthly Payment
          </div>
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {formatPrice(monthlyPayment)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Total Cost: {formatPrice(monthlyPayment * term + downPayment)}
          </div>
        </div>
      </div>
    </div>
  );
}