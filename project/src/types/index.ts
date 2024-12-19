export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  type: 'SUV' | 'Sedan' | 'Coupe' | 'Hatchback' | 'Truck' | 'Van';
  price: {
    min: number;
    max: number;
  };
  specs: {
    engine: string;
    horsepower: number;
    fuelType: string;
    transmission: string;
    acceleration: string;
    topSpeed: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
}

export interface SearchFilters {
  brand?: string;
  model?: string;
  type?: string;
  year?: number;
  fuelType?: string;
  minPrice?: number;
  maxPrice?: number;
}