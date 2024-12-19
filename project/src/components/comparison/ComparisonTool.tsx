import { useState } from 'react';
import { Car } from '../../types';
import { formatPrice } from '../../utils/formatters';

interface ComparisonToolProps {
  cars: Car[];
  onClose: () => void;
}

export default function ComparisonTool({ cars, onClose }: ComparisonToolProps) {
  const specs = [
    { key: 'engine', label: 'Engine' },
    { key: 'horsepower', label: 'Horsepower' },
    { key: 'fuelType', label: 'Fuel Type' },
    { key: 'transmission', label: 'Transmission' },
    { key: 'acceleration', label: 'Acceleration' },
    { key: 'topSpeed', label: 'Top Speed' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Car Comparison
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="space-y-4">
                <img
                  src={car.images.main}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {car.brand} {car.model}
                </h3>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {formatPrice(car.price.min)} - {formatPrice(car.price.max)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <table className="w-full">
              <tbody>
                {specs.map((spec) => (
                  <tr key={spec.key} className="border-t dark:border-gray-700">
                    <td className="py-4 text-gray-600 dark:text-gray-400 font-medium">
                      {spec.label}
                    </td>
                    {cars.map((car) => (
                      <td
                        key={car.id}
                        className="py-4 text-gray-900 dark:text-white font-medium"
                      >
                        {car.specs[spec.key as keyof typeof car.specs]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}