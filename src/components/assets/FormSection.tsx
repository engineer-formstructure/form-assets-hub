import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FormSection = ({ title, icon, children, defaultOpen = true }: FormSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="section-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-muted/30 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <span className="text-primary">{icon}</span>
          <h2 className="text-base font-semibold font-display text-foreground">{title}</h2>
        </div>
        <ChevronDown
          size={18}
          className={cn(
            "text-muted-foreground transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
