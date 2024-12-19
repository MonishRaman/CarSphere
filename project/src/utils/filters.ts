import { Car, SearchFilters } from '../types';

export const filterCars = (cars: Car[], filters: SearchFilters): Car[] => {
  return cars.filter(car => {
    if (filters.brand && !car.brand.toLowerCase().includes(filters.brand.toLowerCase())) return false;
    if (filters.model && !car.model.toLowerCase().includes(filters.model.toLowerCase())) return false;
    if (filters.year && car.year !== filters.year) return false;
    if (filters.type && car.type !== filters.type) return false;
    if (filters.fuelType && car.specs.fuelType !== filters.fuelType) return false;
    if (filters.minPrice && car.price.min < filters.minPrice) return false;
    if (filters.maxPrice && car.price.max > filters.maxPrice) return false;
    return true;
  });
};