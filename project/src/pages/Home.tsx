import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { cars } from '../data/cars';
import { SearchFilters } from '../types';

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filters, setFilters] = useState<SearchFilters>({});

  const topBrands = ['BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla'];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topBrands.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topBrands.length) % topBrands.length);
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value.toString());
    });
    navigate(`/catalog?${queryParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Your Dream Car
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our extensive collection of premium vehicles
            </p>
            <button
              onClick={() => navigate('/catalog')}
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 mb-16">
        <SearchBar filters={filters} onFilterChange={setFilters} />
      </div>

      {/* Featured Brands Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Brands
        </h2>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {topBrands.map((brand) => (
                <div
                  key={brand}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {brand}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Explore the latest models
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}