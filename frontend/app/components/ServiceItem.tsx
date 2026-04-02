import React from 'react';
import Image from 'next/image';

interface ServiceItemProps {
  title: string;
  image: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, image }) => {
  return (
    <div className="group cursor-pointer flex flex-col items-center">
      <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 active:scale-95">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all"
        />
      </div>
      <span className="text-sm md:text-base font-semibold text-gray-800 text-center transition-colors group-hover:text-black">
        {title}
      </span>
    </div>
  );
};

export default ServiceItem;
