import { Button } from "@/components/ui/button";

const StickyFooter = () => (
  <div className="sticky bottom-0 z-30 border-t border-border bg-card/95 backdrop-blur-sm">
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-4 flex items-center justify-end gap-3">
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Save Draft</Button>
      <Button>Save Asset</Button>
    </div>
  </div>
);

export default StickyFooter;
