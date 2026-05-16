import { motion } from 'framer-motion';
import { Calendar, Download, Clock } from 'lucide-react';

const calendarData = [
  {
    month: 'June 2026',
    events: [
      { date: 'June 1', event: 'Admission Process Begins', type: 'Admissions' },
      { date: 'June 15', event: 'Anti-Ragging Affidavit Submission Deadline', type: 'Compliance' },
      { date: 'June 30', event: 'Last Date for Online Applications', type: 'Admissions' },
    ],
  },
  {
    month: 'July 2026',
    events: [
      { date: 'July 5', event: 'First Merit List Declaration', type: 'Admissions' },
      { date: 'July 10', event: 'Campus Placement Drive', type: 'Placements' },
      { date: 'July 15', event: 'Document Verification & Counseling', type: 'Admissions' },
      { date: 'July 25', event: 'Orientation Program for New Students', type: 'Academic' },
    ],
  },
  {
    month: 'August 2026',
    events: [
      { date: 'August 1', event: 'Commencement of Classes – Odd Semester', type: 'Academic' },
      { date: 'August 15', event: 'Independence Day Celebration', type: 'Events' },
      { date: 'August 15-17', event: 'NAAC Peer Team Visit', type: 'NAAC' },
      { date: 'August 29', event: 'National Sports Day – Sports Events', type: 'Sports' },
    ],
  },
  {
    month: 'September 2026',
    events: [
      { date: 'September 5', event: "Teacher's Day Celebration", type: 'Events' },
      { date: 'September 15-20', event: 'Internal Assessment – Unit Test I', type: 'Examination' },
      { date: 'September 25', event: 'Annual Cultural Fest – Day 1', type: 'Events' },
      { date: 'September 26', event: 'Annual Cultural Fest – Day 2', type: 'Events' },
    ],
  },
  {
    month: 'October 2026',
    events: [
      { date: 'October 2', event: 'Gandhi Jayanti – Holiday', type: 'Holiday' },
      { date: 'October 10-15', event: 'Internal Assessment – Unit Test II', type: 'Examination' },
      { date: 'October 20', event: 'NSS Special Camp Begins', type: 'NSS' },
    ],
  },
  {
    month: 'November 2026',
    events: [
      { date: 'November 1-5', event: 'Pre-Examination Study Leave', type: 'Examination' },
      { date: 'November 10', event: 'Semester End Examination Begins', type: 'Examination' },
      { date: 'November 30', event: 'Semester End Examination Concludes', type: 'Examination' },
    ],
  },
];

const typeColors = {
  Admissions: 'bg-blue-100 text-blue-700',
  Compliance: 'bg-orange-100 text-orange-700',
  Academic: 'bg-indigo-100 text-indigo-700',
  Placements: 'bg-green-100 text-green-700',
  Events: 'bg-pink-100 text-pink-700',
  NAAC: 'bg-purple-100 text-purple-700',
  Sports: 'bg-cyan-100 text-cyan-700',
  Examination: 'bg-red-100 text-red-700',
  Holiday: 'bg-slate-100 text-slate-600',
  NSS: 'bg-emerald-100 text-emerald-700',
};

const AcademicCalendar = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4 flex items-center gap-3"
          >
            <Calendar className="w-8 h-8 text-blue-400" aria-hidden="true" />
            Academic Calendar 2026-27
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Important dates, events, examinations, and holidays for the academic year 2026-27.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Download Button */}
        <div className="flex justify-end mb-8">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
            <Download className="w-4 h-4" aria-hidden="true" />
            Download Full Calendar PDF
          </button>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">Event Categories</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(typeColors).map(([type, cls]) => (
              <span key={type} className={`px-3 py-1 rounded-full text-xs font-medium ${cls}`}>
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {calendarData.map((month) => (
            <motion.section
              key={month.month}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden"
              aria-labelledby={`month-${month.month.replace(' ', '-')}`}
            >
              <div className="bg-[#0b1b3d] text-white px-6 py-4">
                <h2 id={`month-${month.month.replace(' ', '-')}`} className="font-bold text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  {month.month}
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {month.events.map((event, i) => (
                  <div key={i} className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                    <div className="shrink-0 text-center min-w-[60px]">
                      <p className="text-xs font-bold text-blue-600 uppercase">{event.date.split(' ')[0]}</p>
                      <p className="text-lg font-extrabold text-slate-800 leading-none">
                        {event.date.includes('-') ? event.date.split(' ')[1] : event.date.split(' ')[1]}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm">{event.event}</p>
                      <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[event.type]}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
