import React, { useEffect } from 'react';
import Navbar from './../nav/Navbar';
import Footer from './../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Mapping لكل مسار مع عنوانه
    const titles = {
      "/": "Home - Start Framework",
      "/home": "Home - Start Framework",
      "/about": "About - Start Framework",
      "/gallery": "Gallery - Start Framework",
      "/contact": "Contact - Start Framework"
    };

    // تغيير عنوان الصفحة بناءً على المسار
    document.title = titles[location.pathname] || "404 - Start Framework";

  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="space">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
