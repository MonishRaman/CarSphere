import { useParams } from 'react-router-dom';
import { cars } from '../data/cars';

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Car not found
          </h1>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={car.images.main}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {car.brand} {car.model}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {car.year} • {car.type}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Specifications
                </h2>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600 dark:text-gray-400">Engine</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">
                      {car.specs.engine}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400" data-bolt-action="file" data-file-path="src/pages/CarDetails.tsx">
  Horsepower
</dt>

                    <dd className="text-gray-900 dark:text-white font-medium">
                      {car.specs.horsepower} hp
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600 dark:text-gray-400">Fuel Type</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">
                      {car.specs.fuelType}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600 dark:text-gray-400">Transmission</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">
                      {car.specs.transmission}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600 dark:text-gray-400">Acceleration</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">
                      {car.specs.acceleration}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600 dark:text-gray-400">Top Speed</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">
                      {car.specs.topSpeed}
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Price Range
                </h2>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(car.price.min)} - {formatPrice(car.price.max)}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.images.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${car.brand} ${car.model} - Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                3D Model Viewer
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  3D model viewer placeholder - Integration with Three.js or Sketchfab API would go here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}