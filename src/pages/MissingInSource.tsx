
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ReconciliationFilters from "@/components/ReconciliationFilters";
import { Download } from "lucide-react";

const MissingInSource = () => {
  const [loading, setLoading] = useState(false);
  
  const handleSearch = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  
  // Mock data for missing in source
  const missingData = [
    {
      fiscalYear: "2024",
      invoiceNumber: "HR24041A0E000003",
      hmclGSTIN: "37AAACH0812J2ZU",
      counterpartyGSTIN: "06AABCU6223H1ZI",
      counterpartyName: "Uber India Systems Private Limited",
      cpInvoiceNumber: "HR24041A0E000003",
      accountingDocNumber: "",
      postingDate: "",
      invoiceType: "B2B",
      invoiceType2A: "B2B"
    },
    {
      fiscalYear: "2024",
      invoiceNumber: "HR24041A0E000007",
      hmclGSTIN: "37AAACH0812J2ZU",
      counterpartyGSTIN: "06AABCU6223H1ZI",
      counterpartyName: "Uber India Systems Private Limited",
      cpInvoiceNumber: "HR24041A0E000007",
      accountingDocNumber: "",
      postingDate: "",
      invoiceType: "B2B",
      invoiceType2A: "B2B"
    },
    {
      fiscalYear: "2024",
      invoiceNumber: "HR24041A0E000008",
      hmclGSTIN: "37AAACH0812J2ZU",
      counterpartyGSTIN: "06AABCU6223H1ZI",
      counterpartyName: "Uber India Systems Private Limited",
      cpInvoiceNumber: "HR24041A0E000008",
      accountingDocNumber: "",
      postingDate: "",
      invoiceType: "B2B",
      invoiceType2A: "B2B"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">MISSING IN SOURCE</h1>
      </div>

      <Card className="p-4">
        <ReconciliationFilters onSearch={handleSearch} />
        
        <div className="flex justify-end gap-2 mt-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Back to Full List
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
      </Card>
      
      <div className="text-sm font-semibold">
        Filtered Records : 118547
      </div>

      <div className="overflow-x-auto">
        <Table className="border-collapse w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="border bg-blue-100 text-blue-800">Fiscal_Year</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_number</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">HMCL GSTIN</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Counterparty_GSTIN</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Counterparty_Name</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_number</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">cpInvoiceNumber</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Accounting_Doc_Number</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Posting_Date</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_type</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_type2A</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={11} className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-sm text-gray-500">Loading data...</p>
                </TableCell>
              </TableRow>
            ) : (
              missingData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="border">{row.fiscalYear}</TableCell>
                  <TableCell className="border">{row.invoiceNumber}</TableCell>
                  <TableCell className="border">{row.hmclGSTIN}</TableCell>
                  <TableCell className="border">{row.counterpartyGSTIN}</TableCell>
                  <TableCell className="border">{row.counterpartyName}</TableCell>
                  <TableCell className="border">{row.invoiceNumber}</TableCell>
                  <TableCell className="border">{row.cpInvoiceNumber}</TableCell>
                  <TableCell className="border">{row.accountingDocNumber}</TableCell>
                  <TableCell className="border">{row.postingDate}</TableCell>
                  <TableCell className="border">{row.invoiceType}</TableCell>
                  <TableCell className="border">{row.invoiceType2A}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MissingInSource;
