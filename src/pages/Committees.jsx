import { motion } from 'framer-motion';
import { Users, Shield, Heart, Scale, BookOpen, Leaf } from 'lucide-react';
import SEO from '../components/SEO';

const committees = [
  {
    id: 'icc',
    name: 'Internal Complaints Committee (ICC)',
    icon: Shield,
    color: 'purple',
    mandate: 'Constituted under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.',
    members: [
      { name: 'Dr. Kavita Patel', role: 'Presiding Officer' },
      { name: 'Prof. Sunita Verma', role: 'Faculty Member' },
      { name: 'Ms. Rekha Sharma', role: 'Non-Teaching Staff' },
      { name: 'Ms. Anita Joshi', role: 'NGO Representative (External)' },
    ],
    contact: 'icc@svcollege.edu.in',
  },
  {
    id: 'sc-st',
    name: 'SC/ST Cell',
    icon: Heart,
    color: 'blue',
    mandate: 'Ensures implementation of reservation policies and addresses grievances of SC/ST students and staff as per UGC guidelines.',
    members: [
      { name: 'Prof. Anil Kumar', role: 'Liaison Officer' },
      { name: 'Mr. Suresh Patil', role: 'Member' },
      { name: 'Ms. Priya Nair', role: 'Student Representative' },
    ],
    contact: 'scst@svcollege.edu.in',
  },
  {
    id: 'anti-ragging',
    name: 'Anti-Ragging Committee',
    icon: Scale,
    color: 'red',
    mandate: 'Constituted as per UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009.',
    members: [
      { name: 'Dr. Kavita Patel', role: 'Chairperson (Principal)' },
      { name: 'Prof. Ramesh Sharma', role: 'Coordinator' },
      { name: 'Mr. R. K. Desai', role: 'Administrative Officer' },
      { name: 'Inspector Rajesh Yadav', role: 'Police Representative' },
      { name: 'Mr. Vikram Singh', role: 'Student Representative' },
    ],
    contact: 'antiragging@svcollege.edu.in | Helpline: 1800-180-5522',
  },
  {
    id: 'grievance',
    name: 'Student Grievance Redressal Committee',
    icon: BookOpen,
    color: 'orange',
    mandate: 'Established under UGC (Redressal of Grievances of Students) Regulations, 2023 to address academic and non-academic grievances.',
    members: [
      { name: 'Dr. Priya Mehta', role: 'Chairperson' },
      { name: 'Prof. Deepak Joshi', role: 'Member' },
      { name: 'Mr. Suresh Patil', role: 'Member' },
      { name: 'Ms. Ananya Rao', role: 'Student Representative' },
    ],
    contact: 'grievance@svcollege.edu.in',
  },
  {
    id: 'nss',
    name: 'NSS & Social Outreach Committee',
    icon: Leaf,
    color: 'green',
    mandate: 'Coordinates National Service Scheme activities, community outreach programs, and social responsibility initiatives.',
    members: [
      { name: 'Prof. Anil Kumar', role: 'NSS Program Officer' },
      { name: 'Dr. Meena Rao', role: 'Co-coordinator' },
      { name: 'Mr. Rahul Verma', role: 'Student Volunteer Leader' },
    ],
    contact: 'nss@svcollege.edu.in',
  },
  {
    id: 'cultural',
    name: 'Cultural & Sports Committee',
    icon: Users,
    color: 'pink',
    mandate: 'Organizes cultural events, sports meets, and co-curricular activities to promote holistic student development.',
    members: [
      { name: 'Prof. Deepak Joshi', role: 'Cultural Secretary' },
      { name: 'Prof. Ramesh Sharma', role: 'Sports Secretary' },
      { name: 'Ms. Priya Nair', role: 'Student Cultural Head' },
      { name: 'Mr. Arjun Singh', role: 'Student Sports Head' },
    ],
    contact: 'cultural@svcollege.edu.in',
  },
];

const colorMap = {
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', badge: 'bg-red-100 text-red-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', badge: 'bg-pink-100 text-pink-700' },
};

const Committees = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <SEO
        title="Committees & Policies"
        description="Statutory committees at Swami Vivekanand College including ICC, Anti-Ragging, Grievance Redressal, NSS, and Cultural committees constituted as per UGC regulations."
        keywords="college committees, ICC, anti-ragging committee, grievance redressal, NSS, UGC statutory committees, college policies"
        canonical="/committees"
      />
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Committees & Policies
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Statutory committees constituted as per UGC regulations to ensure a safe, inclusive, and transparent institutional environment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {committees.map((committee) => {
            const Icon = committee.icon;
            const c = colorMap[committee.color];
            return (
              <motion.section
                key={committee.id}
                id={committee.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white rounded-xl shadow-md border-2 ${c.border} p-6`}
                aria-labelledby={`committee-${committee.id}-heading`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center ${c.text} shrink-0`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id={`committee-${committee.id}-heading`} className="font-bold text-slate-800 text-lg leading-tight">
                      {committee.name}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-5 leading-relaxed">{committee.mandate}</p>

                <h3 className="font-semibold text-slate-700 text-sm mb-3 uppercase tracking-wide">Members</h3>
                <div className="space-y-2 mb-5">
                  {committee.members.map((m) => (
                    <div key={m.name} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-800">{m.name}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${c.badge}`}>{m.role}</span>
                    </div>
                  ))}
                </div>

                <div className={`${c.bg} rounded-lg p-3 text-sm`}>
                  <span className="font-semibold text-slate-700">Contact: </span>
                  <span className="text-slate-600">{committee.contact}</span>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Policies Download */}
        <section className="mt-10 bg-white rounded-xl shadow-md border border-slate-100 p-8" aria-labelledby="policies-heading">
          <h2 id="policies-heading" className="text-2xl font-bold text-slate-800 mb-6">Institutional Policies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Anti-Ragging Policy',
              'Sexual Harassment Prevention Policy',
              'SC/ST Reservation Policy',
              'Grievance Redressal Policy',
              'Examination Malpractice Policy',
              'Code of Conduct – Students',
              'Code of Conduct – Faculty',
              'Research Ethics Policy',
              'Environmental Sustainability Policy',
            ].map((policy) => (
              <button
                key={policy}
                className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left group focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`Download ${policy}`}
              >
                <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-blue-600 shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{policy}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Committees;
