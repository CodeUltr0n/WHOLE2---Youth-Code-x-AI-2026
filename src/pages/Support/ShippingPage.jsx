import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Globe } from 'lucide-react';

const ShippingPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-4">Shipping & Returns</h1>
        
        {/* Shipping Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Shipping Policy</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>We work with global logistics partners to ensure your handmade treasures reach you safely and as quickly as possible.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Standard Shipping</h4>
                <p className="text-sm">Delivery within 5-10 business days. Free on orders over ₹5,000.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Express Shipping</h4>
                <p className="text-sm">Delivery within 2-4 business days. Available for selected regions.</p>
              </div>
            </div>
            <p><strong>International Shipping:</strong> We offer worldwide shipping. Customs duties and taxes may apply depending on your country's regulations and are the responsibility of the customer.</p>
          </div>
        </section>

        {/* Returns Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <RotateCcw className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-slate-900">Returns & Refunds</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>If you're not completely satisfied with your purchase, we're here to help. Our goal is 100% satisfaction with every artisan piece we sell.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Returns are accepted within <strong>14 days</strong> of delivery.</li>
              <li>Items must be unused, in their original packaging, and with all tags attached.</li>
              <li>Handmade items may have slight variations; these are characteristics of the craft and not considered defects.</li>
              <li>Refunds will be processed to your original payment method within 7-10 business days of receiving the return.</li>
            </ul>
            <div className="mt-8">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                Start a Return Process
              </button>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Quality Commitment</h3>
            <p className="text-slate-600 text-sm">Every piece is inspected by our quality assurance team before shipping. If your item arrives damaged, please contact us within 48 hours for an immediate replacement or refund.</p>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="w-12 h-12 text-blue-600 opacity-50" />
            <Globe className="w-12 h-12 text-blue-600 opacity-50" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingPage;
