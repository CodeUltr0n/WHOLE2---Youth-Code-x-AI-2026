import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/useCart';
import ChatModal from './chatbot/chat';
import { MessageCircle, Send, X, Zap, User, ShoppingCart } from 'react-feather';

const products = [
  { id: '1', name: 'Blue Pottery Vase', description: 'A beautiful, hand-painted ceramic vase from Jaipur, known for its vibrant blue dye derived from cobalt oxide. A perfect centerpiece for any room.', price: 2500, stock: 15, imageUrl: '/images/Blue pottery.jpeg', region: 'North India', artisan: 'Ravi Kumar', storeName: 'Jaipur Blue Art', storeDescription: 'Authentic 19th-century Rajasthani pottery handcrafted by master artisans.', storeLogo: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=150&h=150&fit=crop', category: 'Pottery', regionTag: 'Rajasthan' },
  { id: '2', name: 'Bandhani Silk Dupatta', description: 'An elegant silk dupatta featuring the traditional tie-dye Bandhani art from Rajasthan. Made with pure silk and natural dyes.', price: 3200, stock: 8, imageUrl: '/images/Bandhani Silk Dupatta.jpeg', region: 'North India', artisan: 'Meena Sharma', storeName: 'Desert Silks Studio', storeDescription: 'Premium hand-dyed Bandhani and Leheriya textiles directly from the weavers of Gujarat and Rajasthan.', storeLogo: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=150&h=150&fit=crop', category: 'Textiles', regionTag: 'Rajasthan' },
  { id: '3', name: 'Chikankari Kurta', description: 'A timeless cotton kurta with delicate, hand-embroidered Chikankari work from Lucknow. Perfect for casual and formal occasions.', price: 2800, stock: 22, imageUrl: '/images/Chikankari Kurta.jpeg', region: 'North India', artisan: 'Fatima Khan', storeName: 'Nawab Weaves', storeDescription: 'Preserving the royal 400-year-old white-on-white embroidery arts of Awadh.', storeLogo: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=150&h=150&fit=crop', category: 'Apparel', regionTag: 'Uttar Pradesh' },
  { id: '4', name: 'Kutch Mirror Work Bag', description: 'A vibrant, handcrafted bag featuring the iconic Kutch embroidery and mirror work from Gujarat. A unique accessory that tells a story.', price: 1800, stock: 0, imageUrl: '/images/Kutch Mirror Work Bag.jpeg', region: 'West India', artisan: 'Kiran Patel', storeName: 'Rann Crafts', storeDescription: 'Colorful, mirror-studded tribal accessories made by indigenous women of the Kutch desert.', storeLogo: 'https://images.unsplash.com/photo-1605335171764-16a3cff9dbfa?w=150&h=150&fit=crop', category: 'Accessories', regionTag: 'Gujarat' },
  { id: '5', name: 'Warli Art Canvas', description: 'Traditional Warli art depicting rural life and nature using simple geometric patterns on canvas.', price: 4500, stock: 10, imageUrl: '/images/Warli Art Canvas.jpeg', region: 'West India', artisan: 'Suresh Kumar', storeName: 'Sahyadri Expressions', storeDescription: 'Ancient tribal finger-painting and canvas art telling stories of harmony with nature.', storeLogo: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=150&h=150&fit=crop', category: 'Art', regionTag: 'Maharashtra', craftTag: 'Warli Art' },
  { id: '6', name: 'Kantha Work Saree', description: 'A graceful saree adorned with intricate Kantha embroidery, showcasing folk motifs and storytelling stitches.', price: 6800, stock: 12, imageUrl: '/images/Kantha Work Saree.jpeg', region: 'East India', artisan: 'Priya Das', storeName: 'Bengal Threads', storeDescription: 'Reviving the ancient Eastern Indian art of storytelling through thousands of running stitches.', storeLogo: 'https://images.unsplash.com/photo-1604085461158-b63300072b0c?w=150&h=150&fit=crop', category: 'Apparel', regionTag: 'West Bengal', craftTag: 'Kantha' },
  { id: '7', name: 'Dokra Art Piece', description: 'Handcrafted Dokra metal art piece created using ancient lost-wax casting technique, reflecting tribal heritage.', price: 3500, stock: 5, imageUrl: '/images/Dokra Art Piece.jpeg', region: 'East India', artisan: 'Anil Mahto', storeName: 'Metal Age Collective', storeDescription: 'Non-ferrous metal casting art using the 4,000-year-old lost-wax technique.', storeLogo: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=150&h=150&fit=crop', category: 'Art', regionTag: 'West Bengal', craftTag: 'Dokra' },
  { id: '8', name: 'Kanjeevaram Silk', description: 'Luxurious Kanjeevaram silk saree woven with rich zari patterns, celebrated for its durability and sheen.', price: 22000, stock: 7, imageUrl: '/images/Kanjeevaram Silk.jpeg', region: 'South India', artisan: 'Lakshmi Murthy', storeName: 'Kanchipuram Heritage', storeDescription: 'Bridal and occasion pure mulberry silk sarees handwoven with pure silver and gold zari.', storeLogo: 'https://images.unsplash.com/photo-1583391733958-d15ce69c8a22?w=150&h=150&fit=crop', category: 'Apparel', regionTag: 'Tamil Nadu', craftTag: 'Kanjeevaram' },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart() || {};
  const [product, setProduct] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  useEffect(() => {
    // For future integration with MongoDB + Express API:
    /*
    fetch(`/api/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Failed to fetch product:', err));
    */

    // Currently using mock data:
    const selectedProduct = products.find(p => p.id === productId);
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <div className="text-center py-20">Loading product details...</div>;
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Column 1: Product Image */}
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Column 2: Product Details */}
          <div>
            <p className="text-sm font-semibold text-indigo-600 mb-2">{product.category}</p>
            <h1 className="text-4xl font-extrabold text-slate-800 mb-2">{product.name}</h1>

            {/* Seller with hover popover */}
            <SellerPopover 
              artisan={product.artisan} 
              productId={product.id} 
              storeName={product.storeName}
              storeDescription={product.storeDescription}
              storeLogo={product.storeLogo}
            />

            <p className="text-3xl font-bold text-gray-900 mb-6">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Sold Out'}
              </span>
              <span className="text-sm text-gray-500">State: {product.regionTag}</span>
            </div>

            <div className="space-y-3">
              <button
                disabled={product.stock === 0}
                onClick={() => {
                  navigate('/checkout', {
                    state: product
                  });
                }}
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Buy Now
              </button>
              <button
                disabled={product.stock === 0}
                onClick={() => addItem && addItem(product)}
                className="w-full bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Capsule Chat Button */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
        {/* Chat Modal */}
        {isChatOpen && (
          <ChatModal
            apiEndpoint="/api/ai/product-query"
            contextData={{ productId: product.id }}
            initialMessage="Hello! How can I help you learn more about this specific craft?"
            onClose={() => setIsChatOpen(false)}
          />
        )}

        {/* Capsule FAB with Horizontal Animation */}
        <div className="group relative">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`relative overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-blue-700 hover:from-slate-800 hover:via-slate-900 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl subtle-glow-hover transition-all duration-500 transform hover:scale-105 ${
              isChatOpen 
                ? 'w-12 h-12 chat-button-collapsed' 
                : 'w-auto chat-button-expanded'
            }`}
            style={{
              transitionProperty: 'all, width, transform, box-shadow',
              transitionDuration: '500ms',
              transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.320, 1)'
            }}
          >
            <div className={`flex items-center justify-center transition-all duration-500 ${
              isChatOpen 
                ? 'px-0 py-3' 
                : 'px-4 py-3 space-x-3'
            }`}>
              {!isChatOpen ? (
                <>
                  <MessageCircle size={18} className="flex-shrink-0" />
                  <span className="text-sm font-medium whitespace-nowrap opacity-100 transition-opacity duration-300">
                    Need help?
                  </span>
                </>
              ) : (
                <X size={18} className="transition-transform duration-300" />
              )}
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-slate-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Notification Dot */}
          {!isChatOpen && (
            <div className="absolute -top-1 -right-1">
              <div className="relative">
                <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
          )}

          {/* Tooltip */}
          {!isChatOpen && (
            <div className="absolute bottom-16 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 pointer-events-none">
              <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                Questions about this product?
                <div className="absolute -bottom-1 right-4 w-2 h-2 bg-slate-800 transform rotate-45"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
// SellerPopover component with dynamic popover positioning
const SellerPopover = ({ artisan, productId, storeName, storeDescription, storeLogo }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState('bottom'); // 'top' or 'bottom'
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

  // Calculate popover position dynamically
  useEffect(() => {
    if (showPopover && buttonRef.current && popoverRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      // Space below and above the button
      const spaceBelow = viewportHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;
      // If not enough space below but enough above, show above; else show below
      if (spaceBelow < popoverRect.height + 16 && spaceAbove > popoverRect.height + 16) {
        setPopoverPosition('top');
      } else {
        setPopoverPosition('bottom');
      }
    }
  }, [showPopover]);

  // Hide popover on scroll/resize if open
  useEffect(() => {
    if (!showPopover) return;
    const hide = () => setShowPopover(false);
    window.addEventListener('scroll', hide, true);
    window.addEventListener('resize', hide, true);
    return () => {
      window.removeEventListener('scroll', hide, true);
      window.removeEventListener('resize', hide, true);
    };
  }, [showPopover]);

  // Handlers for mouse events
  const handleMouseEnter = () => setShowPopover(true);
  const handleMouseLeave = () => setShowPopover(false);

  // Positioning classes
  const popoverBase =
    "absolute z-10 inline-block w-72 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xl dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600";
  const popoverVisible = showPopover ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none";
  const popoverOffset = popoverPosition === "top" ? "bottom-8" : "top-6";

  return (
    <div className="mb-4 relative" onMouseLeave={handleMouseLeave}>
      <button
        ref={buttonRef}
        type="button"
        className="font-bold text-lg text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
        onMouseEnter={handleMouseEnter}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        aria-describedby={`popover-${productId}`}
      >
        by {artisan}
      </button>
      <div
        id={`popover-${productId}`}
        ref={popoverRef}
        role="tooltip"
        className={`${popoverBase} ${popoverVisible} ${popoverOffset}`}
        style={{ left: 0 }}
        onMouseEnter={handleMouseEnter}
        // onMouseLeave handled on wrapping div for better UX
      >
        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <a href="#">
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-100 object-cover"
                src={storeLogo || 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=150&h=150&fit=crop'}
                alt={storeName || 'Partner Store'}
              />
            </a>
            <div>
              <button
                type="button"
                className="text-white bg-slate-800 hover:bg-[#FF4500] focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-[11px] px-2.5 py-1.5 transition-colors"
              >
                Follow Store
              </button>
            </div>
          </div>
          <p className="text-base font-bold leading-none text-gray-900 dark:text-white mb-3">
            <a href="#">{storeName || 'Global Partner Store'}</a>
          </p>
          <div className="mb-4 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 italic">
              "{storeDescription || 'Premium handcrafted items from our global AI catalog.'}"
            </p>
          </div>
          <p className="mb-4 text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider">
            AI-curated selections powered by our intelligent catalog engine.
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">799</span>{' '}
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>{' '}
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
};