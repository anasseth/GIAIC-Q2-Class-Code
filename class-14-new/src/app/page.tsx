import BottomNavigation from "@/components/ui/bottom-navigation";
import CustomCard from "@/components/ui/card-custom";
import Header from "@/components/ui/header";
import { GetMovieData } from "@/sanity/sanity.query";

export default async function Home() {
  const movieData = await GetMovieData();

  console.log(movieData)
  return (
    <>
      <Header />
      <div className="flex justify-between items-center mt-[70px]">
        {
          movieData.map((movie: any) => (
            <CustomCard name={movie.name} url={movie.imageURL} />
          ))
        }
      </div>
      <BottomNavigation />
    </>
  );
}
