import React from 'react';
import { Briefcase, BarChart3, Users, Zap, MessageSquare, BookOpen } from 'lucide-react';

const SellerSupportPage = () => {
  const sellerResources = [
    {
      title: 'Store Management',
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
      description: 'Learn how to list products, manage inventory, and optimize your store profile.'
    },
    {
      title: 'Analytics & Growth',
      icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
      description: 'Understand your sales data, customer behavior, and traffic patterns.'
    },
    {
      title: 'Sellers Community',
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      description: 'Connect with fellow sellers, share techniques, and find collaboration opportunities.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2 block">Seller Success</span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Empowering Our Partners</h1>
          <p className="text-slate-600 text-lg">Comprehensive resources and support to help your craft business thrive in the global digital marketplace.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sellerResources.map((resource) => (
            <div key={resource.title} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{resource.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{resource.description}</p>
              <a href="#" className="text-indigo-600 font-semibold text-sm hover:underline flex items-center">
                Explore Resource <Zap className="w-4 h-4 ml-1 fill-current" />
              </a>
            </div>
          ))}
        </div>

        {/* Feature Section */}
        <div className="bg-indigo-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-12 lg:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-6">New to selling on (WHOLE)²?</h2>
            <p className="text-indigo-100 mb-8 leading-relaxed">Join thousands of partners reaching a global audience. Our automated onboarding engine makes it easy to get started in minutes.</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-800 p-2 rounded-lg"><BookOpen className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold">Seller Handbook</h4>
                  <p className="text-sm text-indigo-200">The complete guide to mastering our platform.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-800 p-2 rounded-lg"><MessageSquare className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold">24/7 Seller Concierge</h4>
                  <p className="text-sm text-indigo-200">Priority support for all your business needs.</p>
                </div>
              </div>
            </div>
            <button className="mt-10 bg-white text-indigo-900 px-8 py-4 rounded-xl font-black uppercase tracking-wider hover:bg-indigo-50 transition-colors">
              Become a Partner
            </button>
          </div>
          <div className="lg:w-1/2 bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 flex items-center justify-center p-8 lg:p-16 min-h-[400px]">
             <img 
               src="/images/seller-dashboard-preview.png" 
               alt="Seller Dashboard Preview" 
               className="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transform hover:scale-105 transition-transform duration-700 ease-out"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerSupportPage;
