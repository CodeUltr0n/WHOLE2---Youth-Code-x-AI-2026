import React from 'react';

import CategoryCard from '../../features/components/Categories'; 
import textiles from '../../assets/images/textiles.jpeg';
import pottery from '../../assets/images/pottery.jpeg';
import woodwork from '../../assets/images/woodwork.jpeg';
import art from '../../assets/images/art.jpeg';
import metalwork from '../../assets/images/metalwork.jpeg';
import jewelry from '../../assets/images/jewelry.jpeg';

const categoriesData = [
  { title: 'Electronics', description: 'Smartphones, laptops, and gadgets.', imageUrl: 'https://genaigazette.com/wp-content/uploads/2024/06/apple-ai-1024x576.webp' },
  { title: "Men's Apparel", description: 'Suits, shirts and activewear.', imageUrl: 'https://media.gq.com/photos/5583d7163655c24c6c96fd96/master/w_2048%2Cc_limit/copilot-style-fashion-201310-1382560692466_Evolution-of-Armani-Suit-Opener.jpg' },
  { title: "Women's Apparel", description: 'Dresses, tops, and ethnic wear.', imageUrl: 'https://anayadesignerstudio.com/cdn/shop/files/reception_saree_for_women.webp?v=1745304471'},
  { title: 'Footwear', description: 'Sneakers, formal shoes, and sandals.', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800' },
  { title: 'Home & Kitchen', description: 'Decor, appliances, and furniture.', imageUrl: 'https://boldoutline.in/wp-content/uploads/2023/07/Web-cover-52.jpg' },
  { title: 'Health & Beauty', description: 'Skincare, makeup, and wellness.', imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800' },
  { title: 'Sports & Fitness', description: 'Equipments, supplements, and gear.', imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' },
  { title: 'Toys & Games', description: 'Action figures, puzzles, and board games.', imageUrl: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=800' },
  { title: 'Books & Supplies', description: 'Best sellers, stationery, and art supplies.', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800' },
  { title: 'Automotive', description: 'Car accessories, tools, and parts.', imageUrl: 'https://acko-cms.ackoassets.com/basic_car_knowledge_8ad846808b.png' },
];

const CategoriesPage = () => {
  return (

    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="bg-[#FF4500] text-white font-extrabold px-3 py-1 rounded-[16px] text-[10px] md:text-xs tracking-widest mb-3 inline-block shadow-md">
            GLOBAL CATALOG
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tighter drop-shadow-sm">
            EXPLORE BY CATEGORY
          </h1>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-xs md:text-sm font-light tracking-wide">
            Browse our globally scaled catalog powered by intelligent AI storefronts. 
            Discover curated collections designed for the ultimate shopping experience.
          </p>
        </div>
        
        {/* Adjusted grid to 4 cols, gap to 5 to make items smaller and fit nicely */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

