import HeroHeader from "@/components/assets/HeroHeader";
import AssetForm from "@/components/assets/AssetForm";
import StickyFooter from "@/components/assets/StickyFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pb-24">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 pt-8 pb-8">
          <HeroHeader />
          <AssetForm />
        </div>
      </div>
      <StickyFooter />
    </div>
  );
};

export default Index;
