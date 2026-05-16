import { ShieldAlert, AlertCircle, FileText, FileSignature } from 'lucide-react';

const MandatoryDisclosure = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Page Header */}
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">Mandatory Information Disclosure</h1>
          <p className="text-slate-300 max-w-3xl text-lg">
            In compliance with the University Grants Commission (UGC) Guidelines and Right to Information (RTI) Act, we transparently disclose the following statutory committees, policies, and public information.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Anti-Ragging Cell */}
          <section id="anti-ragging" className="bg-white p-8 rounded-xl shadow-md border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldAlert className="w-24 h-24 text-red-600" />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <ShieldAlert className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-bold text-slate-800">Anti-Ragging Cell</h2>
            </div>
            <p className="text-slate-600 mb-6 relative z-10 text-sm">
              Ragging is a criminal offense as per the Supreme Court verdict. Our institution has a ZERO TOLERANCE policy towards ragging.
            </p>
            <div className="space-y-4 relative z-10">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">Emergency Contact</h3>
                <p className="text-sm text-slate-600">Helpline Number: <strong>1800-180-5522</strong> (Toll Free)</p>
                <p className="text-sm text-slate-600">Email: helpline@antiragging.in</p>
              </div>
              <div className="space-y-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 focus:outline-none focus:underline"><FileText className="w-4 h-4"/> Anti-Ragging Committee Members List</button>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 focus:outline-none focus:underline"><FileText className="w-4 h-4"/> UGC Anti-Ragging Regulations PDF</button>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 focus:outline-none focus:underline"><FileSignature className="w-4 h-4"/> Online Anti-Ragging Affidavit Form</button>
              </div>
            </div>
          </section>

          {/* Grievance Redressal */}
          <section id="grievance" className="bg-white p-8 rounded-xl shadow-md border border-orange-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertCircle className="w-24 h-24 text-orange-600" />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-800">Grievance Redressal</h2>
            </div>
            <p className="text-slate-600 mb-6 relative z-10 text-sm">
              We provide a fair and transparent mechanism for addressing the grievances of students and staff members in accordance with UGC guidelines.
            </p>
            <div className="space-y-4 relative z-10">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">Submit a Grievance</h3>
                <p className="text-sm text-slate-600 mb-3">Students can submit their academic or administrative grievances online.</p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400">
                  Open Grievance Portal
                </button>
              </div>
              <div className="space-y-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 focus:outline-none focus:underline"><FileText className="w-4 h-4"/> Grievance Redressal Committee List</button>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 focus:outline-none focus:underline"><FileText className="w-4 h-4"/> Internal Complaints Committee (ICC)</button>
              </div>
            </div>
          </section>

          {/* RTI Section */}
          <section id="rti" className="bg-white p-8 rounded-xl shadow-md border border-blue-100 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-800">Right to Information (RTI)</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  The Right to Information Act, 2005 empowers citizens to seek information from Public Authorities, thus promoting transparency and accountability. The institution follows the mandatory disclosure norms as required by the Act.
                </p>
                <h3 className="font-bold text-slate-800 mb-2">Public Information Officer (PIO)</h3>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4">
                  <p className="font-medium text-slate-800">Mr. R. K. Desai</p>
                  <p className="text-sm text-slate-600">Registrar</p>
                  <p className="text-sm text-slate-600">Email: pio@svcollege.edu.in</p>
                  <p className="text-sm text-slate-600">Contact: +91 123 456 7891</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-3">Statutory Declarations & Policies</h3>
                <ul className="space-y-3">
                  <li>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 w-full text-left p-2 hover:bg-blue-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <FileSignature className="w-4 h-4 text-blue-500 shrink-0"/> Statutory Declaration under Section 4(1)(b) of RTI Act 2005
                    </button>
                  </li>
                  <li>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 w-full text-left p-2 hover:bg-blue-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <FileText className="w-4 h-4 text-blue-500 shrink-0"/> UGC Autonomy Guidelines PDF
                    </button>
                  </li>
                  <li>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 w-full text-left p-2 hover:bg-blue-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <FileText className="w-4 h-4 text-blue-500 shrink-0"/> Annual Audited Statement of Accounts
                    </button>
                  </li>
                  <li>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-2 w-full text-left p-2 hover:bg-blue-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <FileText className="w-4 h-4 text-blue-500 shrink-0"/> SC/ST/OBC Reservation Policies
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;
