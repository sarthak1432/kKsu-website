import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, FileText, BookOpen, Users, Bell, Download } from 'lucide-react';
import SEO from '../components/SEO';

// Searchable content index
const searchIndex = [
  { title: 'About Us – Institute Overview', path: '/about', category: 'About', keywords: 'about institute overview vision mission history established' },
  { title: 'IQAC & NAAC Accreditation', path: '/iqac', category: 'NAAC', keywords: 'iqac naac accreditation ssr aqar grade cgpa quality' },
  { title: 'Courses & Academic Programs', path: '/courses', category: 'Academics', keywords: 'courses programs bsc bca bcom ba msc mcom bba ug pg' },
  { title: 'Departments', path: '/departments', category: 'Academics', keywords: 'departments computer science mathematics physics chemistry humanities commerce library' },
  { title: 'Faculty & Staff', path: '/faculty', category: 'Faculty', keywords: 'faculty staff professor lecturer teacher hod principal' },
  { title: 'Admission Process 2026-27', path: '/admissions', category: 'Admissions', keywords: 'admission apply application form fee merit list 2026' },
  { title: 'Fee Structure', path: '/admissions', category: 'Admissions', keywords: 'fee structure annual tuition charges payment' },
  { title: 'Scholarships', path: '/admissions', category: 'Admissions', keywords: 'scholarship nsp post matric merit reserved category' },
  { title: 'Placements & Training', path: '/placements', category: 'Placements', keywords: 'placement training job campus drive recruiter company package' },
  { title: 'Notice Board', path: '/notices', category: 'Notices', keywords: 'notice circular announcement important update' },
  { title: 'Downloads', path: '/downloads', category: 'Downloads', keywords: 'download pdf form document prospectus syllabus' },
  { title: 'Gallery', path: '/gallery', category: 'Gallery', keywords: 'gallery photo image event campus sports cultural' },
  { title: 'Academic Calendar 2026-27', path: '/academic-calendar', category: 'Academics', keywords: 'calendar schedule dates events holidays examination' },
  { title: 'Examination Information', path: '/examination', category: 'Examination', keywords: 'exam examination timetable hall ticket result revaluation' },
  { title: 'Mandatory Disclosure', path: '/mandatory-disclosure', category: 'Compliance', keywords: 'mandatory disclosure ugc compliance transparency' },
  { title: 'Anti-Ragging Cell', path: '/mandatory-disclosure#anti-ragging', category: 'Compliance', keywords: 'anti ragging cell helpline policy committee' },
  { title: 'Grievance Redressal', path: '/mandatory-disclosure#grievance', category: 'Compliance', keywords: 'grievance redressal complaint student staff' },
  { title: 'RTI Information', path: '/mandatory-disclosure#rti', category: 'Compliance', keywords: 'rti right information act pio public officer' },
  { title: 'Committees & Policies', path: '/committees', category: 'Compliance', keywords: 'committees icc sc st nss cultural sports policy' },
  { title: 'Contact Us', path: '/contact', category: 'Contact', keywords: 'contact address phone email location map' },
];

const categoryIcons = {
  About: BookOpen,
  NAAC: FileText,
  Academics: BookOpen,
  Faculty: Users,
  Admissions: FileText,
  Placements: Users,
  Notices: Bell,
  Downloads: Download,
  Gallery: FileText,
  Examination: FileText,
  Compliance: FileText,
  Contact: FileText,
};

const categoryColors = {
  About: 'bg-blue-100 text-blue-700',
  NAAC: 'bg-purple-100 text-purple-700',
  Academics: 'bg-indigo-100 text-indigo-700',
  Faculty: 'bg-green-100 text-green-700',
  Admissions: 'bg-orange-100 text-orange-700',
  Placements: 'bg-emerald-100 text-emerald-700',
  Notices: 'bg-red-100 text-red-700',
  Downloads: 'bg-slate-100 text-slate-700',
  Gallery: 'bg-pink-100 text-pink-700',
  Examination: 'bg-yellow-100 text-yellow-700',
  Compliance: 'bg-cyan-100 text-cyan-700',
  Contact: 'bg-teal-100 text-teal-700',
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    setQuery(q);
    if (q.trim()) {
      const lower = q.toLowerCase();
      const found = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(lower) ||
          item.keywords.toLowerCase().includes(lower) ||
          item.category.toLowerCase().includes(lower)
      );
      setResults(found);
    } else {
      setResults([]);
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const currentQuery = searchParams.get('q') || '';

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <SEO
        title="Search"
        description="Search for courses, faculty, admissions, notices, downloads, and more on the Swami Vivekanand College website."
        keywords="college search, find courses, search faculty, search notices"
        canonical="/search"
        noIndex={true}
      />
      {/* Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-6">Search</h1>
          <form onSubmit={handleSearch} role="search" className="flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses, faculty, notices, downloads..."
                aria-label="Search the website"
                className="w-full pl-10 pr-4 py-3 bg-white text-slate-800 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {currentQuery ? (
          <>
            <p className="text-slate-600 mb-6">
              {results.length > 0
                ? `Found ${results.length} result${results.length !== 1 ? 's' : ''} for `
                : 'No results found for '}
              <strong className="text-slate-800">"{currentQuery}"</strong>
            </p>

            {results.length > 0 ? (
              <div className="space-y-4" role="list" aria-label="Search results">
                {results.map((result, i) => {
                  const Icon = categoryIcons[result.category] || FileText;
                  return (
                    <Link
                      key={i}
                      to={result.path}
                      role="listitem"
                      className="flex items-start gap-4 bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md hover:border-blue-200 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-800 text-base">{result.title}</h3>
                        <p className="text-sm text-blue-600 mt-0.5">{result.path}</p>
                      </div>
                      <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[result.category]}`}>
                        {result.category}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <SearchIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" aria-hidden="true" />
                <p className="text-xl font-semibold text-slate-600 mb-2">No results found</p>
                <p className="text-slate-400 mb-6">Try different keywords or browse the sections below</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Admissions', 'Courses', 'Faculty', 'Notices', 'Downloads'].map((s) => (
                    <button
                      key={s}
                      onClick={() => { setQuery(s); setSearchParams({ q: s }); }}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" aria-hidden="true" />
            <p className="text-xl font-semibold text-slate-600 mb-2">What are you looking for?</p>
            <p className="text-slate-400 mb-8">Search for courses, faculty, notices, downloads, and more</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Admissions 2026', 'NAAC', 'Fee Structure', 'Faculty', 'Exam Timetable', 'Scholarships', 'Placements'].map((s) => (
                <button
                  key={s}
                  onClick={() => { setQuery(s); setSearchParams({ q: s }); }}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
