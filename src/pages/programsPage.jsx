import React from 'react';
import { CheckCircle2, TrendingUp, Users, Heart } from 'lucide-react';

const ProgramSection = ({ title, image, aim, activities, intro, outcomes, colorTheme = 'navy' }) => {
  const boxBg = colorTheme === 'navy' ? 'bg-blue-900' : 'bg-orange-500';
  const borderAccent = 'border-orange-500';

  return (
    <div className="py-20 first:pt-10">
      {/* Part 1: Program Hero Banner & Title */}
      <div className="relative w-full h-[400px] mb-16 overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Overlapping Title Box */}
        <div className={`absolute -bottom-6 right-8 md:right-16 ${boxBg} text-white px-10 py-6 shadow-2xl z-20`}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-tight">
            {title}
          </h2>
        </div>
      </div>

      {/* Part 2: Content Split Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Data Blocks */}
        <div className="lg:col-span-8 space-y-8">
          <div className={`bg-slate-50 p-8 border-l-8 ${borderAccent} shadow-sm`}>
            <h3 className="text-blue-900 font-bold text-2xl mb-4 flex items-center gap-3">
              Aim of the program
            </h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              {aim}
            </p>
          </div>

          <div className={`bg-slate-50 p-8 border-l-8 ${borderAccent} shadow-sm`}>
            <h3 className="text-blue-900 font-bold text-2xl mb-4">Core Activities</h3>
            <ul className="space-y-4">
              {activities.map((activity, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-700 text-lg leading-relaxed">
                  <span className="text-orange-500 font-black mt-1 shrink-0">{idx + 1}.</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Philosophy & Statistics */}
        <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-slate-200"></div>
            <p className="text-slate-600 text-lg italic leading-relaxed pl-6">
              "{intro}"
            </p>
          </div>

          <div className="space-y-8 pt-6">
            <h4 className="text-blue-900 font-extrabold text-xs uppercase tracking-[0.2em] mb-6">Impact & Outcomes</h4>
            <div className="grid grid-cols-1 gap-6">
              {outcomes.map((outcome, idx) => {
                const [val, ...labelParts] = outcome.split(' ');
                const label = labelParts.join(' ');
                return (
                  <div key={idx} className="group border-b border-slate-100 pb-4 transition-colors hover:border-orange-200">
                    <span className="block text-orange-500 font-black text-3xl mb-1 tracking-tighter">
                      {val}
                    </span>
                    <span className="text-blue-900 font-bold text-sm uppercase tracking-wide">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white font-serif antialiased pb-20">
      <ProgramSection 
        title="Prevention of CSA"
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
        aim="Our initiatives focus on increasing awareness of CSA situations, stopping sexual abuse, and providing comprehensive support to survivors and their families."
        activities={[
          "Educating children, parents, and teachers to recognize early signs of abuse and danger.",
          "Specialized POCSO training for law enforcement personnel to ensure child-centric handling of cases.",
          "Providing FIR assistance, direct emotional support, and facilitating access to govt. compensation."
        ]}
        intro="Awareness is the first step towards prevention and the beginning of recovery. We conduct targeted sessions to ensure children are safe, secure, and free to develop their fullest potential."
        outcomes={["5,000+ Children_Sensitized", "120+ Police_Personnel_Trained", "50+ Awareness_Camps"]}
        colorTheme="navy"
      />

      <ProgramSection 
        title="DMIT & Mentoring"
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070"
        aim="To discover the innate, hidden qualities within every student and direct them toward the right career and life path using advanced scientific analysis."
        activities={[
          "Dermatoglyphics Multiple Intelligence Testing (DMIT) for scientific talent identification.",
          "One-on-one personalized career counseling based on individual intelligence profiles.",
          "Summer personality development workshops focusing on stage courage, handwriting, and concentration."
        ]}
        intro="In the modern era of speed and competition, students need absolute clarity. Our expert-led mentoring balances modern technology with traditional values."
        outcomes={["2,500+ DMIT_Assessments", "15+ Summer_Workshops", "100% Personalized_Attention"]}
        colorTheme="orange"
      />

      <ProgramSection 
        title="Women Empowerment"
        image="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070"
        aim="To foster economic, social, and psychological self-reliance among women, empowering them to become leaders in their communities."
        activities={[
          "Organizing vocational training and skill-development workshops for financial independence.",
          "Conducting comprehensive health, hygiene, and sanitation awareness campaigns.",
          "Forming and guiding self-help groups (SHGs) to ensure long-term community stability."
        ]}
        intro="An empowered woman builds an empowered society. We provide the tools, skills, and confidence required for women to step into their power and achieve complete independence."
        outcomes={["800+ Women_Trained", "30+ Self-Help_Groups_Supported", "10+ Vocational_Drives"]}
        colorTheme="navy"
      />
    </div>
  );
};

export default ProgramsPage;
