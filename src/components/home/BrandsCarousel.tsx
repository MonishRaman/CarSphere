import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BrandsCarouselProps {
  brands: string[];
  currentSlide: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export default function BrandsCarousel({
  brands,
  currentSlide,
  onPrevSlide,
  onNextSlide,
}: BrandsCarouselProps) {
  return (
    <div className="relative">
      <button
        onClick={onPrevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {brands.map((brand) => (
            <div key={brand} className="w-full flex-shrink-0 px-4">
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
  );
}