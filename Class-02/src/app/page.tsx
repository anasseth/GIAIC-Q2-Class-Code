export default function Home() {
  return (
    <>
      {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="pinkColor">Hamza</span>
          <br />I am Next JS Developer
        </div>
        <div className="childContainer"></div>
      </div>

      {/* Below Code Is With Tailwind */}
      <div className="flex justify-between items-center">
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          Hey,
          <br />
          My Name is <span className="pinkColor">Shizza</span>
          <br />I am Next JS Developer
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
