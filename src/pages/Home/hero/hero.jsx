import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandVideo from '../../../assets/videos/Brand2.mp4';
import WatchVideo from '../../../assets/videos/watch.mp4';
import CameraVideo from '../../../assets/videos/Camera.mp4';

const Hero = () => {
  // State to control text visibility for featured collection videos
  const [showText, setShowText] = useState(true);

  // Hide text after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  // Expanded data for Categories (6 items to make cards smaller in a 6-col grid)
  const categories = [
    { name: "SMARTPHONES", img: "https://www.triveniworld.com/cdn/shop/files/samsung-galaxy-s24-ultra-5g-ai-smartphone-titanium-violet-12gb-256gb-storage-triveni-world-6.jpg?v=1736304715&width=2200"},
    { name: "LAPTOPS", img: "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"},
    { name: "GAMING", img: "https://images.pexels.com/photos/6993182/pexels-photo-6993182.jpeg" },
    { name: "AUDIO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmk8v8C129syNyMYrzN06Ngko4QIvkurN0Ow&s" },
    { name: "MEN'S WEAR", img: "https://media.gq.com/photos/5583d7163655c24c6c96fd96/master/w_2048%2Cc_limit/copilot-style-fashion-201310-1382560692466_Evolution-of-Armani-Suit-Opener.jpg"},
    { name: "SNEAKERS", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600&h=800" }
  ];

  // Expanded data for New Arrivals
  const newArrivals = [
    { title: "iPhone 15 Pro Max", category: "Smartphones", price: "₹ 159,900", img: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg" },
    { title: "Classic Wool Varsity Jacket", category: "Premium Outerwear", price: "₹ 2,499", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaZ2sZ0yRveoCpzlId5qfuckai5U0cBR8Og&s" },
    { title: "Sony PlayStation 5", category: "Gaming", price: "₹ 54,990", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600&h=800" },
    { title: "Air Jordan 1 Retro", category: "Sneakers", price: "₹ 16,995", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600&h=800" },
    { title: "MacBook Air M4", category: "Laptops", price: "₹ 114,900", img: "https://www.connection.com/media/a2kpc304/2972371-apple-macbook-air-m4-l1-hero.png?b=1148114" },
    { title: "Sony WH-1000XM5", category: "Wireless Headphones", price: "₹ 29,990", img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600&h=800" }
  ];

  // Featured Collections Background Videos from local assets
  const featuredCollections = [
    { title: "Smart Watches", span: "col-span-1 md:col-span-2", video: WatchVideo },
    { title: "Camera Gear", span: "col-span-1 md:col-span-1", video: CameraVideo },
  ];

  // Exclusive Offers
  const discounts = [
    { title: "Summer Tech Clearance", discount: "Up to 40% OFF", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYdGogqq-RVBvG2x345yFpxQRvrlmQXpYQg&s", code: "TECH40" },
    { title: "Sneakerhead Special", discount: "Flat 20% OFF", img: "https://i.pinimg.com/736x/5b/97/f0/5b97f093081a5c14af72ba206877f14b.jpg", code: "KICKS20" },
    { title: "Luxury Watches", discount: "Save ₹ 5,000", img: "https://newspaperads.ads2publish.com/wp-content/uploads/2018/08/titan-watches-upto-40-off-ad-dainik-jagran-delhi-25-08-2018.jpg", code: "TIME5K" },
    { title: "Smart Home Upgrade", discount: "Buy 1 Get 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvmr8OJBNKOoCpKMK88xIjL4Ac9HjvpW2mw&s", code: "BOGO50" },
    { title: "Designer Eyewear", discount: "Flat 30% OFF", img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3f8a175e-66c2-439d-b279-f577d9c8f5b6.__CR0,0,970,600_PT0_SX970_V1___.jpg", code: "SHADES30" },
    { title: "Premium Audio Gear", discount: "Extra ₹ 1,500 OFF", img: "https://cdn.thewirecutter.com/wp-content/media/2025/10/BEST-RUNNING-HEADPHONES-0016-2x1-1.jpg?auto=webp&quality=75&width=1024", code: "JAMS15" }
  ];

  return (
    <div className="bg-white">
      {/* 1. Promotional Banner (AI Virtual Stores) - Reduced Height */}
      <section className="relative w-full mb-12 bg-slate-900 overflow-hidden">
        {/* Banner Background Video */}
        <div className="absolute inset-0">
          <video 
            src={BrandVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Banner Content - Reduced Padding */}
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24 flex flex-col items-center justify-center text-center">
          <div className="bg-[#FF4500] text-black font-extrabold px-3 py-1 rounded-[16px] text-xs md:text-sm tracking-widest mb-4 inline-block shadow-md">
            (WHOLE)² EXCLUSIVE
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white opacity-80 mb-4 tracking-tighter drop-shadow-lg">
            INTELLIGENT <br className="md:hidden" /> DIGITAL STORES
          </h1>
          <p className="text-gray-100 text-base md:text-xl max-w-2xl mb-8 drop-shadow-md font-medium">
            Experience the future of commerce. AI-driven virtual storefronts that adapt, personalize, and scale with your brand.
          </p>
          <div className="flex gap-4">
            <Link to="/about" className="bg-white text-slate-900 font-bold px-6 py-2.5 rounded-md hover:bg-gray-100 transition-colors uppercase tracking-wide text-xs md:text-sm shadow-xl">
              Discover AI Stores
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Categories Grid - More Items, Smaller Cards (6 cols) */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-widest mb-2">
          Trending Zone
        </h2>
        <p className="text-center text-gray-500 max-w-md mx-auto text-sm font-light tracking-wide mb-8">
          The hottest trends in the market right now, organized by category.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat, idx) => (
            <Link to="/shop" key={idx} className="group block text-center cursor-pointer">
              <div className="w-full aspect-[4/5] overflow-hidden mb-3 bg-gray-100 rounded-md shadow-sm">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-slate-700 font-bold tracking-wider text-xs md:text-sm">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. New Arrivals Grid - More Items, Smaller Cards (6 cols) */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-widest mb-2">
          New Arrivals
        </h2>
        <p className="text-center text-gray-500 max-w-md mx-auto text-sm font-light tracking-wide mb-8">
          The latest and greatest premium drops, freshly stocked in our global warehouse.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
          {newArrivals.map((item, idx) => (
            <Link to="/shop" key={idx} className="group block cursor-pointer">
              <div className="w-full aspect-[4/5] overflow-hidden mb-3 bg-gray-100 rounded-md shadow-sm relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-left px-1">
                <h3 className="text-slate-900 font-bold text-xs md:text-sm mb-0.5 truncate">{item.title}</h3>
                <p className="text-gray-500 text-[10px] md:text-xs mb-1.5 truncate">{item.category}</p>
                <p className="text-slate-800 font-extrabold text-xs md:text-sm">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Extra Content: Featured Collections (To add more content as requested) */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredCollections.map((col, idx) => (
            <Link to="/shop" key={idx} className={`group relative rounded-md overflow-hidden shadow-sm h-48 md:h-64 cursor-pointer bg-black ${col.span}`}>
              {/* Ensure video layer is above the black background but below text */}
              <div className="absolute inset-0 z-0">
                <video 
                  src={col.video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" 
                />
              </div>
              <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-30 transition-colors pointer-events-none z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <h3 className={`text-white text-2xl md:text-3xl font-black tracking-widest uppercase shadow-black drop-shadow-xl transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
                  {col.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Discounts & Offers */}
      <section className="container mx-auto px-4 mb-20 py-8">
        <h2 className="text-center text-xl md:text-2xl font-extrabold text-slate-800 uppercase tracking-widest mb-2">
          Exclusive Offers
        </h2>
        <p className="text-center text-gray-500 max-w-md mx-auto text-sm font-light tracking-wide mb-8">
          Limited time deals on premium products. Grab them before they're gone!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {discounts.map((offer, idx) => (
            <Link to="/shop" key={idx} className="group relative rounded-2xl overflow-hidden shadow-xl h-64 bg-gray-900 cursor-pointer transform transition-transform duration-500 hover:-translate-y-2">
              <img 
                src={offer.img} 
                alt={offer.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center z-10">
                <div className="bg-white text-[#FF4500] font-black px-4 py-1.5 rounded-md text-sm md:text-base mb-3 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  {offer.discount}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide drop-shadow-md">{offer.title}</h3>
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-y-0 translate-y-4">
                  <span className="text-gray-300 text-xs uppercase tracking-widest">Code:</span>
                  <span className="bg-black/50 border border-gray-400 border-dashed text-white px-3 py-1 rounded text-xs tracking-widest font-mono">
                    {offer.code}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Hero;




