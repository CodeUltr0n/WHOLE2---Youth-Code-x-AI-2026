import React, { useState, useRef, useEffect } from 'react';
import { Search, Mic, Camera, ArrowLeft, X, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AISearchWidget = ({ search, setSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localSearch, setLocalSearch] = useState(search);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Sync external search prop with local state when widget is closed
  useEffect(() => {
    if (!isExpanded) {
      setLocalSearch(search);
    }
  }, [search, isExpanded]);

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleOpen = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    // When closing, update the parent search state if they hit enter or we want to persist
    // For now, let's keep it in sync on close if needed, but usually search happens on 'Enter'
  };

  const handleClear = () => {
    setLocalSearch('');
    setSearch(''); // Also clear parent immediately
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(localSearch);
    setIsExpanded(false);
    // Assuming there's a search results page or we just filter locally
    // navigate(`/search?q=${encodeURIComponent(localSearch)}`);
  };

  return (
    <div className="relative z-[100]">
      {/* Collapsed State (Looks like a normal search bar) */}
      {!isExpanded && (
        <div 
          onClick={handleOpen}
          className="relative flex items-center w-72 h-10 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-text group"
        >
          <div className="absolute left-3 text-gray-400 group-hover:text-blue-500 transition-colors">
            <Search size={18} />
          </div>
          <div className="pl-10 pr-16 w-full text-sm text-gray-500 truncate select-none">
            {search || "Ask AI or search products..."}
          </div>
          <div className="absolute right-3 flex items-center space-x-2 text-gray-400">
            <Mic size={16} className="hover:text-blue-500 cursor-pointer transition-colors" />
            <Camera size={16} className="hover:text-blue-500 cursor-pointer transition-colors" />
          </div>
        </div>
      )}

      {/* Expanded Modal Overlay */}
      {isExpanded && (
        <>
          {/* Backdrop (invisible but handles clicking outside to close) */}
          <div 
            className="fixed inset-0 z-[90] bg-transparent"
            onClick={handleClose}
          />

          {/* Expanded Widget Container */}
          <div className="fixed top-0 left-0 right-0 md:absolute md:top-[-8px] md:left-auto md:right-0 md:w-[320px] bg-white md:rounded-2xl shadow-2xl z-[100] overflow-hidden flex flex-col min-h-[40vh] md:min-h-[280px] animate-in slide-in-from-top-4 fade-in duration-200">
            
            {/* Header / Search Area */}
            <div className="p-4 border-b border-gray-100 bg-white shadow-sm flex items-center space-x-3">
              <button 
                onClick={handleClose}
                className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              
              <form onSubmit={handleSubmit} className="flex-1 relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full text-base bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-300 transition-all text-gray-800 placeholder-gray-400"
                />
                
                <div className="absolute right-2 flex items-center space-x-1">
                  {localSearch && (
                    <button 
                      type="button"
                      onClick={handleClear}
                      className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  )}
                  <div className="h-4 w-px bg-gray-300 mx-1"></div>
                  <button type="button" className="p-1.5 text-gray-400 hover:text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                    <Mic size={18} />
                  </button>
                </div>
              </form>
            </div>

            {/* AI Suggestions / Content Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-white to-[#FDF8F5]">
              
              {/* AI 'Scanning' UI (only when typing) */}
              {localSearch.length > 0 ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 py-10">
                   <div className="relative w-20 h-20">
                     {/* Pulsing ring effect */}
                     <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping opacity-50"></div>
                     <div className="absolute inset-2 border-4 border-purple-300 rounded-full animate-pulse opacity-75"></div>
                     <div className="absolute inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <Sparkles className="text-white w-6 h-6 animate-pulse" />
                     </div>
                   </div>
                   <div className="text-center">
                     <p className="text-gray-800 font-medium text-lg">Looking across global brands...</p>
                     <p className="text-purple-600/80 font-medium text-sm animate-pulse m-1">just a moment...</p>
                   </div>
                   
                   <p className="text-xs text-gray-400 flex items-center mt-8">
                     <Sparkles size={12} className="mr-1 text-purple-400" /> powered by (WHOLE)² AI
                   </p>
                </div>
              ) : (
                /* Default View (Categories / Actions) */
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center uppercase tracking-wider">
                      <Sparkles size={14} className="mr-2 text-purple-600" />
                      Try asking AI
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["I just moved into a new flat", "Best noise canceling headphones under $300", "Summer vacation outfits", "Smart home starter kit"].map((suggestion) => (
                        <button 
                          key={suggestion}
                          onClick={() => setLocalSearch(suggestion)}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50 transition-colors shadow-sm text-left"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Photo Upload Prominent Box */}
                  <div className="mt-8 border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 group-hover:scale-110 transition-transform">
                      <Camera size={24} className="text-gray-500 group-hover:text-blue-600" />
                    </div>
                    <p className="text-gray-800 font-medium mb-1">Search by Photo</p>
                    <p className="text-xs text-gray-500 max-w-[200px]">Upload an image of a product and AI will find identical or similar items.</p>
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </>
      )}
    </div>
  );
};

export default AISearchWidget;
