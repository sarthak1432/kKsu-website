import { CheckCircle2, FileText, Calendar, IndianRupee } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">Admission Process 2026-27</h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Join our community of learners. Find everything you need to know about applying, fee structures, and available scholarships.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" /> How to Apply
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-slate-800">Online Registration</h3>
                    <p className="text-sm text-slate-600 mt-1">Register on our admission portal with a valid email and mobile number.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-slate-800">Fill Application Form</h3>
                    <p className="text-sm text-slate-600 mt-1">Complete the detailed application form and upload scanned copies of required documents (10th/12th Marksheets, Aadhaar, Photo).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-slate-800">Application Fee Payment</h3>
                    <p className="text-sm text-slate-600 mt-1">Pay the non-refundable application fee of ₹500 via NetBanking, UPI, or Credit/Debit Card.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-slate-800">Merit List & Counseling</h3>
                    <p className="text-sm text-slate-600 mt-1">Check the merit list on the website. Shortlisted candidates will be called for document verification.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Proceed to Application Portal
                </button>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <IndianRupee className="w-6 h-6 text-blue-500" /> Fee Structure & Scholarships
              </h2>
              <p className="text-slate-600 text-sm mb-4">
                The fee structure is approved by the State Government and University authorities. It is subject to change as per government notifications.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-slate-200 border border-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Program</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Annual Fee (General)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Annual Fee (Reserved)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200 text-sm">
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-800">B.Sc. (IT / CS)</td>
                      <td className="px-4 py-3 text-slate-600">₹ 25,000</td>
                      <td className="px-4 py-3 text-slate-600">₹ 8,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-800">B.A. (All Subjects)</td>
                      <td className="px-4 py-3 text-slate-600">₹ 12,000</td>
                      <td className="px-4 py-3 text-slate-600">₹ 4,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-800">B.Com.</td>
                      <td className="px-4 py-3 text-slate-600">₹ 15,000</td>
                      <td className="px-4 py-3 text-slate-600">₹ 5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-2">State & National Scholarships</h3>
                <p className="text-sm text-green-700">
                  Eligible students can apply for Post Matric Scholarships via the National Scholarship Portal (NSP). The institution provides full support for scholarship document verification.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Calendar className="w-5 h-5"/> Key Dates</h3>
              <ul className="space-y-4">
                <li className="border-b border-blue-500 pb-2">
                  <p className="text-blue-200 text-xs uppercase font-semibold">Online Forms Open</p>
                  <p className="font-medium">May 15, 2026</p>
                </li>
                <li className="border-b border-blue-500 pb-2">
                  <p className="text-blue-200 text-xs uppercase font-semibold">Last Date to Apply</p>
                  <p className="font-medium">June 30, 2026</p>
                </li>
                <li className="border-b border-blue-500 pb-2">
                  <p className="text-blue-200 text-xs uppercase font-semibold">First Merit List</p>
                  <p className="font-medium">July 5, 2026</p>
                </li>
                <li>
                  <p className="text-blue-200 text-xs uppercase font-semibold">Classes Begin</p>
                  <p className="font-medium">August 1, 2026</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-blue-600"/> Downloads</h3>
              <ul className="space-y-3">
                <li><button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">Admission Prospectus 2026</button></li>
                <li><button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">Detailed Fee Structure PDF</button></li>
                <li><button className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline">Reservation Policy Guidelines</button></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admissions;
