import { motion } from 'framer-motion';
import { Award, FileText, Download, CheckCircle, Users, Target } from 'lucide-react';

const naacDocuments = [
  { name: 'Self Study Report (SSR)', year: '2024-2025', type: 'SSR' },
  { name: 'Annual Quality Assurance Report (AQAR)', year: '2023-2024', type: 'AQAR' },
  { name: 'Annual Quality Assurance Report (AQAR)', year: '2022-2023', type: 'AQAR' },
  { name: 'Annual Quality Assurance Report (AQAR)', year: '2021-2022', type: 'AQAR' },
  { name: 'Annual Report', year: '2023-2024', type: 'Annual' },
  { name: 'Annual Report', year: '2022-2023', type: 'Annual' },
  { name: 'Research Publications List', year: '2023-2024', type: 'Research' },
  { name: 'Best Practices Document', year: '2024', type: 'Best Practices' },
];

const iqacMembers = [
  { name: 'Dr. Kavita Patel', role: 'Chairperson (Principal)', type: 'Management' },
  { name: 'Prof. Ramesh Sharma', role: 'IQAC Coordinator', type: 'Faculty' },
  { name: 'Dr. Sunita Verma', role: 'Member', type: 'Faculty' },
  { name: 'Dr. Priya Mehta', role: 'Member', type: 'Faculty' },
  { name: 'Mr. Rajesh Gupta', role: 'Administrative Officer', type: 'Administrative' },
  { name: 'Mr. Arun Desai', role: 'Industry Expert', type: 'External' },
  { name: 'Ms. Priya Nair', role: 'Alumni Representative', type: 'Alumni' },
  { name: 'Mr. Vikram Singh', role: 'Student Representative', type: 'Student' },
];

const criteria = [
  { num: 'I', title: 'Curricular Aspects', score: '3.20' },
  { num: 'II', title: 'Teaching-Learning & Evaluation', score: '3.18' },
  { num: 'III', title: 'Research, Innovations & Extension', score: '3.05' },
  { num: 'IV', title: 'Infrastructure & Learning Resources', score: '3.25' },
  { num: 'V', title: 'Student Support & Progression', score: '3.10' },
  { num: 'VI', title: 'Governance, Leadership & Management', score: '3.22' },
  { num: 'VII', title: 'Institutional Values & Best Practices', score: '3.15' },
];

const IQAC = () => {
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
            IQAC & NAAC Accreditation
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Internal Quality Assurance Cell — ensuring continuous quality enhancement in academic and administrative processes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* NAAC Status Banner */}
        <section aria-labelledby="naac-status-heading">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Award className="w-12 h-12 text-yellow-300" aria-hidden="true" />
            </div>
            <div>
              <h2 id="naac-status-heading" className="text-2xl font-bold mb-1">NAAC Accreditation Status</h2>
              <p className="text-blue-100 mb-3">
                Accredited by the National Assessment and Accreditation Council (NAAC)
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 rounded-lg px-4 py-2 text-center">
                  <p className="text-3xl font-extrabold text-yellow-300">'A'</p>
                  <p className="text-xs text-blue-100">Grade</p>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 text-center">
                  <p className="text-3xl font-extrabold text-yellow-300">3.15</p>
                  <p className="text-xs text-blue-100">CGPA</p>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 text-center">
                  <p className="text-3xl font-extrabold text-yellow-300">2022</p>
                  <p className="text-xs text-blue-100">Accredited Year</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Criteria-wise Score */}
        <section aria-labelledby="criteria-heading">
          <h2 id="criteria-heading" className="text-2xl font-bold text-slate-800 mb-6">Criteria-wise NAAC Score</h2>
          <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200" role="table">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Criterion</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Score (out of 4)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {criteria.map((c) => (
                  <tr key={c.num} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-blue-600">Criterion {c.num}</td>
                    <td className="px-6 py-4 text-slate-700">{c.title}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-slate-100 rounded-full h-2 max-w-[120px]">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(parseFloat(c.score) / 4) * 100}%` }}
                            role="progressbar"
                            aria-valuenow={parseFloat(c.score)}
                            aria-valuemin={0}
                            aria-valuemax={4}
                            aria-label={`${c.title} score`}
                          ></div>
                        </div>
                        <span className="font-semibold text-slate-800">{c.score}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* IQAC Objectives */}
          <section aria-labelledby="iqac-objectives-heading">
            <h2 id="iqac-objectives-heading" className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" aria-hidden="true" /> IQAC Objectives
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 space-y-4">
              {[
                'Develop a system for conscious, consistent and catalytic action to improve academic and administrative performance.',
                'Promote measures for institutional functioning towards quality enhancement through internalization of quality culture.',
                'Channelize and systematize efforts and measures of an institution towards academic excellence.',
                'Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement.',
                'Internalize the quality culture and institutionalize the best practices.',
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-sm text-slate-600">{obj}</p>
                </div>
              ))}
            </div>
          </section>

          {/* IQAC Members */}
          <section aria-labelledby="iqac-members-heading">
            <h2 id="iqac-members-heading" className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" aria-hidden="true" /> IQAC Members
            </h2>
            <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Name</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Role</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {iqacMembers.map((m) => (
                    <tr key={m.name} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-800">{m.name}</td>
                      <td className="px-4 py-3 text-slate-600">{m.role}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">{m.type}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Documents & Downloads */}
        <section aria-labelledby="naac-docs-heading">
          <h2 id="naac-docs-heading" className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" aria-hidden="true" /> NAAC Documents & Reports
          </h2>
          <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Document Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Academic Year</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {naacDocuments.map((doc, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">{doc.name}</td>
                    <td className="px-6 py-4 text-slate-500">{doc.year}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">{doc.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors focus:outline-none focus:underline"
                        aria-label={`Download ${doc.name} ${doc.year}`}
                      >
                        <Download className="w-4 h-4" aria-hidden="true" /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default IQAC;
