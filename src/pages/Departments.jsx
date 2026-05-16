import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Calculator, Beaker, Globe, Landmark, Book, FlaskConical, Users } from 'lucide-react';
import SEO from '../components/SEO';

const departments = [
  {
    id: 'cs',
    name: 'Computer Science & IT',
    icon: Code,
    color: 'blue',
    hod: 'Prof. Ramesh Sharma',
    established: 2001,
    students: 320,
    faculty: 8,
    courses: ['B.Sc. IT', 'BCA', 'M.Sc. Computer Science'],
    labs: ['Programming Lab', 'Networking Lab', 'AI & ML Lab'],
    about:
      'The Department of Computer Science & IT offers cutting-edge programs in software development, networking, and emerging technologies. Equipped with state-of-the-art labs and industry-aligned curriculum.',
  },
  {
    id: 'math',
    name: 'Mathematics',
    icon: Calculator,
    color: 'purple',
    hod: 'Dr. Sunita Verma',
    established: 1995,
    students: 180,
    faculty: 5,
    courses: ['B.Sc. Mathematics', 'M.Sc. Mathematics'],
    labs: ['Statistics Lab', 'Research Lab'],
    about:
      'The Mathematics Department fosters analytical thinking and problem-solving skills. Our programs cover pure and applied mathematics with strong research orientation.',
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: Beaker,
    color: 'cyan',
    hod: 'Prof. Anil Kumar',
    established: 1995,
    students: 150,
    faculty: 4,
    courses: ['B.Sc. Physics'],
    labs: ['Optics Lab', 'Electronics Lab', 'Modern Physics Lab'],
    about:
      'The Physics Department provides a strong foundation in classical and modern physics. Students gain hands-on experience through well-equipped laboratories.',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: FlaskConical,
    color: 'green',
    hod: 'Dr. Meena Rao',
    established: 1995,
    students: 140,
    faculty: 4,
    courses: ['B.Sc. Chemistry'],
    labs: ['Organic Chemistry Lab', 'Inorganic Lab', 'Analytical Lab'],
    about:
      'The Chemistry Department offers comprehensive programs in organic, inorganic, and physical chemistry with emphasis on research and industrial applications.',
  },
  {
    id: 'humanities',
    name: 'Humanities',
    icon: Globe,
    color: 'orange',
    hod: 'Prof. Deepak Joshi',
    established: 1995,
    students: 250,
    faculty: 7,
    courses: ['B.A. English', 'B.A. History', 'B.A. Sociology'],
    labs: ['Language Lab', 'Social Science Research Centre'],
    about:
      'The Humanities Department nurtures critical thinking, communication, and cultural understanding. Programs are designed to develop well-rounded graduates.',
  },
  {
    id: 'commerce',
    name: 'Commerce & Management',
    icon: Landmark,
    color: 'emerald',
    hod: 'Dr. Priya Mehta',
    established: 1998,
    students: 280,
    faculty: 6,
    courses: ['B.Com', 'BBA', 'M.Com'],
    labs: ['Commerce Lab', 'Business Simulation Lab'],
    about:
      'The Commerce & Management Department prepares students for dynamic business environments through industry-relevant curriculum and practical training.',
  },
  {
    id: 'library',
    name: 'Library Science',
    icon: Book,
    color: 'rose',
    hod: 'Dr. S. Kulkarni',
    established: 2005,
    students: 60,
    faculty: 2,
    courses: ['B.Lib.I.Sc.', 'M.Lib.I.Sc.'],
    labs: ['Digital Library Lab'],
    about:
      'The Library Science Department trains students in modern library management, digital archiving, and information science for the knowledge economy.',
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', btn: 'bg-blue-600 hover:bg-blue-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700', btn: 'bg-purple-600 hover:bg-purple-700' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700', btn: 'bg-cyan-600 hover:bg-cyan-700' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', badge: 'bg-green-100 text-green-700', btn: 'bg-green-600 hover:bg-green-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700', btn: 'bg-orange-600 hover:bg-orange-700' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', btn: 'bg-emerald-600 hover:bg-emerald-700' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700', btn: 'bg-rose-600 hover:bg-rose-700' },
};

const Departments = () => {
  const [selected, setSelected] = useState(null);

  const dept = selected ? departments.find((d) => d.id === selected) : null;
  const colors = dept ? colorMap[dept.color] : null;

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <SEO
        title="Departments"
        description="Explore academic departments at Swami Vivekanand College – Computer Science, Mathematics, Physics, Chemistry, Humanities, Commerce and more."
        keywords="college departments, computer science department, arts department, science department, commerce department"
        canonical="/departments"
      />
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Departments
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Explore our academic departments, each offering specialized programs, dedicated faculty, and modern infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {departments.map((d) => {
            const Icon = d.icon;
            const c = colorMap[d.color];
            return (
              <motion.button
                key={d.id}
                onClick={() => setSelected(selected === d.id ? null : d.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                aria-expanded={selected === d.id}
                aria-controls={`dept-detail-${d.id}`}
                className={`text-left bg-white rounded-xl shadow-md border-2 p-6 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  selected === d.id ? `${c.border} shadow-lg` : 'border-slate-100'
                }`}
              >
                <div className={`w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center ${c.text} mb-4`}>
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h2 className="font-bold text-slate-800 text-base mb-1">{d.name}</h2>
                <p className="text-xs text-slate-500 mb-3">HOD: {d.hod}</p>
                <div className="flex gap-3 text-xs">
                  <span className={`px-2 py-0.5 rounded-full ${c.badge}`}>{d.students} Students</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{d.faculty} Faculty</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Department Detail Panel */}
        {dept && (
          <motion.section
            id={`dept-detail-${dept.id}`}
            key={dept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white rounded-xl shadow-lg border-2 ${colors.border} p-8`}
            aria-label={`${dept.name} department details`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center ${colors.text} shrink-0`}>
                {(() => { const Icon = dept.icon; return <Icon className="w-8 h-8" aria-hidden="true" />; })()}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800 mb-1">Department of {dept.name}</h2>
                <p className="text-slate-500 text-sm mb-4">Established {dept.established} | Head: {dept.hod}</p>
                <p className="text-slate-600 mb-6">{dept.about}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Book className="w-4 h-4" aria-hidden="true" /> Programs Offered
                    </h3>
                    <ul className="space-y-1">
                      {dept.courses.map((c) => (
                        <li key={c} className="text-sm text-slate-600 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('bg-', 'bg-').replace('-50', '-500')}`} aria-hidden="true"></span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <FlaskConical className="w-4 h-4" aria-hidden="true" /> Laboratories
                    </h3>
                    <ul className="space-y-1">
                      {dept.labs.map((l) => (
                        <li key={l} className="text-sm text-slate-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden="true"></span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" aria-hidden="true" /> Quick Stats
                    </h3>
                    <dl className="space-y-1 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <dt>Students Enrolled</dt>
                        <dd className="font-medium text-slate-800">{dept.students}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Faculty Members</dt>
                        <dd className="font-medium text-slate-800">{dept.faculty}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Est. Year</dt>
                        <dd className="font-medium text-slate-800">{dept.established}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Departments;
