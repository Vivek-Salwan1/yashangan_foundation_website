import React from 'react';
import { 
  Users, BookOpen, Heart, Leaf, Sparkles, Shield, Star, 
  ArrowRight, Brain, CheckCircle2, ChevronRight, Menu 
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <div className="flex justify-between items-center py-2.5">
          <div className="flex items-center gap-3">
            <img src="/logopng.png" alt="Yashangan Foundation" className="h-10 md:h-12 w-auto object-contain drop-shadow-sm" />
            <span className="font-bold text-lg text-blue-900 tracking-tight">
              Yashangan Foundation
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">About us</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">What we do</a>
            <a href="#programs" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Programs</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Contact us</a>
            <button className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all shadow-sm">
              <Heart size={14} className="fill-current" />
              Donate Now
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-blue-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50/50">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200/60 text-orange-700 text-xs font-bold tracking-wide uppercase">
              <Star size={12} className="text-orange-600" />
              Where Children's Dreams Get Wings
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-blue-950 leading-[1.1] tracking-tight">
              Shape Your Child's Future with the <span className="text-orange-600">Power of Science!</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-lg">
              In today's competitive world, we focus on the intellectual, mental, and social development of students. Unlock your child's hidden talents with our DMIT assessment and specialized workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="group flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-blue-900/20">
                Register Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-900 border border-slate-200 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-orange-50 rounded-2xl blur-2xl opacity-60 -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 aspect-video lg:aspect-[4/3] flex items-center justify-center">
               <img 
                 src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000" 
                 alt="Educational environment" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-white p-3 md:p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-orange-100/80 p-2 rounded-lg">
                <Brain className="text-orange-600" size={20} />
              </div>
              <div className="pr-2">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Analysis</p>
                <p className="text-sm font-extrabold text-blue-950 leading-tight">DMIT Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-5 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-4 tracking-tight">About Us</h2>
        <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed mb-10 max-w-2xl mx-auto">
          Yashangan Foundation is a social and educational organization dedicated to identifying each person's natural potential and guiding them in the right direction. We balance modern technology with traditional values to foster intellectual, mental, and spiritual growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 text-left">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-slate-200 transition-colors">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Shield className="text-blue-700" size={16} />
              </div>
              <h3 className="text-[15px] font-bold text-blue-950">Our Vision</h3>
            </div>
            <p className="text-[13px] leading-relaxed text-slate-600">Guiding individuals to become self-reliant and successful through lifelong skills.</p>
          </div>
          <div className="bg-orange-50/50 rounded-xl p-5 border border-orange-100 hover:border-orange-200 transition-colors">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                <Star className="text-orange-700" size={16} />
              </div>
              <h3 className="text-[15px] font-bold text-blue-950">Our Mission</h3>
            </div>
            <p className="text-[13px] leading-relaxed text-slate-600">Providing right educational guidance, boosting confidence, and spreading value-based education.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Social Awareness", desc: "Health, education, and social responsibility campaigns.", icon: Users },
    { title: "Educational Guidance", desc: "Career selection based on abilities and time management.", icon: BookOpen },
    { title: "Value-Based Education", desc: "Developing honesty, discipline, and respect.", icon: Heart },
    { title: "Yoga & Meditation", desc: "Increasing peace of mind and mental stability.", icon: Sparkles },
    { title: "Women Empowerment", desc: "Skill development to make women self-reliant.", icon: Shield },
    { title: "Environment", desc: "Tree plantation and cleanliness drives.", icon: Leaf },
    { title: "Personality Development", desc: "Building self-confidence and leadership skills.", icon: Star },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-2 tracking-tight">What We Do</h2>
          <p className="text-sm text-slate-500">Holistic programs designed for complete societal and educational progress.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-4 md:p-5 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center mb-3 transition-colors">
                <service.icon className="text-slate-600 group-hover:text-blue-600" size={20} />
              </div>
              <h3 className="font-extrabold text-blue-950 text-sm mb-1.5">{service.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="programs" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-2 tracking-tight">Why Choose Us?</h2>
              <p className="text-[13px] md:text-sm text-slate-600 max-w-sm leading-relaxed">A perfect balance of modern technology, personal guidance, and strong values.</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-green-100/60 p-1 rounded-full"><CheckCircle2 className="text-green-600" size={16} /></div>
                <h4 className="text-sm font-bold text-blue-950">Expert-Led Guidance</h4>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100/60 p-1 rounded-full"><CheckCircle2 className="text-green-600" size={16} /></div>
                <h4 className="text-sm font-bold text-blue-950">Technology-Driven Approach (DMIT)</h4>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100/60 p-1 rounded-full"><CheckCircle2 className="text-green-600" size={16} /></div>
                <h4 className="text-sm font-bold text-blue-950">Personalized Attention</h4>
              </div>
            </div>
          </div>

          <div className="bg-orange-50/70 rounded-2xl p-5 md:p-6 border border-orange-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-2xl -mr-10 -mt-10 opacity-50 pointer-events-none"></div>
            <div className="flex items-start md:items-center gap-3 mb-5 relative z-10">
              <div className="bg-orange-500 p-2 rounded-lg text-white shadow-sm shrink-0">
                <Sparkles size={18} />
              </div>
              <h3 className="text-base md:text-lg font-extrabold text-orange-950 leading-tight">Special Summer Personality Development Workshop</h3>
            </div>
            
            <ul className="space-y-2.5 relative z-10">
              {['Concentration Building', 'Stage Courage', 'Good Handwriting', 'Speed Memory'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 bg-white/80 px-3 py-2 rounded-md border border-orange-200/40">
                  <CheckCircle2 size={14} className="text-orange-500 shrink-0" />
                  <span className="text-[13px] font-bold text-orange-950/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Directors = () => {
  const leaders = [
    { name: "Deepak Kisan Mane", role: "Director" },
    { name: "Rajendra Kisan Dalvi", role: "Director" },
    { name: "Nanaso Shivaji Mohite", role: "Director" },
    { name: "Komal Dada Gaikwad", role: "Treasurer" },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <div className="text-center mb-8 gap-2 flex flex-col items-center">
          <h2 className="text-2xl font-extrabold text-blue-950 tracking-tight">Our Leadership</h2>
          <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <span className="text-blue-900 font-bold text-sm tracking-tighter">{leader.name.split(' ').map(n=>n[0]).join('')}</span>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-sm font-extrabold text-blue-950 truncate">{leader.name}</h3>
                <p className="text-[11px] text-orange-600 font-bold uppercase tracking-wider mt-0.5">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-950 text-slate-300 py-10 md:py-12 border-t border-blue-900">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
             <div className="flex items-center gap-2.5">
                <img src="/logopng.png" alt="Yashangan Foundation" className="h-8 w-auto invert brightness-0 opacity-90" />
                <span className="font-bold text-base text-white tracking-tight">
                  Yashangan Foundation
                </span>
              </div>
              <p className="text-[13px] font-medium text-orange-400">Where Children's Dreams Get Wings</p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Contact Details</h4>
            <ul className="space-y-2 text-[13px]">
              <li className="flex items-start gap-2 max-w-xs">
                <span className="mt-0.5 opacity-80">📍</span>
                <span className="leading-snug">Siddhvinayak Heritage, Behind Go Gas Pump, Near Bombay Restaurant, Satara.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="opacity-80">📞</span>
                <a href="tel:+919673937125" className="font-semibold text-white hover:text-orange-400 transition-colors">+91 9673937125</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-1.5 text-[13px] font-medium">
              {['About us', 'What we do', 'Summer Workshop', 'DMIT Assessment'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-orange-400 transition-colors flex items-center gap-1.5 group w-fit">
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform opacity-70" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-5 border-t border-blue-900/40 flex flex-col flex-col-reverse md:flex-row items-center justify-between gap-3 text-[11px] font-medium text-slate-500">
          <p>© 2026 Yashangan Foundation. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Features />
      <Directors />
      <Footer />
    </div>
  )
}

export default App
