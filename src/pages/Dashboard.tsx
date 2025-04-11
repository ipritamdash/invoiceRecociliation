
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  FileWarning,
  FileMinus,
  FileCheck,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data for the dashboard
  const reconciliationData = [
    { status: "GST Partial", count: 125, pending: 122, color: "#3F4756", route: "/gst-partial" },
    { status: "GST Probable", count: 24, pending: 22, color: "#E25B0E", route: "/gst-probable" },
    { status: "Missing in GST", count: 218710, pending: 217962, color: "#C61A20", route: "/missing-in-gst" },
    { status: "Missing in Source", count: 118547, pending: 118547, color: "#25A9E0", route: "/missing-in-source" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {reconciliationData.map((item) => (
          <Card 
            key={item.status} 
            className="cursor-pointer hover:shadow-lg transition-shadow border-t-4 overflow-hidden" 
            onClick={() => navigate(item.route)}
            style={{ borderTopColor: item.color }}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4 bg-gray-50">
              <CardTitle className="text-sm font-medium text-gray-700">
                {item.status}
              </CardTitle>
              {item.status === "GST Partial" && <FileText size={20} className="text-gray-600" />}
              {item.status === "Missing in GST" && <FileWarning size={20} className="text-gray-600" />}
              {item.status === "Missing in Source" && <FileMinus size={20} className="text-gray-600" />}
              {item.status === "GST Probable" && <FileCheck size={20} className="text-gray-600" />}
            </CardHeader>
            <CardContent className="py-4 px-4">
              <div className="text-lg font-bold text-gray-800">
                Pending Remarks: <span className="text-blue-600">{item.pending.toLocaleString()}</span>
              </div>
              <div className="text-lg font-bold text-gray-800 mt-1">
                Total: <span className="text-blue-600">{item.count.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
