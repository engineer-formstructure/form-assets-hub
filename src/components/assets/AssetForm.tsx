import { useState } from "react";
import {
  Box, DollarSign, Users, Settings, Code,
  QrCode, Calendar,
} from "lucide-react";
import FormSection from "./FormSection";
import FormField from "./FormField";
import { Separator } from "@/components/ui/separator";

const SelectInput = ({ options, placeholder = "Select..." }: { options: string[]; placeholder?: string }) => (
  <select className="form-field-input appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%239ca3af%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M4.646%206.646a.5.5%200%200%201%20.708%200L8%209.293l2.646-2.647a.5.5%200%200%201%20.708.708l-3%203a.5.5%200%200%201-.708%200l-3-3a.5.5%200%200%201%200-.708z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10">
    <option value="" disabled selected>{placeholder}</option>
    {options.map((o) => <option key={o} value={o}>{o}</option>)}
  </select>
);

const TextInput = ({ placeholder, type = "text", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { placeholder?: string }) => (
  <input type={type} placeholder={placeholder} className="form-field-input" {...props} />
);

const TextareaInput = ({ placeholder }: { placeholder?: string }) => (
  <textarea placeholder={placeholder} rows={3} className="form-field-input h-auto resize-none" />
);

const DataTable = ({ columns, rows }: { columns: string[]; rows: string[][] }) => (
  <div className="rounded-lg border border-border overflow-hidden">
    <table className="data-table">
      <thead>
        <tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr><td colSpan={columns.length} className="text-center text-muted-foreground py-8">No records yet</td></tr>
        ) : (
          rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

const FieldGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
    {children}
  </div>
);

const AssetForm = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="space-y-5">
      {/* Section 1: Asset Master */}
      <FormSection title="Asset Master" icon={<Box size={18} />}>
        <FieldGrid>
          <FormField label="Asset ID" required>
            <TextInput placeholder="AST-000001" />
          </FormField>
          <FormField label="Asset Name" required>
            <TextInput placeholder="Enter asset name" />
          </FormField>
          <FormField label="Category" required>
            <select
              className="form-field-input appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%239ca3af%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M4.646%206.646a.5.5%200%200%201%20.708%200L8%209.293l2.646-2.647a.5.5%200%200%201%20.708.708l-3%203a.5.5%200%200%201-.708%200l-3-3a.5.5%200%200%201%200-.708z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>Select category</option>
              {["IT", "Equipment", "Furniture", "Software", "Decoration"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Brand">
            <TextInput placeholder="e.g. Dell, HP" />
          </FormField>
          <FormField label="Model">
            <TextInput placeholder="Model number" />
          </FormField>
          <FormField label="Serial Number">
            <TextInput placeholder="S/N" />
          </FormField>
        </FieldGrid>
        <div className="mt-5">
          <FormField label="Description">
            <TextareaInput placeholder="Brief description of the asset..." />
          </FormField>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mt-5">
          <FormField label="Asset Tag / QR Code" tooltip="Scan or enter asset tag identifier">
            <div className="relative">
              <TextInput placeholder="Scan or enter tag" />
              <QrCode size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
          </FormField>
          <FormField label="Status" required>
            <SelectInput options={["Active", "In Use", "In Repair", "Retired"]} placeholder="Select status" />
          </FormField>
        </div>
      </FormSection>

      {/* Section 2: Financial & Accounting */}
      <FormSection title="Financial & Accounting" icon={<DollarSign size={18} />}>
        <FieldGrid>
          <FormField label="Purchase Date" required>
            <TextInput type="date" />
          </FormField>
          <FormField label="Purchase Price" required>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
              <TextInput type="number" placeholder="0.00" className="form-field-input pl-7" />
            </div>
          </FormField>
          <FormField label="Supplier / Vendor">
            <TextInput placeholder="Search vendor..." />
          </FormField>
          <FormField label="Invoice No.">
            <TextInput placeholder="INV-000000" />
          </FormField>
        </FieldGrid>
        <Separator className="my-6" />
        <FieldGrid>
          <FormField label="Warranty Expiry Date">
            <TextInput type="date" />
          </FormField>
          <FormField label="Useful Life (Years)">
            <TextInput type="number" placeholder="e.g. 5" />
          </FormField>
          <FormField label="Depreciation Method">
            <SelectInput options={["Straight Line"]} placeholder="Select method" />
          </FormField>
        </FieldGrid>
      </FormSection>

      {/* Section 3: Usage & Assignment */}
      <FormSection title="Usage & Assignment" icon={<Users size={18} />}>
        <FieldGrid>
          <FormField label="Assigned To">
            <TextInput placeholder="Search employee..." />
          </FormField>
          <FormField label="Date Assigned">
            <TextInput type="date" />
          </FormField>
          <FormField label="Project">
            <TextInput placeholder="Search project..." />
          </FormField>
          <FormField label="Usage Status">
            <SelectInput options={["Available", "Assigned", "Reserved"]} placeholder="Select status" />
          </FormField>
        </FieldGrid>
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Check-in / Check-out History</h3>
          <DataTable
            columns={["Date", "User", "Action", "Note"]}
            rows={[
              ["2025-03-15", "John D.", "Check-out", "Project Alpha"],
              ["2025-02-10", "Sarah M.", "Check-in", "Returned from site"],
              ["2025-01-20", "John D.", "Check-out", "Site inspection"],
            ]}
          />
        </div>
      </FormSection>

      {/* Section 4: Maintenance & Lifecycle */}
      <FormSection title="Maintenance & Lifecycle" icon={<Settings size={18} />}>
        <h3 className="text-sm font-semibold text-foreground mb-4">Maintenance</h3>
        <FieldGrid>
          <FormField label="Maintenance Schedule">
            <SelectInput options={["Monthly", "Yearly", "Custom"]} placeholder="Select schedule" />
          </FormField>
          <FormField label="Last Maintenance Date">
            <TextInput type="date" />
          </FormField>
          <FormField label="Next Maintenance Date">
            <TextInput type="date" />
          </FormField>
        </FieldGrid>
        <Separator className="my-6" />
        <h3 className="text-sm font-semibold text-foreground mb-3">Maintenance History</h3>
        <DataTable
          columns={["Date", "Issue", "Cost", "Technician", "Note"]}
          rows={[
            ["2025-03-01", "Calibration", "$120", "Mike T.", "Annual check"],
            ["2024-12-15", "Belt replacement", "$450", "David L.", "Worn belt"],
          ]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mt-6">
          <FormField label="Repair Cost">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
              <TextInput type="number" placeholder="0.00" className="form-field-input pl-7" />
            </div>
          </FormField>
          <FormField label="Issue Description">
            <TextareaInput placeholder="Describe the issue..." />
          </FormField>
        </div>

        <Separator className="my-6" />
        <h3 className="text-sm font-semibold text-foreground mb-4">Lifecycle</h3>
        <FieldGrid>
          <FormField label="Condition">
            <SelectInput options={["New", "Good", "Fair", "Poor"]} placeholder="Select condition" />
          </FormField>
          <FormField label="End-of-life Date">
            <TextInput type="date" />
          </FormField>
          <FormField label="Disposal Date">
            <TextInput type="date" />
          </FormField>
          <FormField label="Disposal Method">
            <SelectInput options={["Sell", "Scrap", "Donate"]} placeholder="Select method" />
          </FormField>
        </FieldGrid>
      </FormSection>

      {/* Section 5: Software Asset (Conditional) */}
      {category === "Software" && (
        <FormSection title="Software Asset" icon={<Code size={18} />}>
          <FieldGrid>
            <FormField label="Software Name" required>
              <TextInput placeholder="e.g. AutoCAD, SAP2000" />
            </FormField>
            <FormField label="License Type">
              <SelectInput options={["Subscription", "Perpetual"]} placeholder="Select type" />
            </FormField>
          </FieldGrid>
          <Separator className="my-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <FormField label="License Key / Account" tooltip="This field is masked for security">
              <TextInput type="password" placeholder="••••••••••••" />
            </FormField>
            <FormField label="Number of Seats">
              <TextInput type="number" placeholder="e.g. 10" />
            </FormField>
          </div>
          <Separator className="my-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <FormField label="Assigned Users">
              <TextInput placeholder="Search and select users..." />
            </FormField>
            <FormField label="Expiry Date">
              <TextInput type="date" />
            </FormField>
          </div>
          <Separator className="my-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <FormField label="Cost per Year">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                <TextInput type="number" placeholder="0.00" className="form-field-input pl-7" />
              </div>
            </FormField>
            <FormField label="Renewal Date">
              <TextInput type="date" />
            </FormField>
          </div>
        </FormSection>
      )}
    </div>
  );
};

export default AssetForm;
