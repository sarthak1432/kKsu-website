import { motion } from 'framer-motion';
import { FileText, Calendar, AlertCircle, Download, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const examSchedule = [
  { program: 'B.Sc. IT – Semester IV', date: 'Nov 10, 2026', time: '10:00 AM', venue: 'Block A, Hall 1' },
  { program: 'B.Sc. IT – Semester II', date: 'Nov 11, 2026', time: '10:00 AM', venue: 'Block A, Hall 2' },
  { program: 'B.A. – Semester IV', date: 'Nov 12, 2026', time: '10:00 AM', venue: 'Block B, Hall 1' },
  { program: 'B.A. – Semester II', date: 'Nov 13, 2026', time: '10:00 AM', venue: 'Block B, Hall 2' },
  { program: 'B.Com – Semester IV', date: 'Nov 14, 2026', time: '10:00 AM', venue: 'Block C, Hall 1' },
  { program: 'B.Com – Semester II', date: 'Nov 15, 2026', time: '10:00 AM', venue: 'Block C, Hall 2' },
  { program: 'M.Sc. CS – Semester II', date: 'Nov 17, 2026', time: '10:00 AM', venue: 'Block A, Hall 3' },
  { program: 'M.Com – Semester II', date: 'Nov 18, 2026', time: '10:00 AM', venue: 'Block C, Hall 3' },
];

const Examination = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <SEO
        title="Examination Information"
        description="Examination timetables, hall tickets, results, and guidelines for all UG and PG programs at Swami Vivekanand College of Arts and Science."
        keywords="college examination, exam timetable, hall ticket, exam results, semester exam schedule, university exam"
        canonical="/examination"
      />
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Examination Information
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Timetables, hall tickets, results, and examination-related guidelines for all programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 flex items-start gap-3" role="alert">
          <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-bold text-yellow-800">Important Notice</p>
            <p className="text-sm text-yellow-700 mt-1">
              Semester End Examinations for November 2026 are scheduled from November 10 to November 30, 2026.
              Students must carry their Hall Ticket and College ID card to the examination hall.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Exam Schedule */}
          <div className="lg:col-span-2">
            <section aria-labelledby="exam-schedule-heading">
              <h2 id="exam-schedule-heading" className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-600" aria-hidden="true" />
                Examination Schedule – November 2026
              </h2>
              <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Program</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase hidden sm:table-cell">Time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase hidden md:table-cell">Venue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {examSchedule.map((exam, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-800">{exam.program}</td>
                        <td className="px-6 py-4 text-slate-600">{exam.date}</td>
                        <td className="px-6 py-4 text-slate-600 hidden sm:table-cell">{exam.time}</td>
                        <td className="px-6 py-4 text-slate-600 hidden md:table-cell">{exam.venue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <section className="bg-white rounded-xl shadow-md border border-slate-100 p-6" aria-labelledby="exam-links-heading">
              <h3 id="exam-links-heading" className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  'Download Hall Ticket',
                  'Check Exam Results',
                  'Apply for Revaluation',
                  'Download Mark Sheet',
                  'Exam Fee Payment',
                ].map((link) => (
                  <li key={link}>
                    <button className="w-full text-left flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium p-2 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <CheckCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* Downloads */}
            <section className="bg-white rounded-xl shadow-md border border-slate-100 p-6" aria-labelledby="exam-downloads-heading">
              <h3 id="exam-downloads-heading" className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-600" aria-hidden="true" />
                Downloads
              </h3>
              <ul className="space-y-3">
                {[
                  'Exam Timetable PDF',
                  'Examination Rules & Regulations',
                  'Revaluation Application Form',
                  'Photocopy Application Form',
                ].map((doc) => (
                  <li key={doc}>
                    <button
                      className="w-full text-left flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label={`Download ${doc}`}
                    >
                      <FileText className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" />
                      {doc}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Examination Rules */}
        <section className="bg-white rounded-xl shadow-md border border-slate-100 p-8" aria-labelledby="exam-rules-heading">
          <h2 id="exam-rules-heading" className="text-2xl font-bold text-slate-800 mb-6">Examination Rules & Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-3 text-green-700">Do's</h3>
              <ul className="space-y-2">
                {[
                  'Carry Hall Ticket and College ID to every exam',
                  'Report to the examination hall 15 minutes before',
                  'Write your roll number on every answer sheet',
                  'Follow the seating arrangement as displayed',
                  'Maintain silence throughout the examination',
                ].map((rule) => (
                  <li key={rule} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3 text-red-700">Don'ts</h3>
              <ul className="space-y-2">
                {[
                  'Do not carry mobile phones or electronic devices',
                  'Do not use unfair means or cheat sheets',
                  'Do not communicate with other students during exam',
                  'Do not leave the hall without permission',
                  'Do not write on question papers',
                ].map((rule) => (
                  <li key={rule} className="flex items-start gap-2 text-sm text-slate-600">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" aria-hidden="true" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Examination;
