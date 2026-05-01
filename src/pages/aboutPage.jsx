import React from 'react';
import { Eye, Target, Award } from 'lucide-react';

const RibbonHeader = ({ text }) => (
  <div className="inline-block bg-yellow-400 text-black font-extrabold text-lg px-6 py-2.5 mb-8 [clip-path:polygon(0_0,95%_0,100%_50%,95%_100%,0_100%)] uppercase tracking-wider">
    {text}
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-serif antialiased">
      {/* 1. Narrative Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
          alt="Happy children learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Overlapping Title Box */}
        <div className="absolute bottom-6 left-0 lg:left-12 z-20">
          <div className="bg-yellow-400 px-8 py-4">
            <h1 className="text-black font-bold text-2xl md:text-4xl tracking-tighter uppercase leading-none">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Spacer for overlapping hero box */}
      <div className="h-20 lg:h-32"></div>

      {/* 3. How It Started Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <RibbonHeader text="How It Started" />

          <div className="space-y-8 text-slate-700 text-lg md:text-xl leading-relaxed">
            <p>
              Yashangan Foundation began with a simple but profound realization: in the contemporary era of competition and speed, true guidance and stability are often missing from a child's education. We noticed that while academic excellence was being pursued, the discovery of innate qualities and the nurturing of character were being left behind.
            </p>
            <p>
              Founded on the belief that every individual possesses a unique spark, we set out to create a socio-educational organization that balances modernity with tradition. Our journey started in Satara with a handful of dedicated mentors who wanted to bridge the gap between intellectual growth and psychological well-being, ensuring that our students become not just successful professionals, but ideal citizens of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Section */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <RibbonHeader text="Vision & Mission" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-8">
            {/* Vision */}
            <div className="flex flex-col items-start gap-6">
              <div className="p-4 bg-blue-900 text-white rounded-full shadow-lg">
                <Eye size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-blue-900 font-extrabold text-3xl">Our Vision</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                To create a society where every individual discovers their innate qualities and achieves complete intellectual, psychological, social, and spiritual growth. We envision a future where education is a holistic journey of self-discovery rather than a mere competition.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-start gap-6">
              <div className="p-4 bg-blue-900 text-white rounded-full shadow-lg">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-blue-900 font-extrabold text-3xl">Our Mission</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                To provide 360-degree guidance, value-based education, and personalized mentoring that empowers women, protects children, and builds a self-reliant generation. We are committed to directing everyone's potential in the right direction through scientific assessment and personal care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Leadership Section */}
      <section className="bg-white py-20 md:py-28 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <RibbonHeader text="Our Leadership" />

          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start mt-8">
            {/* Photo Container */}
            <div className="relative group shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-yellow-400 rounded-xl rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Deepak Kisan Mane - Director"
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-2xl border-4 border-white"
              />
            </div>

            {/* Bio Content */}
            <div className="flex flex-col pt-4">
              <h2 className="text-blue-900 font-extrabold text-4xl mb-2">Deepak Kisan Mane</h2>
              <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-2">
                <Award size={16} />
                Director & Founder
              </span>

              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p>
                  With extensive experience in both the educational and social sectors, Deepak Kisan Mane is the visionary force behind Yashangan Foundation. His commitment to providing appropriate guidance to students has led to the implementation of numerous innovative programs that go beyond the classroom.
                </p>
                <p>
                  As an expert in Dermatoglyphics Multiple Intelligence Testing (DMIT), he believes in using scientific methods to identify a child's natural potential early on. His leadership is defined by a deep sense of social responsibility and a focus on character building, ensuring that every initiative of the foundation contributes to the holistic development of the next generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA for consistency */}
      <section className="bg-blue-900 py-16 text-center px-6">
        <h2 className="text-white font-extrabold text-3xl md:text-4xl mb-8 leading-tight">
          Join us in our journey of transforming lives.
        </h2>
        <button className="bg-yellow-400 text-black font-extrabold px-10 py-4 rounded-none hover:bg-white transition-colors shadow-xl uppercase tracking-widest text-sm">
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
