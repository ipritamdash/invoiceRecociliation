
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

const GSTPartial = () => {
  const [loading, setLoading] = useState(false);
  
  const handleSearch = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  
  // Mock data for partial matches
  const partialData = [
    {
      businessA: "",
      invoiceNumber: "SI244200001",
      reconciliationType: "",
      vendorCode: "",
      mismatchReason: "",
      hmclGSTIN: "",
      counterpartyGSTIN: "",
      counterpartyName: "IMPERIAL AUTO INDUSTRIES LIMITED",
      cpInvoiceNumber: "SI244200001",
      accountingDocNumber: "22004014",
      postingDate: "26-06-2024",
      invoiceType: "CDN_DR",
      invoiceType2A: "CDN_DR",
      invoiceDate: "11-04-2024",
      invoiceDate2A: "11-04-2024",
      revcGSTR2: "N",
      pos: "6",
      pos2A: "6",
      invoiceAmount: 70165.76,
      invoiceAmount2A: 28716.8,
      taxableAmount: 54817.0,
      taxableAmount2A: 22435.0,
      igstAmount: 0,
      igstAmount2A: 0,
      cgstAmount: 7674.38,
      cgstAmount2A: 3140.9,
      sgstAmount: 7674.38,
      sgstAmount2A: 3140.9,
      cessAmount: 0,
      cessAmount2A: 0,
      totaltax: 15348.76,
      totaltax2A: 6281.8,
      userRemarks: "",
      updatedOn: ""
    },
    {
      businessA: "",
      invoiceNumber: "397695.73",
      reconciliationType: "",
      vendorCode: "",
      mismatchReason: "",
      hmclGSTIN: "",
      counterpartyGSTIN: "",
      counterpartyName: "IMPERIAL AUTO INDUSTRIES LIMITED",
      cpInvoiceNumber: "",
      accountingDocNumber: "",
      postingDate: "",
      invoiceType: "",
      invoiceType2A: "",
      invoiceDate: "",
      invoiceDate2A: "",
      revcGSTR2: "N",
      pos: "37",
      pos2A: "37",
      invoiceAmount: 397695.73,
      invoiceAmount2A: 386544.0,
      taxableAmount: 331412.49,
      taxableAmount2A: 327579.9,
      igstAmount: 0.0,
      igstAmount2A: 0.0,
      cgstAmount: 29827.12,
      cgstAmount2A: 29482.19,
      sgstAmount: 29827.12,
      sgstAmount2A: 29482.19,
      cessAmount: 0,
      cessAmount2A: 0,
      totaltax: 59654.24,
      totaltax2A: 58964.38,
      userRemarks: "",
      updatedOn: ""
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">GST Partial</h1>
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
        Filtered Records : 125
      </div>

      <div className="overflow-x-auto">
        <Table className="border-collapse w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="border bg-blue-100 text-blue-800">Business_A</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_number</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Reconciliation_Type</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Vendor_Code</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Mismatch reason</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">HMCL GSTIN</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Counterparty_GSTIN</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Counterparty_Name</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">Invoice_number</TableHead>
              <TableHead className="border bg-blue-100 text-blue-800">cpInvoiceNumber</TableHead>
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
                <TableCell colSpan={36} className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-sm text-gray-500">Loading data...</p>
                </TableCell>
              </TableRow>
            ) : (
              partialData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="border">{row.businessA}</TableCell>
                  <TableCell className="border">{row.invoiceNumber}</TableCell>
                  <TableCell className="border">{row.reconciliationType}</TableCell>
                  <TableCell className="border">{row.vendorCode}</TableCell>
                  <TableCell className="border">{row.mismatchReason}</TableCell>
                  <TableCell className="border">{row.hmclGSTIN}</TableCell>
                  <TableCell className="border">{row.counterpartyGSTIN}</TableCell>
                  <TableCell className="border">{row.counterpartyName}</TableCell>
                  <TableCell className="border">{row.invoiceNumber}</TableCell>
                  <TableCell className="border">{row.cpInvoiceNumber}</TableCell>
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

export default GSTPartial;
