import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-64 bg-black cursor-pointer">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent border border-gray-200/20 rounded-2xl pointer-events-none"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white z-10">
        <h3 className="text-xl md:text-2xl font-black tracking-widest uppercase shadow-black drop-shadow-2xl mb-1.5 transition-transform duration-500 group-hover:-translate-y-2">
          {title}
        </h3>
        <p className="text-xs text-gray-300 font-light transition-transform duration-500 group-hover:-translate-y-2 delay-75 line-clamp-2">
          {description}
        </p>

        {/* Use Link to navigate to the category page */}
        <Link
          to={`/category/${encodeURIComponent(title)}`}
          className="mt-4 bg-[#FF4500] text-white font-bold px-4 py-2 rounded-md text-[10px] md:text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 shadow-xl hover:bg-[#ff5722]"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
