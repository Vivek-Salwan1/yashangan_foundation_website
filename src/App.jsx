import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users, BookOpen, Heart, Leaf, Sparkles, Shield, Star, ArrowRight, Brain, CheckCircle2, ChevronRight, ChevronLeft, Menu, HeartHandshake, Lightbulb, MapPin, Plus, } from 'lucide-react';
import AboutPage from './pages/aboutPage';
import ProgramsPage from './pages/programsPage';
import './css/landingPage.css';
import './css/WhyChooseUs.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds as requested
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes customPulse {
          0%, 100% { transform: scale(1); opacity: 1; filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.4)); }
          50% { transform: scale(1.05); opacity: 0.85; filter: drop-shadow(0 0 25px rgba(249, 115, 22, 0.8)); }
        }
        @keyframes customLine {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
      <div
        className={`fixed inset-0 z-[100] bg-slate-50 flex items-center justify-center transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="relative flex flex-col items-center justify-center">
          {/* Subtle background glow mimicking saffron */}
          <div className="absolute w-40 h-40 bg-orange-100/60 rounded-full blur-2xl animate-pulse"></div>

          {/* Main Logo with custom sophisticated pulse */}
          <img
            src="/logopng.png"
            alt="Yashangan Foundation Preloader"
            className="relative z-10 h-24 md:h-28 w-auto object-contain"
            style={{ animation: 'customPulse 2s ease-in-out infinite' }}
          />

          {/* Elegant minimalist loading line below logo */}
          <div className="mt-10 w-40 h-[2px] bg-slate-200 overflow-hidden relative rounded-full">
            <div
              className="absolute top-0 h-full bg-gradient-to-r from-blue-950 via-orange-500 to-blue-950 rounded-full"
              style={{ animation: 'customLine 2s ease-in-out infinite' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Left Side: Logo & Branding */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity shrink-0">
            <img src="/logopng.png" alt="Yashangan Foundation" className="h-6 md:h-10 w-auto object-contain" />
            <span className="font-bold text-xs min-[400px]:text-base md:text-xl text-blue-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] min-[380px]:max-w-[180px] sm:max-w-none">
              Yashangan Foundation
            </span>
          </Link>

          {/* Right Side: Navigation & Actions */}
          <div className="flex items-center gap-1 min-[400px]:gap-2 md:gap-5">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-5">
              <Link to="/about" className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">About us</Link>
              <a href="#services" className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">What we do</a>
              <Link to="/programs" className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">Programs</Link>
              <a href="#contact" className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors">Contact us</a>
            </div>

            {/* Donate Button (Always Visible) */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm flex items-center justify-center transition-all duration-300 shadow-lg px-3 py-1.5 text-[9px] sm:text-[10px] md:px-6 md:py-2 md:text-sm whitespace-nowrap">
              <Heart size={14} className="mr-2 hidden sm:inline fill-current" />
              Donate Now
            </button>

            {/* Hamburger Icon (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block md:hidden text-blue-900 p-1.5 focus:outline-none hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-2xl border-t border-slate-100 flex flex-col p-6 gap-4 md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300">
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif font-semibold text-blue-900 text-lg py-2 border-b border-slate-50"
            >
              About Us
            </Link>
            <Link
              to="/programs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif font-semibold text-blue-900 text-lg py-2 border-b border-slate-50"
            >
              Our Programs
            </Link>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif font-semibold text-blue-900 text-lg py-2 border-b border-slate-50"
            >
              What We Do
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif font-semibold text-blue-900 text-lg py-2"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

const heroSlides = [
  {
    Headline: "Social Awareness & Social Service Programs",
    Description: "A number of awareness campaigns, social activities, and social services are conducted to effectuate a positive transformation in society. It tries to raise awareness about health, education, cleanliness, and social responsibilities.",
    Image: "/hero-images/social-awareness.png"
  },
  {
    Headline: "Academic Counseling",
    Description: "It focuses on developing good qualities like honesty, discipline, reverence, and social values among the students so that they become ideal citizens.",
    Image: "/hero-images/educational-guidance.jpg"
  },
  {
    Headline: "Value-Based Education",
    Description: "It focuses on developing good qualities like honesty, discipline, reverence, and social values among the students so that they become ideal citizens.",
    Image: "/hero-images/value-based-education.png"
  },
  {
    Headline: "Yoga, Meditation & Spiritual Awakening",
    Description: "Yoga and meditation classes are organized to develop a peaceful mind, concentration ability, and mental balance. This reduces stress levels in an individual and instills a positive attitude towards life.",
    Image: "/hero-images/yog.jpg"
  },
  {
    Headline: "Empowerment of Women",
    Description: "Several programs are organized for developing skills and empowering women to become self-reliant. This helps them become economically and socially empowered.",
    Image: "/hero-images/woman-empowerment.jpg"
  },
  {
    Headline: "Environmental & Sanitation Campaigns",
    Description: "Campaigns have been organized for emphasizing the significance of environmental and sanitation awareness. Emphasis is given to plantation, cleanliness, and environmental protection.",
    Image: "/hero-images/environment.jpg"
  },
  {
    Headline: "Personal Development",
    Description: "Personal counseling is done for the overall development of one’s personality. It develops self-confidence, effective communication skills, and leadership abilities.",
    Image: "/hero-images/personality-development.jpg"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in pixels) to trigger slide change
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd on start
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="home" 
      className="hero-section relative w-full h-[600px] md:h-[800px] lg:h-screen min-h-[600px] overflow-hidden bg-slate-900 group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Images with smooth cross-fade */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none z-0'
            }`}
          style={{ zIndex: index === currentSlide ? 10 : 0 }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transform scale(105) transition-transform duration-[10000ms] ease-out"
            style={{
              backgroundImage: `url(${slide.Image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
            }}
          ></div>

          {/* Soft, navy blue transparent gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-transparent"></div>

          {/* Content Overlay */}
          <div className="hero-content absolute inset-0 max-w-6xl mx-auto px-4 md:px-5 lg:px-8 flex items-center">
            <div className="w-full md:w-3/5 lg:w-[45%] text-left space-y-4 md:space-y-6 pt-16 md:pt-0">
              <h1 className="hero-title text-3xl md:text-5xl lg:text-5xl font-sans font-bold text-yellow-400 leading-tight tracking-tight drop-shadow-md">
                {slide.Headline}
              </h1>
              <p className="hero-desc text-base md:text-lg text-white font-medium leading-relaxed drop-shadow max-w-xl">
                {slide.Description}
              </p>
              <div className="pt-1">
                <a href="#about" className="hero-btn inline-block text-white text-3xl md:text-4xl hover:text-orange-400 transition-colors tracking-wide drop-shadow-md" style={{ fontFamily: "'Caveat', cursive" }}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Controls - Side Arrows (visible on hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all opacity-0 md:group-hover:opacity-100 z-20 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all opacity-0 md:group-hover:opacity-100 z-20 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Controls - Dots */}
      <div className="hero-dots absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-dot h-2 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'hero-dot active bg-yellow-400 w-8'
              : 'bg-white/50 hover:bg-white/90 w-2'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-slate-50/50 overflow-hidden" style={{ fontFamily: "'Noto Serif', serif" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Mobile-only heading: visible only on small screens, placed above the image */}
        <span className="lg:hidden text-center text-blue-950 text-2xl font-bold tracking-[0.2em] uppercase mb-8 block">
          ABOUT US
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Visual Layer */}
          <div className="relative">
            {/* Decorative elements for editorial feel */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-blue-50 rounded-[2rem] rotate-3 z-0"></div>

            {/* Main Image Container */}
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
                alt="Students studying and growing together"
                className="w-full h-[400px] md:h-[550px] object-cover hover:scale(105) transition-transform duration-700"
              />
            </div>

            {/* Floating badge for human touch */}
          </div>

          {/* Right Column: Content Layer */}
          <div className="flex flex-col justify-center">
            {/* Desktop-only heading: hidden on mobile, visible on lg screens and above */}
            <span className="hidden lg:block text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">
              ABOUT YASHANGAN FOUNDATION
            </span>

            <div className="space-y-6">
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Yashangan Foundation is a socio-educational organization that seeks to create a complete growth of the students and the people in society. The main aim is to discover the innate qualities in everyone and direct them in the right direction.
              </p>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4">
                In the contemporary era of competition and speed, guidance, stability, and confidence play an important role. Knowing this essential aspect, Yashangan Foundation takes numerous actions in order to guide the students in their studies, personality building, value education, and career planning. We ensure a balance between modernity and tradition by focusing on the intellectual, psychological, social, and spiritual aspects of our students' lives.
              </p>
            </div>

            {/* Subtle Signature/Trust Element */}
            <div className="mt-12 pt-8  flex items-center gap-5">
              <div className="w-14 h-14 flex items-center justify-center">
                <img width="45" height="45" src="https://img.icons8.com/ios/50/trust--v1.png" alt="trust--v1" className="opacity-90" />
              </div>
              <div>
                <p className="text-blue-900 font-bold italic text-2xl font-serif leading-none">
                  Better Future, Together.
                </p>
                <p className="text-slate-400 text-sm font-medium mt-1">
                  Established with a vision for social excellence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  );
};

const Mission = () => {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center border-t border-slate-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/mission.png)' }}
      ></div>

      {/* Soft Overlay for text readability - Reduced opacity to increase background visibility */}
      <div className="absolute inset-0 bg-white/20 md:bg-white/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-yellow-50/10 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-5 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-950 mb-6 md:mb-8 tracking-tight drop-shadow-sm">
          Our Mission
        </h2>
        <div className="space-y-4">
          <p className="text-base font-semibold md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-[1.8] text-slate-800 font-medium max-w-4xl mx-auto">
            Provide proper guidance regarding studies and careers for the students.
            Development of the personality of the students along with increasing self-confidence.
          </p>
          <p className="text-base font-semibold md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-[1.8] text-slate-800 font-medium max-w-4xl mx-auto">
            Conducting value education along with moral upbringing. Social awareness campaigns along with community service activities. Empowerment of women along with skill development among them.
          </p>
        </div>
      </div>
    </section>
  );
};

const Approach360 = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-slate-100">
      {/* Subtle watermark patterns integrated from the logo vibe */}
      <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none transform rotate-12 scale-150">
        <Leaf size={200} className="text-green-800" />
      </div>
      <div className="absolute -bottom-10 left-0 opacity-[0.03] pointer-events-none transform -rotate-12 scale-150">
        <Star size={200} className="text-blue-900" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8 relative z-10">
        {/* Mobile Heading: Visible only on small screens, placed above images */}
        <h2 className="lg:hidden text-blue-900 tracking-tight text-2xl font-bold mb-10 leading-tight text-center">
          Our 360-Degree Approach to Combat CSA
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual Column (Left): Staggered Overlapping Stack */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Subtle Green Nature glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-green-50/60 rounded-full blur-[60px] z-0"></div>

            <div className="absolute top-4 sm:top-8 left-0 sm:left-4 w-[55%] h-[50%] z-10">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600"
                alt="Education Support"
                className="w-full h-full object-cover rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-500"
              />
            </div>

            <div className="absolute bottom-4 sm:bottom-12 left-1/4 w-[50%] h-[45%] z-30">
              <img
                src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=600"
                alt="Community Care"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white transform hover:-translate-y-2 transition-transform duration-500"
              />
            </div>

            <div className="absolute top-1/4 right-0 w-[55%] h-[60%] z-20">
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600"
                alt="Holistic Approach"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white transform hover:-translate-y-2 transition-transform duration-500"
              />
            </div>

            {/* Floating leaf accent */}
            <div className="absolute top-12 right-12 z-40 bg-white p-3 rounded-full shadow-lg text-green-500 animate-bounce" style={{ animationDuration: '3s' }}>
              <Leaf size={24} />
            </div>
          </div>

          {/* Content Column (Right): Unboxed High-Density List */}
          <div className="relative z-10">
            {/* Desktop Heading: Hidden on mobile, visible on lg screens */}
            <h2 className="hidden lg:block text-blue-900 tracking-tight text-3xl font-bold mb-8 leading-tight">
              Our 360-Degree Approach to Combat CSA
            </h2>

            <div className="space-y-6">
              {/* Point 1: Knowledge & Prevention Work */}
              <div className="group bg-transparent">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-900 transition-colors duration-300">
                    <img width="100" height="100" src="https://img.icons8.com/bubbles/100/knowledge-transfer.png" alt="knowledge-transfer" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">Knowledge & Prevention Work</h3>
                    <p className="text-slate-700 text-sm leading-relaxed max-w-lg">
                      Educates children, parents, teachers, and other staff in schools. Provides specialized training to law enforcement. Ensures a POCSO child-centric approach in handling sensitive situations effectively.
                    </p>
                  </div>
                </div>
              </div>

              {/* Line Separator */}
              <div className="w-12 h-[1px] bg-slate-200 ml-12"></div>

              {/* Point 2: Survivor & Family Support */}
              <div className="group bg-transparent">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-900 transition-colors duration-300">
                    <img width="100" height="100" src="https://img.icons8.com/bubbles/100/family.png" alt="family" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-sans">Survivor & Family Support</h3>
                    <p className="text-slate-700 text-sm leading-relaxed max-w-lg">
                      Social workers provide assistance in filing FIRs, and physical/emotional support when children appear for police/court statements. We help access Govt. compensation and offer long-term support by connecting relevant NGOs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const InteractiveWorkshopVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 group">
      {/* Decorative Backdrop */}
      <div className="absolute -inset-4 bg-orange-100/50 rounded-[3rem] transform -rotate-6 transition-transform duration-500 group-hover:rotate-0 z-0"></div>

      {/* Main Image Container */}
      <div className="relative w-full h-full z-10 overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
        <img
          src="/workshop.jpg"
          alt="Confident Indian student"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Interactive Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

        {/* Ghost Button */}
        <button className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-semibold text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 border border-white/30 backdrop-blur-md px-6 py-2 rounded-full hover:bg-white hover:text-blue-900">
          View Workshop Details →
        </button>
      </div>

      {/* Interactive Floating Badge */}
      <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-4 transition-transform duration-500 group-hover:scale-105">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
        </div>
        <div style={{ fontFamily: "'Noto Serif', serif" }}>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider leading-none mb-1">Next Batch</p>
          <p className="text-sm text-blue-900 font-bold leading-none">Filling Fast!</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="why-choose-us" className="features-section relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Watermarks */}
      <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none transform rotate-12 scale-150">
        <Leaf size={300} className="text-blue-900" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-[0.02] pointer-events-none transform -rotate-12 scale-150">
        <Star size={250} className="text-blue-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: The Philosophy & Spotlight */}
          <div className="flex flex-col">
            <span className="features-eyebrow text-orange-500 text-3xl font-[Caveat] mb-4 block">
              The Yashangan Difference
            </span>

            <h2 className="features-title text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight leading-tight">
              Why Choose Us?
            </h2>

            <p className="features-desc text-slate-600 text-[15px] leading-relaxed mb-10 max-w-lg">
              We don't just provide guidance; we create a foundation for lifelong success. Our approach perfectly balances modern scientific technology with deep, personal mentoring and traditional values.
            </p>

            {/* The Spotlight (Summer Workshop Integration) - Editorial Refactoring */}
            <div className="workshop-container mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-start gap-8 lg:gap-12 group">
              <div className="w-full md:w-2/5 shrink-0">
                <InteractiveWorkshopVisual />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="workshop-title text-2xl font-bold text-blue-600 mb-3">
                    Special Summer Personality Workshop
                  </h3>
                  <p className="workshop-desc text-slate-500 text-sm leading-relaxed max-w-md">
                    An intensive, activity-based program designed to transform young minds through scientific personality assessment and skill-building.
                  </p>
                </div>

                <div className="workshop-items-grid grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Concentration Building",
                    "Stage Courage & Confidence",
                    "Beautiful Handwriting",
                    "Speed Memory"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-black shrink-0">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="workshop-item-text text-slate-700 text-sm font-semibold tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Floating Pillars */}
          <div className="pillars-container flex flex-col gap-12 lg:gap-16 pt-8 lg:pt-0">

            {/* Pillar 1 */}
            <div className="pillar-card flex items-start gap-6 group hover:shadow-lg hover:shadow-slate-100/50 p-6 rounded-2xl transition-all duration-500">
              <div className="pillar-icon-wrapper shrink-0 p-3 bg-blue-50 rounded-xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                <img width="100" height="100" src="https://img.icons8.com/bubbles/100/training.png" alt="training" />
              </div>
              <div>
                <h3 className="pillar-title text-lg font-bold text-black mb-2">Expert-Led Mentoring</h3>
                <p className="pillar-desc text-slate-600 text-[15px] leading-relaxed">
                  Our team consists of highly experienced experts in education, personality development, and social work who deeply analyze each student's potential.
                </p>
              </div>
            </div>

            {/* Pillar 2 - Pushed Right (Asymmetrical) */}
            <div className="pillar-card flex items-start gap-6 group lg:ml-12 hover:shadow-lg hover:shadow-slate-100/50 p-6 rounded-2xl transition-all duration-500">
              <div className="pillar-icon-wrapper shrink-0 p-3 bg-blue-50 rounded-xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                <img width="100" height="100" src="https://img.icons8.com/clouds/100/technology.png" alt="technology" />
              </div>
              <div>
                <h3 className="pillar-title text-lg font-bold text-black mb-2">Technology-Driven (DMIT)</h3>
                <p className="pillar-desc text-slate-600 text-[15px] leading-relaxed">
                  We utilize advanced Dermatoglyphics Multiple Intelligence Testing to scientifically analyze natural intelligence and accurately guide career choices.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card flex items-start gap-6 group hover:shadow-lg hover:shadow-slate-100/50 p-6 rounded-2xl transition-all duration-500">
              <div className="pillar-icon-wrapper shrink-0 p-3 bg-blue-50 rounded-xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                <img width="80" height="80" src="https://img.icons8.com/officel/80/person-male.png" alt="person-male" />
              </div>
              <div>
                <h3 className="pillar-title text-lg font-bold text-black mb-2">Personalized Attention</h3>
                <p className="pillar-desc text-slate-600 text-[15px] leading-relaxed">
                  Every student is unique. We identify specific strengths and weaknesses to craft a customized training and development roadmap just for them.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

const Support = () => {
  return (
    <section id="donate" className="relative w-full overflow-hidden min-h-[300px] flex items-center" style={{ fontFamily: "'Noto Serif', serif" }}>
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070')" }}
      >
        {/* Deep Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/30 z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 lg:py-16 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: The Emotional Hook */}
          <div className="text-left space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-white tracking-[0.25em] text-xs md:text-sm font-bold uppercase">
                MAKE A DIFFERENCE TODAY
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-[1.2] tracking-tight max-w-xl">
              Help us give wings to a child's dreams through proper education and guidance.
            </h2>

            <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-lg">
              Yashangan Foundation works to discover the hidden potential in every student. Your support provides them with the right direction, confidence, and value-based education to succeed in life.
            </p>
          </div>

          {/* Right Column: Action Box (Floating Overlapping Card) */}
          <div className="relative">
            {/* The Container - Sharp edges, zero rounded corners as per premium editorial ref */}
            <div className="bg-white p-10 lg:p-16 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-none relative z-10 transition-all duration-500 hover:shadow-[0_45px_70px_-20px_rgba(0,0,0,0.4)]">

              <h3 className="text-2xl font-bold text-blue-900 mb-6 tracking-tight">
                DONATE NOW
              </h3>

              <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-10">
                Your contribution directly helps us mentor and guide students who need it most. Together, we can build a confident, self-reliant, and successful new generation.
              </p>

              {/* Location Element */}
              <div className="flex items-center gap-3 text-orange-500 font-bold mb-12">
                <MapPin size={18} strokeWidth={2.5} />
                <span className="text-xs md:text-sm uppercase tracking-widest">Satara, Maharashtra</span>
              </div>

              {/* The CTA Button Wrapper */}
              <div className="pt-10 border-t border-slate-100">
                <button className="group w-full flex items-center justify-between text-blue-900 font-bold text-lg md:text-xl hover:text-orange-500 transition-all duration-300 ease-in-out">
                  <span className="tracking-tighter uppercase">CLICK TO DONATE</span>
                  <div className="bg-slate-50 group-hover:bg-orange-50 p-2 transition-colors duration-300">
                    <Plus size={24} strokeWidth={3} className="text-orange-500 group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                </button>
              </div>
            </div>

            {/* Subtle glow behind card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Directors = () => {
  const leaders = [
    {
      name: "Deepak Kisan Mane",
      role: "Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500"
    },
    {
      name: "Rajendra Kisan Dalvi",
      role: "Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500"
    },
    {
      name: "Nanaso Shivaji Mohite",
      role: "Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500"
    },
    {
      name: "Komal Dada Gaikwad",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500"
    },
  ];

  return (
    <section id="leadership" className="py-20 md:py-32 bg-white" style={{ fontFamily: "'Noto Serif', serif" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header (Editorial Style) */}
        <div className="text-center mb-20 md:mb-24">
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm md:text-sm mb-4 block">
            GUIDING THE VISION
          </span>
          <h2 className="text-black font-extrabold text-2xl lg:text-3xl tracking-tight leading-tight">
            Our Leadership
          </h2>
        </div>

        {/* The Leadership Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-10 gap-y-10 md:gap-y-20">
          {leaders.map((leader, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              {/* The Portrait Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* The Data Layer */}
              <div className="mt-4 md:mt-7 text-center space-y-1 md:space-y-2">
                <h3 className="text-black font-extrabold text-xs sm:text-base md:text-xl lg:text-2xl leading-tight transition-colors duration-300">
                  {leader.name}
                </h3>
                <p className="text-black font-medium text-[9px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DirectorMessage = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Mobile Heading: Visible only on small screens */}
          <div className="md:hidden space-y-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-orange-500"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 truncate">
                Yashangan Foundation
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-black tracking-tight leading-tight">
              Message from the Directors
            </h2>
          </div>

          {/* Left Column: Visual */}
          <div className="relative flex justify-center md:justify-start lg:justify-center">
            {/* Decorative background shape */}
            <div className="absolute top-4 -left-4 w-64 h-64 md:w-80 md:h-80 bg-blue-50 rounded-full blur-2xl z-0"></div>
            <div className="absolute bottom-4 -right-4 w-48 h-48 bg-orange-50 rounded-full blur-xl z-0"></div>

            <div className="relative z-10 p-2 bg-white rounded-3xl shadow-xl border border-slate-100 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Director"
                className="w-full max-w-[320px] md:max-w-[400px] h-auto object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            {/* Desktop Heading: Hidden on mobile */}
            <div className="hidden md:block space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-[2px] bg-orange-500"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600 truncate">
                  Yashangan Foundation
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-black tracking-tight leading-tight">
                Message from the Directors
              </h2>
            </div>

            {/* Body Text */}
            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                The Directors of the “Yashangan Foundation” are experienced mentors characterized by a deep sense of social responsibility and a visionary perspective on the field of education. Under their leadership, the organization is implementing various initiatives aimed at the holistic development of students and the advancement of society.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Their primary objective is to provide every student with the right direction, boost their self-confidence, and empower them to achieve success in accordance with their individual potential. They have made significant contributions in the realms of education, character building, personality development, and social awareness.
              </p>
            </div>

            {/* Profile Block */}
            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <div className="flex flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-blue-200 shadow-sm mt-1">
                  <span className="text-blue-900 font-bold text-lg tracking-tighter">DM</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-black leading-none">Deepak Kisan Mane</h4>
                  <p className="text-[11px] font-bold text-black uppercase tracking-widest mt-1.5 mb-3">Director</p>

                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-200"></div>
                    <div className="absolute -top-3 left-4 text-slate-200 text-4xl font-serif">"</div>
                    <p className="text-xs text-slate-500 leading-relaxed italic relative z-10 pl-2">
                      Possessing extensive experience in working within both the educational and social sectors, he places a strong emphasis on providing appropriate guidance to students. He plays a pivotal leadership role in driving the growth and development of the organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
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

const LandingPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Mission />
      <Approach360 />
      {/* <Services /> */}
      <Features />
      <Support />
      <Directors />
      <DirectorMessage />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-orange-200 selection:text-orange-900">
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
