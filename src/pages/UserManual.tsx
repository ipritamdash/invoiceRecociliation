import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";

const UserManual = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/user-manual.pdf"; // path inside public folder
    link.download = "GST_Reconciliation_User_Manual.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl font-bold text-gray-800">User Manual</h1>
          </div>
          <Button
            onClick={handleDownload}
            className="bg-gstRed hover:bg-red-700 flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download PDF
          </Button>
        </div>

        {/* Embedded PDF */}
        <div className="w-full h-[calc(100vh-200px)] border shadow">
          <iframe
            src="/user-manual.pdf"
            title="User Manual PDF"
            width="100%"
            height="100%"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default UserManual;
