import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';
import { cars } from '../data/cars';
import { Car, SearchFilters } from '../types';

export default function Catalog() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<SearchFilters>({});
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 12;

  useEffect(() => {
    const newFilters: SearchFilters = {};
    searchParams.forEach((value, key) => {
      if (key === 'year' || key === 'minPrice' || key === 'maxPrice') {
        newFilters[key] = parseInt(value);
      } else {
        newFilters[key] = value;
      }
    });
    setFilters(newFilters);
  }, [searchParams]);

  useEffect(() => {
    let result = [...cars];

    if (filters.brand) {
      result = result.filter((car) =>
        car.brand.toLowerCase().includes(filters.brand!.toLowerCase())
      );
    }

    if (filters.model) {
      result = result.filter((car) =>
        car.model.toLowerCase().includes(filters.model!.toLowerCase())
      );
    }

    if (filters.year) {
      result = result.filter((car) => car.year === filters.year);
    }

    if (filters.type) {
      result = result.filter((car) => car.type === filters.type);
    }

    if (filters.fuelType) {
      result = result.filter((car) => car.specs.fuelType === filters.fuelType);
    }

    if (filters.minPrice) {
      result = result.filter((car) => car.price.min >= filters.minPrice!);
    }

    if (filters.maxPrice) {
      result = result.filter((car) => car.price.max <= filters.maxPrice!);
    }

    setFilteredCars(result);
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const currentCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Car Catalog
        </h1>

        <SearchBar filters={filters} onFilterChange={setFilters} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => navigate(`/cars/${car.id}`)}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}