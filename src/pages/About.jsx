import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, BookOpen, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Institute Overview', icon: Building2 },
    { id: 'governance', label: 'Governance & Administration', icon: Users },
    { id: 'iqac', label: 'IQAC & NAAC', icon: Award },
    { id: 'facilities', label: 'Student Support Facilities', icon: BookOpen }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <SEO
        title="About Us"
        description="Learn about Swami Vivekanand College of Arts and Science – our history, vision, mission, governance, IQAC, NAAC accreditation and student support facilities."
        keywords="about college, college history, vision mission, NAAC accreditation, college governance, IQAC"
        canonical="/about"
      />
      {/* Page Header */}
      <div className="bg-[#0b1b3d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold mb-4"
          >
            About Us & NAAC Data
          </motion.h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            A premier institution dedicated to academic excellence, research, and holistic student development, accredited with an 'A' grade by NAAC.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md border border-slate-100 p-2 sticky top-24">
              <nav className="flex flex-col space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                      aria-current={activeTab === tab.id ? 'page' : undefined}
                    >
                      <Icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-blue-600' : 'text-slate-400'}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md border border-slate-100 p-8"
            >
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Institute Overview</h2>
                  <div className="prose max-w-none text-slate-600 space-y-4">
                    <p>
                      Established in 1995, Swami Vivekanand College of Arts and Science has been a beacon of knowledge and excellence in higher education. Affiliated with the State University and recognized by the University Grants Commission (UGC) under section 2(f) & 12(B), our institution strives to impart quality education.
                    </p>
                    <p>
                      <strong>Our Vision:</strong> To be a center of excellence in higher education, fostering intellectual growth, moral values, and social responsibility.
                    </p>
                    <p>
                      <strong>Our Mission:</strong> 
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>To provide state-of-the-art infrastructure and a conducive academic environment.</li>
                      <li>To promote research, innovation, and critical thinking among students and faculty.</li>
                      <li>To ensure holistic development through co-curricular and extra-curricular activities.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'governance' && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Governance & Administration</h2>
                  <p className="text-slate-600 mb-6">
                    Our administrative structure ensures transparency, accountability, and participatory decision-making in line with UGC norms.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-2">Governing Body</h3>
                      <p className="text-sm text-slate-600 mb-4">The supreme policy-making body responsible for the overall strategic direction.</p>
                      <ul className="text-sm space-y-2 text-slate-700">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Dr. A. Sharma (Chairman)</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Prof. M. Gupta (UGC Nominee)</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Dr. K. Patel (Principal & Ex-officio)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-2">Academic Council</h3>
                      <p className="text-sm text-slate-600 mb-4">Responsible for academic regulations, curriculum approval, and evaluation methods.</p>
                      <ul className="text-sm space-y-2 text-slate-700">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> All Heads of Departments</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> University Representatives</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Industry Experts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'iqac' && (
                <div id="iqac">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Internal Quality Assurance Cell (IQAC) & NAAC</h2>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <Award className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-bold text-slate-800">NAAC Accreditation Status</h3>
                    </div>
                    <p className="text-slate-700">
                      We are proud to be accredited by the National Assessment and Accreditation Council (NAAC) with an <strong>'A' Grade</strong> (CGPA: 3.15).
                    </p>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-4">IQAC Objectives</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
                    <li>To develop a system for conscious, consistent and catalytic action to improve academic and administrative performance.</li>
                    <li>To promote measures for institutional functioning towards quality enhancement through internalization of quality culture.</li>
                  </ul>

                  <h3 className="text-lg font-bold text-slate-800 mb-4">NAAC Documents & Reports</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Document Name</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Academic Year</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm">
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">Self Study Report (SSR)</td>
                          <td className="px-6 py-4 text-slate-500">2024-2025</td>
                          <td className="px-6 py-4"><button className="text-blue-600 hover:text-blue-900 font-medium focus:underline">View PDF</button></td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">AQAR Report</td>
                          <td className="px-6 py-4 text-slate-500">2023-2024</td>
                          <td className="px-6 py-4"><button className="text-blue-600 hover:text-blue-900 font-medium focus:underline">View PDF</button></td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium text-slate-900">AQAR Report</td>
                          <td className="px-6 py-4 text-slate-500">2022-2023</td>
                          <td className="px-6 py-4"><button className="text-blue-600 hover:text-blue-900 font-medium focus:underline">View PDF</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'facilities' && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Student Support Facilities</h2>
                  <p className="text-slate-600 mb-6">
                    We provide a comprehensive ecosystem of support services to ensure the well-being and academic success of our students.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-800">Central Library</h4>
                      <p className="text-sm text-slate-600 mt-1">Over 50,000 volumes, e-journals, and reading rooms available 24/7.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-800">Hostel Accommodation</h4>
                      <p className="text-sm text-slate-600 mt-1">Separate safe and secure hostels for boys and girls with modern amenities.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-800">Sports Complex</h4>
                      <p className="text-sm text-slate-600 mt-1">Indoor and outdoor facilities for cricket, basketball, badminton, and more.</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-800">Health Center</h4>
                      <p className="text-sm text-slate-600 mt-1">On-campus medical facility with full-time doctor and emergency ambulance.</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
