import { Car } from '../types';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

export default function CarCard({ car, onClick }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={car.images.main}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {car.brand} {car.model}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {car.year} • {car.type}
        </p>
        <p className="text-sm font-medium text-gray-900 dark:text-white mt-2">
          {formatPrice(car.price.min)} - {formatPrice(car.price.max)}
        </p>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}