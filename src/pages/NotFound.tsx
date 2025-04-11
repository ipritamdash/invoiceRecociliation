
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gstWhite">
      <div className="text-center p-8 max-w-md">
        <FileQuestion className="h-24 w-24 text-gstRed mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you're looking for cannot be found.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate("/")} 
            className="bg-gstRed hover:bg-red-700"
          >
            Return to Dashboard
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/user-manual")}
          >
            View User Manual
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
