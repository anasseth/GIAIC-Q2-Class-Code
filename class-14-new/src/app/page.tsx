import BottomNavigation from "@/components/ui/bottom-navigation";
import CustomCard from "@/components/ui/card-custom";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-between items-center mt-[70px]">
        <CustomCard />
        <CustomCard />
      </div>
      <BottomNavigation />
    </>
  );
}
