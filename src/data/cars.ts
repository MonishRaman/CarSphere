export const cars = [
  {
    id: '1',
    brand: 'BMW',
    model: 'M5 Competition',
    year: 2024,
    type: 'Sedan',
    price: {
      min: 108900,
      max: 138900
    },
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      horsepower: 617,
      fuelType: 'Gasoline',
      transmission: '8-speed Automatic',
      acceleration: '0-60 mph in 3.2s',
      topSpeed: '190 mph'
    },
    images: {
      main: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      gallery: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e',
        'https://images.unsplash.com/photo-1607853202273-797f1c22a38e'
      ]
    }
  },
  {
    id: '2',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    type: 'Sedan',
    price: {
      min: 114900,
      max: 151900
    },
    specs: {
      engine: '3.0L I6 Turbo',
      horsepower: 429,
      fuelType: 'Gasoline',
      transmission: '9-speed Automatic',
      acceleration: '0-60 mph in 4.9s',
      topSpeed: '155 mph'
    },
    images: {
      main: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      gallery: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24'
      ]
    }
  }
] as const;