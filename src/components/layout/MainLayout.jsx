import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#EFF6FF] text-[#1E293B] font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-[#1B4F8A] text-white px-4 py-2 z-[100] rounded font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
