import { Plus, Upload, Package, Wrench, CheckCircle, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KpiCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  accentClass?: string;
}

const KpiCard = ({ label, value, icon, accentClass = "text-primary" }: KpiCardProps) => (
  <div className="kpi-card flex items-center gap-4">
    <div className={`flex h-11 w-11 items-center justify-center rounded-lg bg-muted ${accentClass}`}>
      {icon}
    </div>
    <div>
      <p className="text-2xl font-semibold font-display text-foreground">{value.toLocaleString()}</p>
      <p className="text-xs text-muted-foreground font-medium">{label}</p>
    </div>
  </div>
);

const HeroHeader = () => {
  const kpis = [
    { label: "Total Assets", value: 2847, icon: <Package size={20} /> },
    { label: "In Use", value: 2103, icon: <CheckCircle size={20} />, accentClass: "text-emerald-600" },
    { label: "In Repair", value: 89, icon: <Wrench size={20} />, accentClass: "text-accent" },
    { label: "Retired", value: 655, icon: <Archive size={20} />, accentClass: "text-muted-foreground" },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground tracking-tight">
            Company Assets Database
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage, track and monitor all company assets across lifecycle
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Upload size={16} />
            Import
          </Button>
          <Button className="gap-2">
            <Plus size={16} />
            Add New Asset
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>
    </div>
  );
};

export default HeroHeader;
