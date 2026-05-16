import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Search, FolderOpen } from 'lucide-react';
import SEO from '../components/SEO';

const downloadCategories = [
  {
    id: 'admissions',
    label: 'Admissions',
    color: 'blue',
    files: [
      { name: 'Admission Prospectus 2026-27', size: '2.4 MB', type: 'PDF', date: '2026-05-01' },
      { name: 'Application Form (UG Programs)', size: '0.8 MB', type: 'PDF', date: '2026-05-01' },
      { name: 'Application Form (PG Programs)', size: '0.9 MB', type: 'PDF', date: '2026-05-01' },
      { name: 'Detailed Fee Structure 2026-27', size: '0.5 MB', type: 'PDF', date: '2026-04-20' },
      { name: 'Reservation Policy Guidelines', size: '0.3 MB', type: 'PDF', date: '2026-04-15' },
    ],
  },
  {
    id: 'examination',
    label: 'Examination',
    color: 'red',
    files: [
      { name: 'Semester End Exam Timetable – May 2026', size: '1.2 MB', type: 'PDF', date: '2026-05-08' },
      { name: 'Examination Rules & Regulations', size: '0.6 MB', type: 'PDF', date: '2026-01-10' },
      { name: 'Hall Ticket Download Instructions', size: '0.2 MB', type: 'PDF', date: '2026-05-01' },
      { name: 'Revaluation Application Form', size: '0.3 MB', type: 'PDF', date: '2026-01-10' },
    ],
  },
  {
    id: 'naac',
    label: 'NAAC & IQAC',
    color: 'purple',
    files: [
      { name: 'Self Study Report (SSR) 2024-25', size: '15.2 MB', type: 'PDF', date: '2025-10-01' },
      { name: 'AQAR Report 2023-24', size: '8.5 MB', type: 'PDF', date: '2024-09-30' },
      { name: 'AQAR Report 2022-23', size: '7.8 MB', type: 'PDF', date: '2023-09-30' },
      { name: 'Annual Report 2023-24', size: '5.2 MB', type: 'PDF', date: '2024-06-30' },
      { name: 'Best Practices Document', size: '2.1 MB', type: 'PDF', date: '2024-01-15' },
    ],
  },
  {
    id: 'academic',
    label: 'Academic',
    color: 'green',
    files: [
      { name: 'Academic Calendar 2026-27', size: '0.8 MB', type: 'PDF', date: '2026-04-20' },
      { name: 'Syllabus – B.Sc. IT (Revised)', size: '3.5 MB', type: 'PDF', date: '2026-01-05' },
      { name: 'Syllabus – B.A. (All Subjects)', size: '4.2 MB', type: 'PDF', date: '2026-01-05' },
      { name: 'Syllabus – B.Com', size: '2.8 MB', type: 'PDF', date: '2026-01-05' },
      { name: 'Research Publication Guidelines', size: '0.4 MB', type: 'PDF', date: '2025-08-01' },
    ],
  },
  {
    id: 'compliance',
    label: 'UGC & Compliance',
    color: 'orange',
    files: [
      { name: 'Mandatory Disclosure (UGC Format)', size: '1.8 MB', type: 'PDF', date: '2026-04-01' },
      { name: 'Anti-Ragging Policy & Committee', size: '0.5 MB', type: 'PDF', date: '2026-04-01' },
      { name: 'Grievance Redressal Policy', size: '0.4 MB', type: 'PDF', date: '2026-04-01' },
      { name: 'RTI – Section 4(1)(b) Declaration', size: '1.2 MB', type: 'PDF', date: '2026-04-01' },
      { name: 'Annual Audited Accounts 2024-25', size: '3.6 MB', type: 'PDF', date: '2025-12-31' },
      { name: 'SC/ST/OBC Reservation Policy', size: '0.3 MB', type: 'PDF', date: '2026-01-01' },
    ],
  },
  {
    id: 'scholarships',
    label: 'Scholarships',
    color: 'yellow',
    files: [
      { name: 'Scholarship Application Form 2026-27', size: '0.6 MB', type: 'PDF', date: '2026-05-01' },
      { name: 'NSP Scholarship Guidelines', size: '0.8 MB', type: 'PDF', date: '2026-04-15' },
      { name: 'Merit Scholarship Criteria', size: '0.3 MB', type: 'PDF', date: '2026-04-01' },
    ],
  },
];

const colorMap = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  green: 'bg-green-50 text-green-700 border-green-200',
  orange: 'bg-orange-50 text-orange-700 border-orange-200',
  yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
};

const Downloads = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const filteredCategories = downloadCategories
    .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      files: cat.files.filter((f) =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.files.length > 0);

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <SEO
        title="Downloads"
        description="Download admission forms, prospectus, fee structure, scholarship forms, examination timetables, and other important documents from Swami Vivekanand College."
        keywords="college downloads, admission form download, prospectus PDF, fee structure download, scholarship form, exam timetable download"
        canonical="/downloads"
      />
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-extrabold mb-4"
          >
            Downloads
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Access and download all important documents, forms, reports, and policies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents..."
              aria-label="Search downloadable documents"
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <button
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            {downloadCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  activeCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Document Sections */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <FolderOpen className="w-12 h-12 mx-auto mb-3 opacity-30" aria-hidden="true" />
            <p className="text-lg font-medium">No documents found</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredCategories.map((cat) => (
              <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
                <h2
                  id={`cat-${cat.id}`}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4 border ${colorMap[cat.color]}`}
                >
                  <FolderOpen className="w-4 h-4" aria-hidden="true" />
                  {cat.label}
                </h2>
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                  <table className="min-w-full divide-y divide-slate-100">
                    <thead className="bg-slate-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Document Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase hidden sm:table-cell">Type</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase hidden md:table-cell">Size</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase hidden md:table-cell">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {cat.files.map((file, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" />
                              <span className="font-medium text-slate-800">{file.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 hidden sm:table-cell">
                            <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded font-medium">{file.type}</span>
                          </td>
                          <td className="px-6 py-4 text-slate-500 hidden md:table-cell">{file.size}</td>
                          <td className="px-6 py-4 text-slate-500 hidden md:table-cell">{formatDate(file.date)}</td>
                          <td className="px-6 py-4">
                            <button
                              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium transition-colors focus:outline-none focus:underline"
                              aria-label={`Download ${file.name}`}
                            >
                              <Download className="w-4 h-4" aria-hidden="true" />
                              <span className="hidden sm:inline">Download</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Downloads;
