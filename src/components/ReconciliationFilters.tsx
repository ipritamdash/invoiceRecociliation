
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ReconciliationFiltersProps {
  showReconciliationType?: boolean;
  showHMCLPlant?: boolean;
  onSearch: () => void;
}

const ReconciliationFilters = ({ 
  showReconciliationType = true, 
  showHMCLPlant = true,
  onSearch 
}: ReconciliationFiltersProps) => {
  const [filters, setFilters] = useState({
    invoiceNo: "",
    vendorCode: "",
    supplierGSTIN: "",
    hmclGSTIN: "",
    postingStartDate: "",
    postingEndDate: "",
    invoiceStartDate: "",
    invoiceEndDate: "",
    hmclPlant: "",
    invoiceType: "",
    financialYear: "",
    reconciliationType: "",
    userRemarks: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchClick = () => {
    onSearch();
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <label htmlFor="invoiceNo" className="block text-sm text-gray-700 mb-1">Invoice No</label>
        <Input
          id="invoiceNo"
          name="invoiceNo"
          value={filters.invoiceNo}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="vendorCode" className="block text-sm text-gray-700 mb-1">VendorCode</label>
        <Input
          id="vendorCode"
          name="vendorCode"
          value={filters.vendorCode}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="supplierGSTIN" className="block text-sm text-gray-700 mb-1">Supplier GSTIN</label>
        <Input
          id="supplierGSTIN"
          name="supplierGSTIN"
          value={filters.supplierGSTIN}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="hmclGSTIN" className="block text-sm text-gray-700 mb-1">HMCL GSTIN</label>
        <Input
          id="hmclGSTIN"
          name="hmclGSTIN"
          value={filters.hmclGSTIN}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="postingStartDate" className="block text-sm text-gray-700 mb-1">Posting StartDate</label>
        <Input
          id="postingStartDate"
          name="postingStartDate"
          type="date"
          value={filters.postingStartDate}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="postingEndDate" className="block text-sm text-gray-700 mb-1">Posting EndDate</label>
        <Input
          id="postingEndDate"
          name="postingEndDate"
          type="date"
          value={filters.postingEndDate}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="invoiceStartDate" className="block text-sm text-gray-700 mb-1">Invoice StartDate</label>
        <Input
          id="invoiceStartDate"
          name="invoiceStartDate"
          type="date"
          value={filters.invoiceStartDate}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="invoiceEndDate" className="block text-sm text-gray-700 mb-1">Invoice EndDate</label>
        <Input
          id="invoiceEndDate"
          name="invoiceEndDate"
          type="date"
          value={filters.invoiceEndDate}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      {showHMCLPlant && (
        <div>
          <label htmlFor="hmclPlant" className="block text-sm text-gray-700 mb-1">HMCL Plant</label>
          <Input
            id="hmclPlant"
            name="hmclPlant"
            value={filters.hmclPlant}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="invoiceType" className="block text-sm text-gray-700 mb-1">Invoice Type</label>
        <Input
          id="invoiceType"
          name="invoiceType"
          value={filters.invoiceType}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div>
        <label htmlFor="financialYear" className="block text-sm text-gray-700 mb-1">Financial Year</label>
        <Input
          id="financialYear"
          name="financialYear"
          value={filters.financialYear}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      {showReconciliationType && (
        <div>
          <label htmlFor="reconciliationType" className="block text-sm text-gray-700 mb-1">Reconcilation Type</label>
          <Input
            id="reconciliationType"
            name="reconciliationType"
            value={filters.reconciliationType}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="userRemarks" className="block text-sm text-gray-700 mb-1">User Remarks</label>
        <Input
          id="userRemarks"
          name="userRemarks"
          value={filters.userRemarks}
          onChange={handleInputChange}
          className="w-full"
        />
      </div>
      
      <div className="flex items-end">
        <Button 
          onClick={handleSearchClick}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default ReconciliationFilters;
