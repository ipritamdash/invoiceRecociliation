
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Menu, User, HelpCircle, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleUserManual = () => {
    navigate("/user-manual");
  };

  return (
    <header className="bg-gstRed text-white shadow-md">
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="text-white hover:bg-[#EBEBEB] hover:text-gstRed"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/dashboard" className="flex items-center gap-2">
            <span className="font-bold text-xl">GST Reconciliation</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-[#EBEBEB] hover:text-gstRed flex items-center gap-2"
            onClick={handleUserManual}
          >
            <HelpCircle className="h-5 w-5" />
            <span className="hidden sm:inline">User Manual</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-[#EBEBEB] hover:text-gstRed flex items-center gap-2"
              >
                <Avatar className="h-8 w-8 bg-white/20 hover:bg-white/30">
                  <AvatarFallback className="text-white">
                    {user?.name ? user.name.substring(0, 2).toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline">{user?.name || "User"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => navigate("/user-details")}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
