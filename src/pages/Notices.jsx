import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Tag, Search, Download } from 'lucide-react';

const allNotices = [
  {
    id: 1,
    title: 'Admission 2026-27 Online Application Process Started',
    date: '2026-05-15',
    category: 'Admissions',
    important: true,
    description: 'Online applications for UG and PG programs for the academic year 2026-27 are now open. Last date to apply is June 30, 2026.',
    attachment: true,
  },
  {
    id: 2,
    title: 'NAAC Peer Team Visit – August 15-17, 2026',
    date: '2026-05-10',
    category: 'NAAC',
    important: true,
    description: 'The NAAC Peer Team is scheduled to visit the institution from August 15-17, 2026 for re-accreditation assessment.',
    attachment: false,
  },
  {
    id: 3,
    title: 'Semester End Examination Schedule – May 2026',
    date: '2026-05-08',
    category: 'Examination',
    important: true,
    description: 'The semester end examination schedule for all UG and PG programs has been released. Students are advised to check the timetable.',
    attachment: true,
  },
  {
    id: 4,
    title: 'Campus Placement Drive – TCS, Infosys, Wipro',
    date: '2026-05-05',
    category: 'Placements',
    important: false,
    description: 'Campus placement drive by TCS, Infosys, and Wipro scheduled for July 10, 2026. Eligible students must register by June 25.',
    attachment: true,
  },
  {
    id: 5,
    title: 'Anti-Ragging Affidavit Submission – Mandatory',
    date: '2026-05-01',
    category: 'Anti-Ragging',
    important: true,
    description: 'All students must submit the anti-ragging affidavit online before June 15, 2026. Non-submission will result in cancellation of admission.',
    attachment: true,
  },
  {
    id: 6,
    title: 'National Scholarship Portal (NSP) Applications Open',
    date: '2026-04-28',
    category: 'Scholarships',
    important: false,
    description: 'Applications for Post Matric Scholarships on the National Scholarship Portal are now open. Eligible students should apply before the deadline.',
    attachment: false,
  },
  {
    id: 7,
    title: 'Academic Calendar 2026-27 Released',
    date: '2026-04-20',
    category: 'Academic',
    important: false,
    description: 'The academic calendar for the year 2026-27 has been released. It includes all important dates for examinations, holidays, and events.',
    attachment: true,
  },
  {
    id: 8,
    title: 'Internal Assessment Marks Submission Deadline',
    date: '2026-04-15',
    category: 'Examination',
    important: false,
    description: 'Faculty members are requested to submit internal assessment marks for all subjects by April 30, 2026.',
    attachment: false,
  },
  {
    id: 9,
    title: 'Annual Sports Meet – Registration Open',
    date: '2026-04-10',
    category: 'Events',
    important: false,
    description: 'Registration for the Annual Sports Meet 2026 is now open. Students can register for various sports events through the student portal.',
    attachment: false,
  },
  {
    id: 10,
    title: 'Fee Payment Deadline – Second Semester',
    date: '2026-04-05',
    category: 'Finance',
    important: true,
    description: 'Last date for second semester fee payment is April 30, 2026. Late fee will be charged after the deadline.',
    attachment: false,
  },
];

const categories = ['All', ...new Set(allNotices.map((n) => n.category))];

const categoryColors = {
  Admissions: 'bg-blue-100 text-blue-700',
  NAAC: 'bg-purple-100 text-purple-700',
  Examination: 'bg-red-100 text-red-700',
  Placements: 'bg-green-100 text-green-700',
  'Anti-Ragging': 'bg-orange-100 text-orange-700',
  Scholarships: 'bg-yellow-100 text-yellow-700',
  Academic: 'bg-indigo-100 text-indigo-700',
  Events: 'bg-pink-100 text-pink-700',
  Finance: 'bg-emerald-100 text-emerald-700',
};

const Notices = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const filtered = allNotices.filter((n) => {
    const matchCat = activeCategory === 'All' || n.category === activeCategory;
    const matchSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchImportant = !showImportantOnly || n.important;
    return matchCat && matchSearch && matchImportant;
  });

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

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
            <Bell className="w-8 h-8 text-yellow-400" aria-hidden="true" />
            Notice Board
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Stay updated with the latest announcements, circulars, and important notices from the institution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notices..."
              aria-label="Search notices"
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Important toggle */}
          <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer shrink-0">
            <input
              type="checkbox"
              checked={showImportantOnly}
              onChange={(e) => setShowImportantOnly(e.target.checked)}
              className="w-4 h-4 accent-red-600"
            />
            Important Only
          </label>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notices List */}
        <div className="space-y-4" role="list" aria-label="Notices list">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" aria-hidden="true" />
              <p className="text-lg font-medium">No notices found</p>
              <p className="text-sm mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            filtered.map((notice) => (
              <motion.article
                key={notice.id}
                role="listitem"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow ${
                  notice.important ? 'border-l-4 border-l-red-500 border-slate-100' : 'border-slate-100'
                }`}
                aria-label={notice.title}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {notice.important && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase tracking-wide">
                          Important
                        </span>
                      )}
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${categoryColors[notice.category] || 'bg-slate-100 text-slate-600'}`}>
                        <Tag className="w-3 h-3 inline mr-1" aria-hidden="true" />
                        {notice.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-base mb-2">{notice.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{notice.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        {formatDate(notice.date)}
                      </span>
                    </div>
                  </div>
                  {notice.attachment && (
                    <button
                      className="shrink-0 flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label={`Download attachment for ${notice.title}`}
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      Download
                    </button>
                  )}
                </div>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notices;
