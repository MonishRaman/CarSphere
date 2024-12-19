import { useState } from 'react';
import { Car } from '../../types';

interface CustomOption {
  id: string;
  name: string;
  price: number;
}

const colorOptions: CustomOption[] = [
  { id: 'alpine-white', name: 'Alpine White', price: 0 },
  { id: 'black-sapphire', name: 'Black Sapphire', price: 1500 },
  { id: 'mineral-grey', name: 'Mineral Grey', price: 1500 },
  { id: 'san-marino-blue', name: 'San Marino Blue', price: 2500 },
];

const wheelOptions: CustomOption[] = [
  { id: '18-standard', name: '18" Standard Wheels', price: 0 },
  { id: '19-sport', name: '19" Sport Wheels', price: 2000 },
  { id: '20-performance', name: '20" M Performance Wheels', price: 3500 },
];

interface CustomizationToolProps {
  car: Car;
  onPriceChange: (newPrice: number) => void;
}

export default function CustomizationTool({ car, onPriceChange }: CustomizationToolProps) {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedWheels, setSelectedWheels] = useState(wheelOptions[0]);

  const handleColorChange = (option: CustomOption) => {
    setSelectedColor(option);
    updateTotalPrice(option, selectedWheels);
  };

  const handleWheelsChange = (option: CustomOption) => {
    setSelectedWheels(option);
    updateTotalPrice(selectedColor, option);
  };

  const updateTotalPrice = (color: CustomOption, wheels: CustomOption) => {
    const totalPrice = car.price.min + color.price + wheels.price;
    onPriceChange(totalPrice);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Customize Your Vehicle
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Exterior Color
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colorOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleColorChange(option)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedColor.id === option.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {option.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  +${option.price.toLocaleString()}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Wheels
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wheelOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleWheelsChange(option)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedWheels.id === option.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {option.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  +${option.price.toLocaleString()}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}