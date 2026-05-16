import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Contact from './pages/Contact';

// New Pages
import Faculty from './pages/Faculty';
import Departments from './pages/Departments';
import IQAC from './pages/IQAC';
import Notices from './pages/Notices';
import Downloads from './pages/Downloads';
import Gallery from './pages/Gallery';
import Committees from './pages/Committees';
import AcademicCalendar from './pages/AcademicCalendar';
import Examination from './pages/Examination';
import Search from './pages/Search';
import { Privacy, Terms, Accessibility, Sitemap } from './pages/StaticPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Core Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="placements" element={<Placements />} />
          <Route path="mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="contact" element={<Contact />} />

          {/* New Pages */}
          <Route path="faculty" element={<Faculty />} />
          <Route path="departments" element={<Departments />} />
          <Route path="iqac" element={<IQAC />} />
          <Route path="notices" element={<Notices />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="committees" element={<Committees />} />
          <Route path="academic-calendar" element={<AcademicCalendar />} />
          <Route path="examination" element={<Examination />} />
          <Route path="search" element={<Search />} />

          {/* Legal / Static */}
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
