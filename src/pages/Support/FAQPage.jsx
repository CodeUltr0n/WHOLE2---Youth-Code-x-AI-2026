import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you will receive an email with a tracking number and a link to the carrier's website. You can also track your order directly from your Customer Dashboard under 'Order History'."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 14-day return policy for most items. The product must be in its original condition and packaging. Please visit our Shipping & Returns page for detailed instructions on how to start a return."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and will be calculated at checkout."
    },
    {
      question: "How can I contact a seller directly?",
      answer: "You can contact a seller through the 'Message Seller' button on any product detail page. Alternatively, you can find a contact link in the seller's store profile."
    },
    {
      question: "What is (WHOLE)²?",
      answer: "(WHOLE)² is an AI-powered virtual mall where intelligent AI stores provide a highly personalized shopping experience. Unlike traditional marketplaces, our platform uses autonomous AI agents to curate products and manage store interactions for maximum efficiency."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay/Google Pay for a seamless checkout experience."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600">Quick answers to questions you may have. Still need help? Contact our support team.</p>
        </div>

        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search FAQs..." 
            className="w-full py-4 pl-12 pr-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No results found for "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/30">
      <button 
        className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-900">{faq.question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FAQPage;
