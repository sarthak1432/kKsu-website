import { Book, Code, Calculator, Beaker, Globe, Landmark } from 'lucide-react';

const Courses = () => {
  const departments = [
    { name: 'Computer Science', icon: Code, courses: ['B.Sc. IT', 'BCA', 'M.Sc. Computer Science'] },
    { name: 'Mathematics', icon: Calculator, courses: ['B.Sc. Mathematics', 'M.Sc. Mathematics'] },
    { name: 'Physical Sciences', icon: Beaker, courses: ['B.Sc. Physics', 'B.Sc. Chemistry'] },
    { name: 'Humanities', icon: Globe, courses: ['B.A. English', 'B.A. History', 'B.A. Sociology'] },
    { name: 'Commerce & Management', icon: Landmark, courses: ['B.Com', 'BBA', 'M.Com'] },
    { name: 'Library Science', icon: Book, courses: ['B.Lib.I.Sc.', 'M.Lib.I.Sc.'] },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <div className="bg-[#0b1b3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">Academic Programs & Departments</h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Explore our wide range of undergraduate and postgraduate programs designed to foster academic excellence and career readiness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100 p-6 group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-4">{dept.name}</h2>
                <ul className="space-y-2 mb-6">
                  {dept.courses.map((course, i) => (
                    <li key={i} className="flex items-center text-slate-600 text-sm before:content-['•'] before:mr-2 before:text-blue-500">
                      {course}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-medium text-sm hover:text-blue-800 flex items-center gap-1 focus:outline-none focus:underline">
                  View Department Details &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
