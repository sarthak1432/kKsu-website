import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Building, Users, Star, ChevronRight } from 'lucide-react';

const stats = [
  { label: 'Placement Rate', value: '85%', icon: Briefcase, color: 'blue' },
  { label: 'Highest Package', value: '12 LPA', icon: TrendingUp, color: 'green' },
  { label: 'Average Package', value: '4.5 LPA', icon: TrendingUp, color: 'indigo' },
  { label: 'Top Recruiters', value: '50+', icon: Building, color: 'purple' },
  { label: 'Students Placed', value: '280+', icon: Users, color: 'emerald' },
  { label: 'Placement Years', value: '15+', icon: Star, color: 'yellow' },
];

const recruiters = [
  'TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra',
  'Cognizant', 'Capgemini', 'Accenture', 'IBM', 'L&T Infotech',
  'Mphasis', 'Hexaware', 'NIIT Technologies', 'Persistent Systems', 'Zensar',
];

const testimonials = [
  {
    name: 'Priya Sharma',
    batch: 'B.Sc. IT, 2024',
    company: 'TCS',
    package: '3.6 LPA',
    quote: 'The placement cell provided excellent training and mock interviews. I got placed in TCS in my first attempt.',
  },
  {
    name: 'Rahul Verma',
    batch: 'BCA, 2024',
    company: 'Infosys',
    package: '3.8 LPA',
    quote: 'The aptitude and communication training sessions were very helpful. Grateful to the placement team.',
  },
  {
    name: 'Ananya Patel',
    batch: 'B.Com, 2023',
    company: 'HDFC Bank',
    package: '4.2 LPA',
    quote: 'The college has strong industry connections. I received multiple offers and chose the best one.',
  },
];

const colorMap = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  purple: 'bg-purple-50 text-purple-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  yellow: 'bg-yellow-50 text-yellow-600',
};

const Placements = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Training & Placement Cell
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Empowering students with industry-relevant skills and connecting them with top recruiters globally.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Stats */}
        <section aria-labelledby="placement-stats-heading">
          <h2 id="placement-stats-heading" className="sr-only">Placement Statistics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 text-center">
                  <div className={`mx-auto w-10 h-10 ${colorMap[stat.color]} rounded-full flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Training Programs */}
        <section className="bg-white rounded-xl shadow-md border border-slate-100 p-8" aria-labelledby="training-heading">
          <h2 id="training-heading" className="text-2xl font-bold text-slate-800 mb-6">Training Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Aptitude Training', desc: 'Quantitative, logical reasoning, and verbal ability sessions by expert trainers.', icon: '🧠' },
              { title: 'Communication Skills', desc: 'English communication, group discussions, and presentation skills workshops.', icon: '🗣️' },
              { title: 'Technical Training', desc: 'Domain-specific technical skills, coding bootcamps, and project-based learning.', icon: '💻' },
              { title: 'Mock Interviews', desc: 'Regular mock interview sessions with industry professionals and alumni.', icon: '🎯' },
              { title: 'Resume Building', desc: 'Professional resume writing workshops and LinkedIn profile optimization.', icon: '📄' },
              { title: 'Industry Visits', desc: 'Organized visits to leading companies for real-world exposure and networking.', icon: '🏭' },
            ].map((program) => (
              <div key={program.title} className="p-4 border border-slate-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all">
                <span className="text-2xl block mb-2" role="img" aria-label={program.title}>{program.icon}</span>
                <h3 className="font-bold text-slate-800 mb-1">{program.title}</h3>
                <p className="text-sm text-slate-600">{program.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recruiters */}
        <section className="bg-white rounded-xl shadow-md border border-slate-100 p-8" aria-labelledby="recruiters-heading">
          <h2 id="recruiters-heading" className="text-2xl font-bold text-slate-800 mb-6">Our Top Recruiters</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {recruiters.map((company) => (
              <div
                key={company}
                className="h-16 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                <span className="text-slate-600 font-semibold text-sm text-center px-2">{company}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="text-2xl font-bold text-slate-800 mb-6">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md border border-slate-100 p-6"
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shrink-0" aria-hidden="true">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.batch}</p>
                  </div>
                </div>
                <blockquote className="text-sm text-slate-600 italic mb-4">"{t.quote}"</blockquote>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-600">{t.company}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{t.package}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Are you a Recruiter?</h3>
            <p className="text-blue-100 text-sm">Partner with us to hire talented graduates from our institution.</p>
          </div>
          <a
            href="mailto:placements@svcollege.edu.in"
            className="shrink-0 flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            Contact Placement Cell <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Placements;
