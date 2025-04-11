
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Layout = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gstWhite">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
