import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, BookOpen, Award } from 'lucide-react';
import SEO from '../components/SEO';

const facultyData = [
  {
    id: 1,
    name: 'Dr. Kavita Patel',
    designation: 'Principal & Professor',
    department: 'Administration',
    qualification: 'Ph.D. (Education), M.Ed.',
    experience: '25 Years',
    email: 'principal@svcollege.edu.in',
    phone: '+91 123 456 7890',
    specialization: 'Educational Administration, Quality Assurance',
    publications: 18,
  },
  {
    id: 2,
    name: 'Prof. Ramesh Sharma',
    designation: 'Head of Department',
    department: 'Computer Science',
    qualification: 'M.Tech (CS), Ph.D. (Pursuing)',
    experience: '15 Years',
    email: 'r.sharma@svcollege.edu.in',
    phone: '+91 123 456 7891',
    specialization: 'Machine Learning, Data Structures',
    publications: 12,
  },
  {
    id: 3,
    name: 'Dr. Sunita Verma',
    designation: 'Associate Professor',
    department: 'Mathematics',
    qualification: 'Ph.D. (Mathematics)',
    experience: '18 Years',
    email: 's.verma@svcollege.edu.in',
    phone: '+91 123 456 7892',
    specialization: 'Abstract Algebra, Number Theory',
    publications: 22,
  },
  {
    id: 4,
    name: 'Prof. Anil Kumar',
    designation: 'Assistant Professor',
    department: 'Physics',
    qualification: 'M.Sc. Physics, B.Ed.',
    experience: '10 Years',
    email: 'a.kumar@svcollege.edu.in',
    phone: '+91 123 456 7893',
    specialization: 'Quantum Mechanics, Optics',
    publications: 8,
  },
  {
    id: 5,
    name: 'Dr. Priya Mehta',
    designation: 'Associate Professor',
    department: 'Commerce & Management',
    qualification: 'Ph.D. (Commerce), MBA',
    experience: '14 Years',
    email: 'p.mehta@svcollege.edu.in',
    phone: '+91 123 456 7894',
    specialization: 'Financial Management, Accounting',
    publications: 15,
  },
  {
    id: 6,
    name: 'Prof. Deepak Joshi',
    designation: 'Assistant Professor',
    department: 'Humanities',
    qualification: 'M.A. English, NET Qualified',
    experience: '8 Years',
    email: 'd.joshi@svcollege.edu.in',
    phone: '+91 123 456 7895',
    specialization: 'British Literature, Linguistics',
    publications: 6,
  },
  {
    id: 7,
    name: 'Dr. Meena Rao',
    designation: 'Associate Professor',
    department: 'Chemistry',
    qualification: 'Ph.D. (Organic Chemistry)',
    experience: '16 Years',
    email: 'm.rao@svcollege.edu.in',
    phone: '+91 123 456 7896',
    specialization: 'Organic Synthesis, Green Chemistry',
    publications: 20,
  },
  {
    id: 8,
    name: 'Prof. Suresh Patil',
    designation: 'Assistant Professor',
    department: 'Computer Science',
    qualification: 'MCA, M.Tech (IT)',
    experience: '7 Years',
    email: 's.patil@svcollege.edu.in',
    phone: '+91 123 456 7897',
    specialization: 'Web Technologies, Database Systems',
    publications: 5,
  },
];

const departments = ['All', ...new Set(facultyData.map((f) => f.department))];

const FacultyCard = ({ faculty }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-xl transition-shadow"
    aria-label={`Faculty profile: ${faculty.name}`}
  >
    {/* Avatar placeholder */}
    <div className="flex items-center gap-4 mb-4">
      <div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shrink-0"
        aria-hidden="true"
      >
        {faculty.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
      </div>
      <div>
        <h3 className="font-bold text-slate-800 text-lg leading-tight">{faculty.name}</h3>
        <p className="text-blue-600 text-sm font-medium">{faculty.designation}</p>
        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
          {faculty.department}
        </span>
      </div>
    </div>

    <dl className="space-y-2 text-sm text-slate-600 mb-4">
      <div className="flex items-start gap-2">
        <Award className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" aria-hidden="true" />
        <div>
          <dt className="sr-only">Qualification</dt>
          <dd>{faculty.qualification}</dd>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <BookOpen className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" aria-hidden="true" />
        <div>
          <dt className="sr-only">Specialization</dt>
          <dd>{faculty.specialization}</dd>
        </div>
      </div>
    </dl>

    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
      <span>{faculty.experience} Experience</span>
      <span>{faculty.publications} Publications</span>
    </div>

    <div className="mt-3 flex gap-3">
      <a
        href={`mailto:${faculty.email}`}
        className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:underline"
        aria-label={`Email ${faculty.name}`}
      >
        <Mail className="w-3.5 h-3.5" aria-hidden="true" /> Email
      </a>
      <a
        href={`tel:${faculty.phone}`}
        className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:underline"
        aria-label={`Call ${faculty.name}`}
      >
        <Phone className="w-3.5 h-3.5" aria-hidden="true" /> Call
      </a>
    </div>
  </motion.article>
);

const Faculty = () => {
  const [activeDept, setActiveDept] = useState('All');

  const filtered =
    activeDept === 'All' ? facultyData : facultyData.filter((f) => f.department === activeDept);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <SEO
        title="Faculty"
        description="Meet the experienced and qualified faculty members of Swami Vivekanand College of Arts and Science. Our educators bring expertise across all departments."
        keywords="college faculty, professors, teaching staff, college teachers, department faculty"
        canonical="/faculty"
      />
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Faculty & Staff
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Meet our dedicated team of experienced educators, researchers, and mentors committed to academic excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total Faculty', value: '45+' },
            { label: 'Ph.D. Holders', value: '28' },
            { label: 'Research Publications', value: '200+' },
            { label: 'Avg. Experience', value: '14 Yrs' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-slate-100">
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter faculty by department">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              aria-pressed={activeDept === dept}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                activeDept === dept
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        {/* Download link */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-800">Complete Faculty List</h3>
            <p className="text-sm text-slate-600 mt-1">Download the complete faculty directory with qualifications and contact details.</p>
          </div>
          <button className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
