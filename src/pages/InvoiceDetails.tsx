
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

const InvoiceDetails = () => {
  const [loading, setLoading] = useState(false);
  
  const handleSearch = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // Mock data for invoice details table
  const invoiceDetails = [
    {
      accountingDocNumber: "5202687366",
      postingDate: "08-03-2025",
      invoiceType: "B2B",
      invoiceType2A: "",
      invoiceDate: "03-03-2025",
      invoiceDate2A: "",
      revcGSTR2: "N",
      pos: "24",
      pos2A: "0",
      invoiceAmount: 601.8,
      invoiceAmount2A: 0,
      taxableAmount: 510.0,
      taxableAmount2A: 0,
      igstAmount: 0.0,
      igstAmount2A: 0,
      cgstAmount: 45.9,
      cgstAmount2A: 0,
      sgstAmount: 45.9,
      sgstAmount2A: 0,
      cessAmount: 0,
      cessAmount2A: 0,
      totaltax: 91.8,
      totaltax2A: 0,
      userRemarks: "",
      updatedOn: ""
    },
    {
      accountingDocNumber: "5202673028",
      postingDate: "05-03-2025",
      invoiceType: "B2B",
      invoiceType2A: "",
      invoiceDate: "04-03-2025",
      invoiceDate2A: "",
      revcGSTR2: "N",
      pos: "24",
      pos2A: "0",
      invoiceAmount: 1604.8,
      invoiceAmount2A: 0,
      taxableAmount: 1360.0,
      taxableAmount2A: 0,
      igstAmount: 0.0,
      igstAmount2A: 0,
      cgstAmount: 122.4,
      cgstAmount2A: 0,
      sgstAmount: 122.4,
      sgstAmount2A: 0,
      cessAmount: 0,
      cessAmount2A: 0,
      totaltax: 244.8,
      totaltax2A: 0,
      userRemarks: "",
      updatedOn: ""
    },
    {
      accountingDocNumber: "5202680337",
      postingDate: "06-03-2025",
      invoiceType: "B2B",
      invoiceType2A: "",
      invoiceDate: "05-03-2025",
      invoiceDate2A: "",
      revcGSTR2: "N",
      pos: "24",
      pos2A: "0",
      invoiceAmount: 4413.2,
      invoiceAmount2A: 0,
      taxableAmount: 3740.0,
      taxableAmount2A: 0,
      igstAmount: 0.0,
      igstAmount2A: 0,
      cgstAmount: 336.6,
      cgstAmount2A: 0,
      sgstAmount: 336.6,
      sgstAmount2A: 0,
      cessAmount: 0,
      cessAmount2A: 0,
      totaltax: 673.2,
      totaltax2A: 0,
      userRemarks: "",
      updatedOn: ""
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Invoice Details</h1>
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
        Filtered Records : 218859
      </div>

      <div className="overflow-x-auto">
        <Table className="border-collapse w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="border bg-blue-100 text-blue-800">Accounting_Doc_Number</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Posting_Date</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_type</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_type2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_date</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_date2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">revc_GSTR2</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Pos</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Pos2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_amount</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_amount2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Taxable Amount</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Taxable Amount 2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Igst_amount</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Igst_amount2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Cgst_amount</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Cgst_amount2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Sgst_amount</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Sgst_amount2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Cess_amount</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Cess_amount2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Totaltax</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Totaltax2A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">User_Remarks</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Updated_On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={25} className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-sm text-gray-500">Loading data...</p>
                </TableCell>
              </TableRow>
            ) : (
              invoiceDetails.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="border">{row.accountingDocNumber}</TableCell>
                  <TableCell className="border">{row.postingDate}</TableCell>
                  <TableCell className="border">{row.invoiceType}</TableCell>
                  <TableCell className="border">{row.invoiceType2A}</TableCell>
                  <TableCell className="border">{row.invoiceDate}</TableCell>
                  <TableCell className="border">{row.invoiceDate2A}</TableCell>
                  <TableCell className="border">{row.revcGSTR2}</TableCell>
                  <TableCell className="border">{row.pos}</TableCell>
                  <TableCell className="border">{row.pos2A}</TableCell>
                  <TableCell className="border text-right">{row.invoiceAmount}</TableCell>
                  <TableCell className="border text-right">{row.invoiceAmount2A}</TableCell>
                  <TableCell className="border text-right">{row.taxableAmount}</TableCell>
                  <TableCell className="border text-right">{row.taxableAmount2A}</TableCell>
                  <TableCell className="border text-right">{row.igstAmount}</TableCell>
                  <TableCell className="border text-right">{row.igstAmount2A}</TableCell>
                  <TableCell className="border text-right">{row.cgstAmount}</TableCell>
                  <TableCell className="border text-right">{row.cgstAmount2A}</TableCell>
                  <TableCell className="border text-right">{row.sgstAmount}</TableCell>
                  <TableCell className="border text-right">{row.sgstAmount2A}</TableCell>
                  <TableCell className="border text-right">{row.cessAmount}</TableCell>
                  <TableCell className="border text-right">{row.cessAmount2A}</TableCell>
                  <TableCell className="border text-right">{row.totaltax}</TableCell>
                  <TableCell className="border text-right">{row.totaltax2A}</TableCell>
                  <TableCell className="border">{row.userRemarks}</TableCell>
                  <TableCell className="border">{row.updatedOn}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InvoiceDetails;
