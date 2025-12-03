import React, { useEffect } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { initColorAdmin } from "../coloradmin";

const MainLayout = ({ children }) => {

  useEffect(() => {
    initColorAdmin();
  }, []);

  return (
    <div id="app" className="app app-header-fixed app-sidebar-fixed">

      {/* HEADER */}
      <Topbar />

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT (scrolls inside) */}
      <div id="content" className="app-content" style={{ minHeight: "calc(100vh - 120px)" }}>
        {children}
      </div>

      {/* FOOTER ALWAYS VISIBLE */}
      <Footer />

      {/* REQUIRED BY COLOR ADMIN */}
      <div className="app-sidebar-bg"></div>
      <div className="app-sidebar-mobile-backdrop">
        <a href="#" data-dismiss="app-sidebar-mobile" className="stretched-link"></a>
      </div>
    </div>
  );
};

export default MainLayout;
