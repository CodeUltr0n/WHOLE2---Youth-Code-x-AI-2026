import React from 'react';
// 1. Import the new showcase card component.
import AIShowcaseCard from '../../components/ai-showcase-card';
import OurStoryVideo from '../../assets/videos/ArtVideo.mp4';
import BrandVideo from '../../assets/videos/Brand2.mp4';

// A reusable component for each team member card.
const TeamMemberCard = ({ name, role, imageUrl, description }) => (
  <div className="text-center bg-white p-6 rounded-lg shadow-lg w-72 flex-shrink-0">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-bold text-slate-800 mb-2">{name}</h3>
    <div className="mb-3">
      <span className="inline-block bg-[#FF4500]/25 text-slate-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#FF4500]/40 backdrop-blur-md shadow-sm">
        {role}
      </span>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const AboutPage = () => {
  const teamMembers = [
    { name: 'Ketan Chokkara', role: 'Full-Stack Developer & UI/UX Designer', imageUrl: './images/WhatsApp Image 2025-10-25 at 21.35.27 (1).jpeg', description: 'Architected and built the entire web application platform, ensuring a seamless, AI-powered e-commerce experience from front-end to back-end.' },
    { name: 'Sharveesh M', role: 'Cross-Platform App Developer (Flutter)', imageUrl: './images/App-dev.jpeg', description: 'Builds and maintains the cross-platform mobile application, leveraging Flutter to bring the (WHOLE)² marketplace natively to iOS and Android.' },
  ];

  // Data for our new AI showcase section.
  const aiFeatures = [
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1-1m-6 0h.01M16 16v-4m0 4h-4m-6 0h.01M4 16l4.586-4.586a2 2 0 012.828 0L16 16"/></svg>, title: 'Description Enhancement', description: 'Generates compelling, story-driven product descriptions to attract more buyers and improve SEO visibility.' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"/></svg>, title: 'Smart Pricing', description: 'Analyzes market trends and competitor pricing to suggest optimal, data-driven pricing for every craft.' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/></svg>, title: 'Marketing Strategy', description: 'Creates targeted social media campaigns, influencer collaborations, and promotions to boost a seller\'s reach.' },
    { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a2 2 0 012-2h4l2 3h6a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"/></svg>, title: 'Image Correction & Optimization', description: 'Automatically enhances product images, improving clarity, brightness, and overall appeal.' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white text-center py-14 overflow-hidden">
        
        {/* Background Video */}
        <video 
          src={BrandVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0 pointer-events-none" 
        />

        {/* Content Container (z-index ensures it sits above the video) */}
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-left pt-0 pb-1">
            
            {/* Left side: Huge Title */}
            <div className="w-full md:w-3/5">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1] text-white opacity-50 tracking-tighter drop-shadow-lg">
                Crafting<br />
                <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 opacity-80">Smart Stores</span><br />
                That Grow
              </h1>
            </div>

            {/* Right side: Badge and Text */}
            <div className="w-full md:w-2/5 flex flex-col items-start md:items-end shrink-0 pt-0">
              {/* Orange Pill Badge */}
              <div className="bg-[#FF4500] text-black font-extrabold px-5 py-1.5 opacity-70 rounded-[24px] text-base tracking-wider mb-4 shadow-lg shrink-0 w-fit">
                (WHOLE)²
              </div>

              {/* Text with Down/Left Arrow */}
              <div className="relative max-w-[320px] text-left">
                <svg className="hidden md:block w-8 h-8 text-white mb-4 ml-auto mr-18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 19L19 5M5 19h10M5 19V9" />
                </svg>
                <p className="text-gray-400 font-light text-base leading-relaxed">
                  We transform commerce —<br />
                  designing smart virtual stores for<br />
                  the next generation of business.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Our Story Section - with updated text */}
      <div className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* <div>
            <img src="/images/art.jpg" alt="Artisans at work" className="rounded-lg shadow-xl" />
          </div> */}
          <div className="w-full max-w-lg">
            <div className="h-80 rounded-lg overflow-hidden">
              <video src={OurStoryVideo} autoPlay muted loop className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Video credit: Art By Sehgal – used for demo purposes only.
            </p>
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Story of (WHOLE)²</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              (WHOLE)² was founded to redefine online selling and bring authentic Indian products to the global market. We replace static websites with intelligent, adaptive digital stores built for international growth.
            </p>
            {/* 2. This paragraph is now updated to explicitly mention Gen AI. */}
            <p className="text-gray-600 leading-relaxed">
             Built for Youth Code x AI 2026, our smart commerce engine uses Generative AI to turn virtual stores into active sales partners. It optimizes pricing and drives engagement for brands, while giving customers a hyper-personalized, tailored shopping experience.
            </p>
          </div>
        </div>
      </div>
      
      {/* 3. This is the new "Powered by Generative AI" section. */}
      <div className="bg-indigo-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Powered by Generative AI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">Our AI Growth Engine provides our sellers with actionable insights to grow their business.</p>
            <div className="flex space-x-8 overflow-x-auto max-w-5xl mx-auto px-2">
                {aiFeatures.map(feature => (
                    <div key={feature.title} className="flex-shrink-0 w-72 h-full">
                      <AIShowcaseCard {...feature} />
                    </div>
                ))}
            </div>
          </div>
      </div>

{/* App Support Screenshots Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 tracking-tight">Available Anywhere</h2>
          <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold px-5 py-1.5 rounded-full text-sm tracking-wider mb-10 shadow-lg animate-pulse">
            MOBILE APP COMING SOON
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {[ 
              { src: "/images/App2.png", alt: "App Screenshot 1", rotate: "-rotate-2" },
              { src: "/images/App1.png", alt: "App Screenshot 2", rotate: "rotate-0" },
              { src: "/images/App3.png", alt: "App Screenshot 3", rotate: "rotate-2" }
            ].map((img, index) => (
              <div key={index} className={`group relative ${img.rotate} hover:rotate-0 transition-transform duration-500`}>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.1rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-105">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-64 h-auto rounded-[2rem] border border-white/10" 
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* Team Name Display */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-[#FF4500] text-black font-extrabold px-6 py-2 rounded-full text-lg tracking-wider mb-4 shadow-md">
            (WHOLE)²
          </div>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto mb-4">
            <strong>Youth Code x AI 2026 — Open Track:</strong> Empowering the next generation of builders to solve real-world problems with AI-powered solutions.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="bg-white py-0.5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet the Team</h2>
          <div className="flex justify-center flex-wrap gap-8 max-w-4xl mx-auto px-2">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
