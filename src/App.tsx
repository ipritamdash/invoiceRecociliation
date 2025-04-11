
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import GSTPartial from "./pages/GSTPartial";
import MissingInGST from "./pages/MissingInGST";
import MissingInSource from "./pages/MissingInSource";
import GSTProbable from "./pages/GSTProbable";
import Summary from "./pages/Summary";
import UserDetails from "./pages/UserDetails";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import UserManual from "./pages/UserManual";
import InvoiceDetails from "./pages/InvoiceDetails";

// Context
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Create a query client instance outside the component
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/user-manual" element={<UserManual />} />
                
                <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                  <Route index element={<Navigate to="/dashboard" replace />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="gst-partial" element={<GSTPartial />} />
                  <Route path="missing-in-gst" element={<MissingInGST />} />
                  <Route path="missing-in-source" element={<MissingInSource />} />
                  <Route path="gst-probable" element={<GSTProbable />} />
                  <Route path="summary" element={<Summary />} />
                  <Route path="user-details" element={<UserDetails />} />
                  <Route path="edit-user/:id" element={<EditUser />} />
                  <Route path="add-user" element={<AddUser />} />
                  <Route path="invoice-details" element={<InvoiceDetails />} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
