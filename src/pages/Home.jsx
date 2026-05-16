import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Bell, Award, Download, Phone, ChevronRight, GraduationCap, Building2, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const notices = [
  { text: 'Admission 2026-27 process has started. Last date to apply is June 30th.', important: true },
  { text: 'NAAC Peer Team Visit Scheduled for August 15th–17th.', important: true },
  { text: 'Semester Exams Schedule Released for B.Sc. and B.A. programs.', important: false },
  { text: 'Campus Placement Drive by Top IT Firms on July 10th.', important: false },
  { text: 'Anti-Ragging Affidavit Submission Deadline: June 15, 2026.', important: true },
  { text: 'NSP Scholarship Applications are now open for 2026-27.', important: false },
];

const stats = [
  { label: 'Years of Excellence', value: '30+', icon: Award },
  { label: 'Programs Offered', value: '18', icon: BookOpen },
  { label: 'Faculty Members', value: '45+', icon: Users },
  { label: 'Placement Rate', value: '85%', icon: Trophy },
];

const quickLinks = [
  { name: 'Academics', path: '/courses', icon: BookOpen, desc: 'UG & PG Programs' },
  { name: 'Faculty', path: '/faculty', icon: Users, desc: 'Expert Educators' },
  { name: 'Placements', path: '/placements', icon: Trophy, desc: 'Top Recruiters' },
  { name: 'IQAC & NAAC', path: '/iqac', icon: Award, desc: "'A' Grade Accredited" },
  { name: 'Downloads', path: '/downloads', icon: Download, desc: 'Forms & Documents' },
  { name: 'Contact', path: '/contact', icon: Phone, desc: 'Get in Touch' },
];

const Home = () => {
  return (
    <div className="w-full">
      <SEO
        title="Home"
        description="Swami Vivekanand College of Arts and Science – UGC Recognized, NAAC 'A' Grade Accredited institution in Maharashtra. Admissions open for 2026-27. Explore UG & PG programs in Arts, Science and Commerce."
        keywords="Swami Vivekanand College, arts and science college, UGC recognized college, NAAC A grade, college admissions 2026, Maharashtra college"
        canonical="/"
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#1A3A5C] text-white overflow-hidden" aria-label="Hero section">
        {/* subtle texture overlay */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B1A1A] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A84C] rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 z-10">
          <div className="lg:w-1/2 text-center lg:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded px-3 py-1.5 text-xs sm:text-sm text-[#F0D080] mb-4 sm:mb-6"
            >
              <Award className="w-4 h-4" aria-hidden="true" />
              NAAC 'A' Grade Accredited Institution
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight"
            >
              Shaping the{' '}
              <span className="text-[#C9A84C]">Leaders</span>{' '}
              of Tomorrow
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#A8C4D8] mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              UGC Recognized • NAAC 'A' Accredited • 30 Years of Excellence.
              Join a legacy of quality education and holistic development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/admissions"
                className="bg-[#8B1A1A] hover:bg-[#7a1616] text-white font-semibold py-3 px-6 sm:px-8 rounded transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
              >
                Apply Now <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                to="/courses"
                className="bg-transparent hover:bg-white/10 border border-[#A8C4D8] text-white font-semibold py-3 px-6 sm:px-8 rounded transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 w-full"
          >
            <div className="w-full aspect-video rounded-lg border border-white/10 shadow-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Swami Vivekanand College campus with students"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A5C]/80 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex gap-2 sm:gap-3">
                {[
                  { val: '30+', label: 'Years' },
                  { val: '5000+', label: 'Alumni' },
                  { val: "'A'", label: 'NAAC Grade' },
                ].map((s) => (
                  <div key={s.label} className="bg-black/30 backdrop-blur-sm border border-white/20 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-center">
                    <p className="text-base sm:text-lg font-bold text-[#C9A84C]">{s.val}</p>
                    <p className="text-[10px] sm:text-xs text-white/70">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#8B1A1A] text-white py-6" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y-2 divide-x-0 md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center gap-1.5 py-4 px-3">
                  <Icon className="w-5 h-5 text-[#F0D080]" aria-hidden="true" />
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-[#F0D080]/80 text-xs font-medium text-center">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Notice Board & Quick Links ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14" aria-label="Notice board and quick links">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3A5C] mb-5 sm:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#8B1A1A] rounded-full inline-block" aria-hidden="true"></span>
              Quick Access
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="bg-white rounded-lg border border-[#E8E4DC] p-4 sm:p-5 hover:shadow-lg hover:-translate-y-0.5 hover:border-[#8B1A1A]/30 transition-all duration-200 flex flex-col items-center text-center group focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5EDE8] text-[#8B1A1A] rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-[#8B1A1A] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1E1E1E] mb-1">{link.name}</h3>
                    <p className="text-xs text-[#6B7280] hidden sm:block">{link.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Notice Board */}
          <div className="bg-white rounded-lg border border-[#E8E4DC] overflow-hidden flex flex-col shadow-sm" aria-label="Notice board">
            <div className="bg-[#8B1A1A] text-white px-4 py-3 flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#F0D080]" aria-hidden="true" />
              <h2 className="font-bold text-base tracking-wide">Notice Board</h2>
            </div>
            <div className="flex-grow overflow-hidden relative h-[260px] sm:h-[300px]">
              <div className="absolute w-full px-4 pt-4 animate-marquee space-y-4">
                {[...notices, ...notices].map((notice, index) => (
                  <div key={index} className="pb-4 border-b border-[#F0EDE8] last:border-0">
                    <div className="flex items-start gap-2">
                      {notice.important && (
                        <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B1A1A]" aria-label="Important" role="img"></span>
                      )}
                      <p className="text-sm text-[#2C2C2C] hover:text-[#8B1A1A] transition-colors cursor-pointer leading-snug">
                        {notice.text}
                      </p>
                    </div>
                    <span className="text-xs text-[#9CA3AF] mt-1 block ml-3.5">Updated: Today</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 py-2.5 bg-[#FAFAF8] border-t border-[#E8E4DC] text-center">
              <Link to="/notices" className="text-sm text-[#8B1A1A] font-semibold hover:underline focus:outline-none focus:underline">
                View All Notices →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="bg-[#F0EDE8] py-12 sm:py-16 border-y border-[#E8E4DC]" aria-labelledby="about-home-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-[#8B1A1A] text-sm font-semibold uppercase tracking-widest mb-2">About the Institution</p>
              <h2 id="about-home-heading" className="text-2xl sm:text-3xl font-extrabold text-[#1A3A5C] mb-4 leading-tight">
                Swami Vivekanand College<br />of Arts and Science
              </h2>
              <p className="text-[#4B5563] mb-4 leading-relaxed text-sm sm:text-base">
                Established in 1995, Swami Vivekanand College of Arts and Science is a UGC-recognized institution affiliated with the State University. Accredited with an <strong className="text-[#1A3A5C]">'A' Grade by NAAC</strong>, we are committed to providing quality higher education.
              </p>
              <p className="text-[#4B5563] mb-6 leading-relaxed text-sm sm:text-base">
                Our institution offers a wide range of undergraduate and postgraduate programs across Arts, Science, and Commerce streams, supported by experienced faculty and modern infrastructure.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#7a1616] text-white font-semibold py-2.5 px-5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B1A1A] text-sm"
                >
                  Learn More <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/iqac"
                  className="flex items-center gap-2 bg-white hover:bg-[#F5EDE8] text-[#1A3A5C] border border-[#E8E4DC] font-semibold py-2.5 px-5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B1A1A] text-sm"
                >
                  NAAC Reports
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: GraduationCap, title: 'UGC Recognized', desc: 'Under Section 2(f) & 12(B)', bg: 'bg-[#F5EDE8]', iconColor: 'text-[#8B1A1A]' },
                { icon: Award, title: "NAAC 'A' Grade", desc: 'CGPA: 3.15 (2022)', bg: 'bg-[#FDF6EC]', iconColor: 'text-[#C9A84C]' },
                { icon: Building2, title: 'Modern Campus', desc: '15-acre green campus', bg: 'bg-[#EEF4F8]', iconColor: 'text-[#1A3A5C]' },
                { icon: FlaskConical, title: 'Research Focus', desc: '200+ publications', bg: 'bg-[#F0F4EE]', iconColor: 'text-[#2D6A4F]' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={`${item.bg} rounded-lg p-4 sm:p-5 border border-[#E8E4DC]`}>
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${item.iconColor}`} aria-hidden="true" />
                    <h3 className="font-bold text-[#1E1E1E] text-xs sm:text-sm">{item.title}</h3>
                    <p className="text-xs text-[#6B7280] mt-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Departments Preview ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14" aria-labelledby="departments-home-heading">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 id="departments-home-heading" className="text-xl sm:text-2xl font-bold text-[#1A3A5C] flex items-center gap-2">
            <span className="w-1 h-6 bg-[#8B1A1A] rounded-full inline-block" aria-hidden="true"></span>
            Academic Departments
          </h2>
          <Link to="/departments" className="text-[#8B1A1A] hover:text-[#7a1616] text-sm font-semibold flex items-center gap-1 focus:outline-none focus:underline">
            View All <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { name: 'Computer Science', icon: '💻' },
            { name: 'Mathematics', icon: '📐' },
            { name: 'Physics', icon: '⚛️' },
            { name: 'Chemistry', icon: '🧪' },
            { name: 'Humanities', icon: '📚' },
            { name: 'Commerce', icon: '📊' },
          ].map((dept) => (
            <Link
              key={dept.name}
              to="/departments"
              className="bg-white rounded-lg p-3 sm:p-4 text-center border border-[#E8E4DC] hover:shadow-md hover:border-[#8B1A1A]/30 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#8B1A1A]"
            >
              <span className="text-2xl sm:text-3xl block mb-1 sm:mb-2" role="img" aria-label={dept.name}>{dept.icon}</span>
              <p className="text-xs font-semibold text-[#1A3A5C]">{dept.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── UGC Compliance Strip ── */}
      <section className="bg-[#1A3A5C] text-white py-10 sm:py-12" aria-labelledby="ugc-compliance-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="ugc-compliance-heading" className="text-base sm:text-lg font-bold mb-1 text-white">
            Mandatory Disclosures & UGC Compliance
          </h2>
          <p className="text-[#A8C4D8] text-sm mb-6 sm:mb-8">
            All information publicly available as per UGC guidelines and RTI Act, 2005
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { label: 'UGC Mandatory Disclosure', path: '/mandatory-disclosure' },
              { label: 'NAAC SSR & AQAR', path: '/iqac' },
              { label: 'Anti-Ragging Cell', path: '/mandatory-disclosure#anti-ragging' },
              { label: 'Grievance Redressal', path: '/mandatory-disclosure#grievance' },
              { label: 'RTI Information', path: '/mandatory-disclosure#rti' },
              { label: 'Committees & Policies', path: '/committees' },
              { label: 'Fee Structure', path: '/admissions' },
              { label: 'Academic Calendar', path: '/academic-calendar' },
            ].map((item) => (
              <Link
                key={item.path + item.label}
                to={item.path}
                className="px-3 sm:px-4 py-2 bg-white/10 hover:bg-[#8B1A1A] border border-white/20 hover:border-[#8B1A1A] text-[#A8C4D8] hover:text-white rounded text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
