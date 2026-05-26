import React from 'react';
import { Mail, Phone, MessageSquare, Shield, Truck, HelpCircle, LifeBuoy } from 'lucide-react';

const SupportPage = () => {
  const supportCategories = [
    {
      title: 'Order Support',
      description: 'Track your order, manage returns, or report an issue with a delivery.',
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      link: '#',
      items: ['Track Order', 'Start a Return', 'Damaged Items']
    },
    {
      title: 'Account & Security',
      description: 'Manage your profile, change passwords, and handle security settings.',
      icon: <Shield className="w-8 h-8 text-green-600" />,
      link: '#',
      items: ['Reset Password', 'Update Profile', 'Privacy Policy']
    },
    {
      title: 'Payments & Billing',
      description: 'Review your transactions, manage payment methods, and read about refunds.',
      icon: <HelpCircle className="w-8 h-8 text-purple-600" />,
      link: '#',
      items: ['Payment Methods', 'Refund Policy', 'Invoice Search']
    },
    {
      title: 'Partner Support',
      description: 'Specialized assistance for our global stores and brand partners.',
      icon: <LifeBuoy className="w-8 h-8 text-orange-600" />,
      link: '/seller-support',
      items: ['Seller Dashboard', 'Shipping Guidelines', 'Commission Structure']
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">How can we help?</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Our intelligent support engine is here to assist you 24/7. Find answers to common questions or connect with our team.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search help articles..." 
              className="w-full py-4 px-6 rounded-full bg-white text-slate-900 shadow-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportCategories.map((doc) => (
            <div key={doc.title} className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-slate-50/50">
              <div className="mb-6">{doc.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{doc.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{doc.description}</p>
              <ul className="space-y-2 mb-6">
                {doc.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Still need assistance?</h2>
            <p className="text-slate-600">Our dedicated support team is available via multiple channels.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
              <MessageSquare className="w-6 h-6 text-blue-600 mb-4" />
              <h4 className="font-bold mb-2">Live Chat</h4>
              <p className="text-xs text-slate-500 mb-4">Average response time: 2 mins</p>
              <button className="text-blue-600 font-semibold text-sm hover:underline">Start Chat</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
              <Mail className="w-6 h-6 text-blue-600 mb-4" />
              <h4 className="font-bold mb-2">Email Support</h4>
              <p className="text-xs text-slate-500 mb-4">Response within 24 hours</p>
              <a href="mailto:support@whole2.com" className="text-blue-600 font-semibold text-sm hover:underline">Contact Email</a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
              <Phone className="w-6 h-6 text-blue-600 mb-4" />
              <h4 className="font-bold mb-2">Phone</h4>
              <p className="text-xs text-slate-500 mb-4">Available 9am - 6pm EST</p>
              <span className="text-slate-900 font-semibold text-sm">+1 (800) WHOLE-2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
