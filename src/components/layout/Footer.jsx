import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, GraduationCap } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t-4 border-[#1B4F8A]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Institute Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#1a1a1a]/10 border border-[#1a1a1a]/30 p-2.5 rounded-lg shrink-0">
                <GraduationCap className="h-7 w-7 text-[#1a1a1a]" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-[#1a1a1a] text-sm font-bold leading-tight uppercase tracking-wide">
                  Swami Vivekanand College
                </h2>
                <span className="text-[#1a1a1a] text-xs font-medium">of Arts and Science</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-[#1a1a1a]">
              Empowering students through quality education, holistic development, and a commitment
              to excellence since 1995. UGC Recognized under Section 2(f) &amp; 12(B).
            </p>
            <address className="not-italic space-y-2.5 text-sm text-[#1a1a1a]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1a1a1a] mt-0.5 shrink-0" aria-hidden="true" />
                <span>123 Knowledge Avenue, Education Hub, City, State – 123456</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1a1a1a] shrink-0" aria-hidden="true" />
                <a href="tel:+911234567890" className="hover:text-[#1a1a1a] transition-colors">+91 123 456 7890</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1a1a1a] shrink-0" aria-hidden="true" />
                <a href="mailto:info@svcollege.edu.in" className="hover:text-[#1a1a1a] transition-colors">info@svcollege.edu.in</a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#1a1a1a] text-xs font-bold mb-4 uppercase tracking-widest border-b border-[#1a1a1a]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us',          path: '/about' },
                { label: 'Academic Programs', path: '/courses' },
                { label: 'Departments',       path: '/departments' },
                { label: 'Faculty',           path: '/faculty' },
                { label: 'Admission 2026',    path: '/admissions' },
                { label: 'Placement Cell',    path: '/placements' },
                { label: 'Gallery',           path: '/gallery' },
                { label: 'Contact Us',        path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path}
                        className="text-[#1a1a1a] hover:text-[#1a1a1a] hover:pl-1 transition-all focus:outline-none focus:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UGC & Compliance */}
          <div>
            <h3 className="text-[#1a1a1a] text-xs font-bold mb-4 uppercase tracking-widest border-b border-[#1a1a1a]/30 pb-2">
              UGC &amp; Compliance
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Mandatory Disclosure',  path: '/mandatory-disclosure' },
                { label: 'IQAC / NAAC Reports',   path: '/iqac' },
                { label: 'Anti-Ragging Cell',      path: '/mandatory-disclosure#anti-ragging' },
                { label: 'Grievance Redressal',    path: '/mandatory-disclosure#grievance' },
                { label: 'RTI Information',        path: '/mandatory-disclosure#rti' },
                { label: 'Committees & Policies',  path: '/committees' },
                { label: 'Examination Info',       path: '/examination' },
                { label: 'Downloads',              path: '/downloads' },
              ].map((l) => (
                <li key={l.path + l.label}>
                  <Link to={l.path}
                        className="text-[#1a1a1a] hover:text-[#1a1a1a] hover:pl-1 transition-all focus:outline-none focus:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="text-[#1a1a1a] text-xs font-bold mb-4 uppercase tracking-widest border-b border-[#1a1a1a]/30 pb-2">
              Portals
            </h3>
            <ul className="space-y-2 text-sm mb-5">
              {[
                { label: 'Student ERP',    href: '#' },
                { label: 'Faculty Portal', href: '#' },
                { label: 'Alumni Network', href: '#' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href}
                     className="flex items-center gap-1.5 text-[#1a1a1a] hover:text-[#1a1a1a] transition-colors focus:outline-none focus:underline">
                    {l.label} <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-[#1a1a1a] text-xs font-bold mb-3 uppercase tracking-widest border-b border-[#1a1a1a]/30 pb-2">
              Government Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'UGC Website',      href: 'https://www.ugc.gov.in' },
                { label: 'NAAC Website',     href: 'https://www.naac.gov.in' },
                { label: 'NSP Scholarships', href: 'https://scholarships.gov.in' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-1.5 text-[#1a1a1a] hover:text-[#1a1a1a] transition-colors focus:outline-none focus:underline">
                    {l.label} <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a]/30 text-xs text-[#1a1a1a]
                        flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {year} Swami Vivekanand College of Arts and Science. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'Privacy Policy',  path: '/privacy' },
              { label: 'Terms of Use',    path: '/terms' },
              { label: 'Accessibility',   path: '/accessibility' },
              { label: 'Sitemap',         path: '/sitemap' },
            ].map((l) => (
              <Link key={l.path} to={l.path}
                    className="hover:text-[#1a1a1a] transition-colors focus:outline-none focus:underline">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
