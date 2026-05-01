import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Users, BookOpen, Heart, Leaf, Sparkles, Shield, Star,
  ArrowRight, Brain, CheckCircle2, ChevronRight, ChevronLeft, Menu, HeartHandshake, Lightbulb, MapPin, Plus
} from 'lucide-react';
import AboutPage from './pages/aboutPage';
import ProgramsPage from './pages/programsPage';

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
              className="absolute top-0 h-full bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 rounded-full"
              style={{ animation: 'customLine 2s ease-in-out infinite' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <div className="flex justify-between items-center py-2.5">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src="/logopng.png" alt="Yashangan Foundation" className="h-10 md:h-12 w-auto object-contain drop-shadow-sm" />
            <span className="font-bold text-lg text-blue-900 tracking-tight">
              Yashangan Foundation
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">About us</Link>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">What we do</a>
            <Link to="/programs" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Programs</Link>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">Contact us</a>
            <button className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition-all shadow-sm">
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
    <section id="home" className="relative w-full h-[600px] md:h-[800px] lg:h-screen min-h-[600px] overflow-hidden bg-slate-900 group">
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
          <div className="absolute inset-0 max-w-6xl mx-auto px-4 md:px-5 lg:px-8 flex items-center">
            <div className="w-full md:w-3/5 lg:w-[45%] text-left space-y-4 md:space-y-6 pt-16 md:pt-0">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-sans font-bold text-yellow-400 leading-tight tracking-tight drop-shadow-md">
                {slide.Headline}
              </h1>
              <p className="text-base md:text-lg text-white font-medium leading-relaxed drop-shadow max-w-xl">
                {slide.Description}
              </p>
              <div className="pt-2">
                <a href="#about" className="inline-block text-white text-3xl md:text-4xl hover:text-orange-400 transition-colors tracking-wide drop-shadow-md" style={{ fontFamily: "'Caveat', cursive" }}>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-yellow-400 w-8'
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
            <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
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
            <div className="mt-12 pt-8 border-t border-slate-200/60 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 border border-blue-100">
                <Heart size={28} />
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
    </section>
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
            <h2 className="text-blue-900 tracking-tight text-3xl font-bold mb-8 leading-tight">
              Our 360-Degree Approach to Combat CSA
            </h2>

            <div className="space-y-6">
              {/* Point 1: Knowledge & Prevention Work */}
              <div className="group bg-transparent">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-blue-900 transition-colors duration-300">
                    <Lightbulb size={28} strokeWidth={1.5} />
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
                    <HeartHandshake size={28} strokeWidth={1.5} />
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

const Features = () => {
  return (
    <section id="why-choose-us" className="relative py-24 lg:py-32 bg-white overflow-hidden">
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
            <span className="text-orange-500 text-3xl font-[Caveat] mb-4 block">
              The Yashangan Difference
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight leading-tight">
              Why Choose Us?
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed mb-10 max-w-lg">
              We don't just provide guidance; we create a foundation for lifelong success. Our approach perfectly balances modern scientific technology with deep, personal mentoring and traditional values.
            </p>

            {/* The Spotlight (Summer Workshop Integration) */}
            <div className="relative group">
              {/* Background Blob - Subtle, no hard border */}
              <div className="absolute inset-0 bg-orange-50/50 rounded-3xl -m-2 blur-sm z-0"></div>

              <div className="relative z-10 bg-orange-50/50 rounded-3xl p-8 border border-orange-100/50 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">

                  Special Summer Personality Workshop
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    "Concentration Building",
                    "Stage Courage & Confidence",
                    "Beautiful Handwriting",
                    "Speed Memory"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="shrink-0 text-blue-500">
                        <CheckCircle2 size={18} strokeWidth={2.5} />
                      </div>
                      <span className="text-slate-700 text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Floating Pillars */}
          <div className="flex flex-col gap-12 lg:gap-16 pt-8 lg:pt-0">

            {/* Pillar 1 */}
            <div className="flex items-start gap-6 group hover:shadow-lg hover:shadow-slate-100/50 p-6 rounded-2xl transition-all duration-500">
              <div className="shrink-0 p-3 bg-blue-50 rounded-xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Expert-Led Mentoring</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  Our team consists of highly experienced experts in education, personality development, and social work who deeply analyze each student's potential.
                </p>
              </div>
            </div>

            {/* Pillar 2 - Pushed Right (Asymmetrical) */}
            <div className="flex items-start gap-6 group lg:ml-12 hover:shadow-lg hover:shadow-slate-100/50 p-6 rounded-2xl transition-all duration-500">
              <div className="shrink-0 p-3 bg-blue-50 rounded-xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                <Brain size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Technology-Driven (DMIT)</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  We utilize advanced Dermatoglyphics Multiple Intelligence Testing to scientifically analyze natural intelligence and accurately guide career choices.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-6 group hover:shadow-lg hover:shadow-slate-100/50 p-6 rounded-2xl transition-all duration-500">
              <div className="shrink-0 p-3 bg-blue-50 rounded-xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Personalized Attention</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
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
              <div className="w-2 h-2 rounded-full bg-white"></div>
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
                <span className="text-blue-900 font-bold text-sm tracking-tighter">{leader.name.split(' ').map(n => n[0]).join('')}</span>
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

const DirectorMessage = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

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
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-orange-500"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 truncate">
                Yashangan Foundation
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-blue-900 tracking-tight leading-tight">
              Message from the Directors
            </h2>

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
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 shadow-sm mt-1">
                  <span className="text-blue-900 font-bold text-lg tracking-tighter">DM</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-blue-900 leading-none">Deepak Kisan Mane</h4>
                  <p className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mt-1.5 mb-3">Director</p>

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
