
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

const Summary = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  
  // Mock data for summary table
  const summaryData = [
    {
      type: "Missing in GST",
      prInvoiceCount: 218710,
      gstr2InvoiceCount: 0,
      prTaxableAmount: 6479443478.72,
      gstr2TaxableAmount: 0.00,
      prIgstAmount: 2990691059.47,
      gstr2IgstAmount: 0.00,
      prCgstAmount: 1743546621.10,
      gstr2CgstAmount: 0.00,
      prSgstAmount: 1743546621.77,
      gstr2SgstAmount: 0.00,
      prCessAmount: 1659176.38,
      gstr2CessAmount: 0.00
    },
    {
      type: "Missing in Source",
      prInvoiceCount: 0,
      gstr2InvoiceCount: 118547,
      prTaxableAmount: 0.00,
      gstr2TaxableAmount: 112841393.04,
      prIgstAmount: 0.00,
      gstr2IgstAmount: 196226821.19,
      prCgstAmount: 0.00,
      gstr2CgstAmount: 196226821.19,
      prSgstAmount: 0.00,
      gstr2SgstAmount: 196226821.19,
      prCessAmount: 0.00,
      gstr2CessAmount: 8753843.89
    },
    {
      type: "Partial in GST",
      prInvoiceCount: 125,
      gstr2InvoiceCount: 125,
      prTaxableAmount: 4766773.35,
      gstr2TaxableAmount: 4121885.61,
      prIgstAmount: 2470623.41,
      gstr2IgstAmount: 1005778.80,
      prCgstAmount: 1145801.02,
      gstr2CgstAmount: 1005778.80,
      prSgstAmount: 1144756.12,
      gstr2SgstAmount: 1005778.80,
      prCessAmount: 0.00,
      gstr2CessAmount: 0.00
    },
    {
      type: "Probable Match",
      prInvoiceCount: 24,
      gstr2InvoiceCount: 24,
      prTaxableAmount: 352429.29,
      gstr2TaxableAmount: 352429.31,
      prIgstAmount: 343910.29,
      gstr2IgstAmount: 115981.88,
      prCgstAmount: 4259.50,
      gstr2CgstAmount: 115981.88,
      prSgstAmount: 4259.50,
      gstr2SgstAmount: 115981.88,
      prCessAmount: 0.00,
      gstr2CessAmount: 0.00
    },
    {
      type: "Total",
      prInvoiceCount: 218859,
      gstr2InvoiceCount: 118696,
      prTaxableAmount: 6484562681.36,
      gstr2TaxableAmount: 113288707.96,
      prIgstAmount: 2993505593.17,
      gstr2IgstAmount: 197348581.87,
      prCgstAmount: 1744696681.62,
      gstr2CgstAmount: 197348581.87,
      prSgstAmount: 1744695637.39,
      gstr2SgstAmount: 197348581.87,
      prCessAmount: 1659176.38,
      gstr2CessAmount: 8753843.89
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Summary</h1>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>
      </div>

      <Card className="p-4">
        <ReconciliationFilters onSearch={handleSearch} />
      </Card>

      <div className="overflow-x-auto">
        <Table className="border-collapse w-full">
          <TableHeader>
            <TableRow>
              <TableHead rowSpan={2} className="text-center border bg-blue-100 text-blue-800">Reconciliation Type</TableHead>
              <TableHead colSpan={2} className="text-center border bg-blue-100 text-blue-800">Invoice Count</TableHead>
              <TableHead colSpan={2} className="text-center border bg-blue-100 text-blue-800">Total Taxable Amount</TableHead>
              <TableHead colSpan={2} className="text-center border bg-blue-100 text-blue-800">Total IGST Amount</TableHead>
              <TableHead colSpan={2} className="text-center border bg-blue-100 text-blue-800">Total CGST Amount</TableHead>
              <TableHead colSpan={2} className="text-center border bg-blue-100 text-blue-800">Total SGST Amount</TableHead>
              <TableHead colSpan={2} className="text-center border bg-blue-100 text-blue-800">Total CESS Amount</TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="text-center border bg-blue-100 text-blue-800">PR</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">GSTR2</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">PR</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">GSTR2</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">PR</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">GSTR2</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">PR</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">GSTR2</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">PR</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">GSTR2</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">PR</TableHead>
              <TableHead className="text-center border bg-blue-100 text-blue-800">GSTR2</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={13} className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-sm text-gray-500">Loading data...</p>
                </TableCell>
              </TableRow>
            ) : (
              summaryData.map((row, index) => (
                <TableRow key={index} className={index === summaryData.length - 1 ? "font-bold" : ""}>
                  <TableCell className="border">{row.type}</TableCell>
                  <TableCell className="border text-right">{row.prInvoiceCount.toLocaleString()}</TableCell>
                  <TableCell className="border text-right">{row.gstr2InvoiceCount.toLocaleString()}</TableCell>
                  <TableCell className="border text-right">{row.prTaxableAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.gstr2TaxableAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.prIgstAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.gstr2IgstAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.prCgstAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.gstr2CgstAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.prSgstAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.gstr2SgstAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.prCessAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                  <TableCell className="border text-right">{row.gstr2CessAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-sm text-gray-500 text-right">
        © 2022 - HMCL Ltd - Privacy
      </div>
    </div>
  );
};

export default Summary;
