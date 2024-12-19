import { Car } from '../../types';

interface SpecificationsProps {
  specs: Car['specs'];
}

export default function Specifications({ specs }: SpecificationsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Specifications
      </h2>
      <dl className="space-y-2">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <dt className="text-gray-600 dark:text-gray-400">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </dt>
            <dd className="text-gray-900 dark:text-white font-medium">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}