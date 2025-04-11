
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  FileMinus,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gstRed text-white w-64 min-h-0 flex-shrink-0 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                cn("flex items-center gap-2 px-4 py-2 rounded transition-colors duration-150", 
                   isActive ? "bg-white/20" : "hover:bg-[#EBEBEB] hover:text-gstRed")
              }
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/summary" 
              className={({ isActive }) => 
                cn("flex items-center gap-2 px-4 py-2 rounded transition-colors duration-150", 
                   isActive ? "bg-white/20" : "hover:bg-[#EBEBEB] hover:text-gstRed")
              }
            >
              <FileText size={20} />
              <span>Summary</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/invoice-details" 
              className={({ isActive }) => 
                cn("flex items-center gap-2 px-4 py-2 rounded transition-colors duration-150", 
                   isActive ? "bg-white/20" : "hover:bg-[#EBEBEB] hover:text-gstRed")
              }
            >
              <FileText size={20} />
              <span>Invoice Details</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/missing-in-source" 
              className={({ isActive }) => 
                cn("flex items-center gap-2 px-4 py-2 rounded transition-colors duration-150", 
                   isActive ? "bg-white/20" : "hover:bg-[#EBEBEB] hover:text-gstRed")
              }
            >
              <FileMinus size={20} />
              <span>Missing in Source</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/user-details" 
              className={({ isActive }) => 
                cn("flex items-center gap-2 px-4 py-2 rounded transition-colors duration-150", 
                   isActive ? "bg-white/20" : "hover:bg-[#EBEBEB] hover:text-gstRed")
              }
            >
              <Users size={20} />
              <span>User Details</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
