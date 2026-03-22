import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FormFieldProps {
  label: string;
  required?: boolean;
  tooltip?: string;
  children: React.ReactNode;
  className?: string;
}

const FormField = ({ label, required, tooltip, children, className }: FormFieldProps) => (
  <div className={cn("space-y-1.5", className)}>
    <div className="flex items-center gap-1.5">
      <label className="form-field-label mb-0">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      {tooltip && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Info size={14} className="text-muted-foreground cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs max-w-[200px]">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
    {children}
  </div>
);

export default FormField;
