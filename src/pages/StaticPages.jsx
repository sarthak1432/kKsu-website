// Privacy Policy, Terms of Use, Accessibility Statement, Sitemap
import { Link } from 'react-router-dom';
import { Shield, FileText, Eye, Map } from 'lucide-react';

export const Privacy = () => (
  <div className="w-full bg-slate-50 min-h-screen pb-16">
    <div className="bg-[#0b1b3d] text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold mb-2 flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-400" aria-hidden="true" /> Privacy Policy
        </h1>
        <p className="text-slate-300">Last updated: May 2026</p>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8 prose max-w-none text-slate-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-slate-800">Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out an admission form, contact us, or subscribe to notices. This may include your name, email address, phone number, and academic details.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-800">How We Use Your Information</h2>
          <p>We use the information we collect to process admissions, communicate important notices, respond to inquiries, and comply with legal obligations under UGC and government regulations.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-800">Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-800">Contact</h2>
          <p>For privacy-related queries, contact us at <a href="mailto:privacy@svcollege.edu.in" className="text-blue-600 hover:underline">privacy@svcollege.edu.in</a></p>
        </section>
      </div>
    </div>
  </div>
);

export const Terms = () => (
  <div className="w-full bg-slate-50 min-h-screen pb-16">
    <div className="bg-[#0b1b3d] text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold mb-2 flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-400" aria-hidden="true" /> Terms of Use
        </h1>
        <p className="text-slate-300">Last updated: May 2026</p>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8 prose max-w-none text-slate-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-slate-800">Acceptance of Terms</h2>
          <p>By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-800">Use of Content</h2>
          <p>All content on this website is the property of Swami Vivekanand College of Arts and Science. You may not reproduce, distribute, or create derivative works without prior written permission.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-800">Disclaimer</h2>
          <p>The information on this website is provided in good faith. The institution reserves the right to modify any information, including fee structures and admission criteria, as per government and university directives.</p>
        </section>
      </div>
    </div>
  </div>
);

export const Accessibility = () => (
  <div className="w-full bg-slate-50 min-h-screen pb-16">
    <div className="bg-[#0b1b3d] text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold mb-2 flex items-center gap-3">
          <Eye className="w-8 h-8 text-blue-400" aria-hidden="true" /> Accessibility Statement
        </h1>
        <p className="text-slate-300">Committed to WCAG 2.1 AA compliance</p>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8 space-y-6 text-slate-700">
        <p>Swami Vivekanand College of Arts and Science is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.</p>
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">Conformance Status</h2>
          <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as recommended by UGC and GIGW (Guidelines for Indian Government Websites).</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">Accessibility Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Skip to main content link for keyboard users</li>
            <li>All images have descriptive alt text</li>
            <li>Sufficient color contrast ratios throughout</li>
            <li>Keyboard navigable menus and forms</li>
            <li>ARIA labels and roles on interactive elements</li>
            <li>Responsive design for all screen sizes</li>
            <li>Semantic HTML structure with proper headings</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">Feedback</h2>
          <p>If you experience accessibility barriers, please contact us at <a href="mailto:accessibility@svcollege.edu.in" className="text-blue-600 hover:underline">accessibility@svcollege.edu.in</a></p>
          <p className="text-sm text-slate-500 mt-2">Note: Full WCAG validation requires manual testing with assistive technologies and expert accessibility review.</p>
        </section>
      </div>
    </div>
  </div>
);

export const Sitemap = () => {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Academics',
      links: [
        { name: 'Courses & Programs', path: '/courses' },
        { name: 'Departments', path: '/departments' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Academic Calendar', path: '/academic-calendar' },
        { name: 'Examination Information', path: '/examination' },
      ],
    },
    {
      title: 'Admissions',
      links: [
        { name: 'Admission Process', path: '/admissions' },
        { name: 'Fee Structure', path: '/admissions' },
        { name: 'Scholarships', path: '/admissions' },
      ],
    },
    {
      title: 'Student Zone',
      links: [
        { name: 'Notice Board', path: '/notices' },
        { name: 'Downloads', path: '/downloads' },
        { name: 'Placements', path: '/placements' },
        { name: 'Gallery', path: '/gallery' },
      ],
    },
    {
      title: 'UGC & Compliance',
      links: [
        { name: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
        { name: 'IQAC & NAAC', path: '/iqac' },
        { name: 'Committees & Policies', path: '/committees' },
        { name: 'Anti-Ragging Cell', path: '/mandatory-disclosure#anti-ragging' },
        { name: 'Grievance Redressal', path: '/mandatory-disclosure#grievance' },
        { name: 'RTI Information', path: '/mandatory-disclosure#rti' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Use', path: '/terms' },
        { name: 'Accessibility Statement', path: '/accessibility' },
      ],
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold mb-2 flex items-center gap-3">
            <Map className="w-8 h-8 text-blue-400" aria-hidden="true" /> Sitemap
          </h1>
          <p className="text-slate-300">Complete directory of all pages on this website</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="font-bold text-slate-800 text-base mb-4 pb-2 border-b border-slate-100">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors focus:outline-none focus:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
