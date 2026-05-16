import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import kksuLogo from '../../assets/1000199641.jpg';

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about',
    children: [
      { name: 'Institute Overview',    path: '/about' },
      { name: 'Vision & Mission',      path: '/about#vision' },
      { name: 'Governance',            path: '/about#governance' },
      { name: 'IQAC & NAAC',           path: '/iqac' },
      { name: 'Committees & Policies', path: '/committees' },
    ],
  },
  {
    name: 'Academics',
    path: '/courses',
    children: [
      { name: 'Courses & Programs', path: '/courses' },
      { name: 'Departments',        path: '/departments' },
      { name: 'Faculty',            path: '/faculty' },
      { name: 'Academic Calendar',  path: '/academic-calendar' },
      { name: 'Examination Info',   path: '/examination' },
    ],
  },
  { name: 'Admissions', path: '/admissions' },
  {
    name: 'Student Zone',
    path: '/notices',
    children: [
      { name: 'Notice Board', path: '/notices' },
      { name: 'Downloads',    path: '/downloads' },
      { name: 'Placements',   path: '/placements' },
      { name: 'Gallery',      path: '/gallery' },
    ],
  },
  { name: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
  { name: 'Contact', path: '/contact' },
];

const DropdownMenu = ({ items, onClose }) => (
  <div role="menu" className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl border-t-2 border-[#1B4F8A] border-x border-b border-gray-200 py-1 z-50">
    {items.map((item) => (
      <Link key={item.path} to={item.path} role="menuitem" onClick={onClose}
        className="block px-4 py-2.5 text-sm text-[#1E293B] hover:bg-blue-50 hover:text-[#1B4F8A] transition-colors focus:outline-none focus:bg-blue-50">
        {item.name}
      </Link>
    ))}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null); setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => { setIsOpen(false); setOpenDropdown(null); }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(''); setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-lg" ref={navRef}>

      {/* College banner */}
      <div className="bg-[#1B4F8A] text-white w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">

          {/* Logo + Name */}
          <Link to="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] rounded-lg p-1 min-w-0 flex-1"
            aria-label="Swami Vivekanand College – Home">
            <div className="shrink-0 bg-white rounded-full p-1 shadow-lg border-2 border-[#F59E0B]">
              <img
                src={kksuLogo}
                alt="College Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain rounded-full"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[#F59E0B] text-[10px] sm:text-xs font-semibold leading-tight mb-0.5 line-clamp-2">
                Managed by Shri Shamki Mata Education, Arts, Sports and Health Multipurpose Organization, Akola.
              </p>
              <h1 className="font-extrabold text-sm sm:text-lg md:text-2xl lg:text-3xl leading-tight tracking-wide text-white uppercase">
                Swami Vivekanand College of Arts and Science
              </h1>
              <p className="text-[#BFDBFE] text-[10px] sm:text-xs font-medium tracking-wider mt-0.5 hidden sm:block">
                UGC Recognized &nbsp;•&nbsp; NAAC 'A' Grade &nbsp;•&nbsp; Est. 1995
              </p>
            </div>
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 lg:hidden shrink-0">
            <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Toggle search"
              className="p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B] rounded">
              <Search className="w-5 h-5" aria-hidden="true" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu"
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] rounded">
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <div className="lg:hidden px-3 pb-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, notices, faculty..." aria-label="Search the website" autoFocus
                className="flex-1 px-3 py-2 text-sm bg-white/10 text-white placeholder-[#BFDBFE] border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-[#F59E0B]" />
              <button type="submit"
                className="px-4 py-2 bg-[#2563EB] text-white text-sm font-semibold rounded hover:bg-[#1D4ED8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F59E0B]">
                Go
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Desktop nav bar */}
      <div className="bg-white hidden lg:block border-t border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            <div className="flex items-center">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      aria-expanded={openDropdown === item.name} aria-haspopup="true"
                      className={`flex items-center gap-1 px-3 xl:px-4 py-3.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-inset border-b-2 ${
                        isActive(item.path)
                          ? 'border-[#1B4F8A] text-[#1B4F8A] bg-blue-50'
                          : 'border-transparent text-black hover:text-[#1B4F8A] hover:bg-gray-100 hover:border-[#1B4F8A]'
                      }`}>
                      {item.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                  ) : (
                    <Link to={item.path}
                      className={`block px-3 xl:px-4 py-3.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-inset border-b-2 ${
                        isActive(item.path)
                          ? 'border-[#1B4F8A] text-[#1B4F8A] bg-blue-50'
                          : 'border-transparent text-black hover:text-[#1B4F8A] hover:bg-gray-100 hover:border-[#1B4F8A]'
                      }`}
                      aria-current={isActive(item.path) ? 'page' : undefined}>
                      {item.name}
                    </Link>
                  )}
                  {item.children && openDropdown === item.name && (
                    <DropdownMenu items={item.children} onClose={() => setOpenDropdown(null)} />
                  )}
                </div>
              ))}
            </div>

            {/* Search */}
            <div className="relative py-2 shrink-0">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-1">
                  <input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..." aria-label="Search the website" autoFocus
                    className="w-44 px-3 py-1.5 text-sm bg-white text-black placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]" />
                  <button type="submit" aria-label="Submit search"
                    className="p-1.5 bg-[#1B4F8A] text-white rounded hover:bg-[#163f6e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F59E0B]">
                    <Search className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              ) : (
                <button onClick={() => setSearchOpen(true)} aria-label="Open search"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-black hover:text-[#1B4F8A] border border-gray-300 hover:border-[#1B4F8A] rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]">
                  <Search className="w-4 h-4" aria-hidden="true" /> Search
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav id="mobile-menu" className="lg:hidden bg-[#1B4F8A] border-t border-white/10 max-h-[70vh] overflow-y-auto" aria-label="Mobile Navigation">
          <div className="px-2 pt-2 pb-4 space-y-0.5">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.children ? (
                  <>
                    <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-[#BFDBFE] hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B] rounded">
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 mt-0.5 space-y-0.5 border-l-2 border-[#F59E0B]/50 ml-3">
                        {item.children.map((child) => (
                          <Link key={child.path} to={child.path}
                            onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                            className="block px-3 py-2.5 text-sm text-[#BFDBFE] hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B] rounded">
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.path} onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-[#F59E0B] ${
                      isActive(item.path) ? 'bg-[#2563EB] text-white' : 'text-[#BFDBFE] hover:bg-white/10 hover:text-white'
                    }`}
                    aria-current={isActive(item.path) ? 'page' : undefined}>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
