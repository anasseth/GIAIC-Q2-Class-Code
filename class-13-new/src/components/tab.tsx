export default function Tab() {
  return (
    <div className="font-sans p-4">
      <ul className="flex">
        <li
          id="homeTab"
          className="tab text-blue-600 font-bold text-[15px] py-2.5 px-5 border-b-2 border-blue-600 cursor-pointer"
        >
          Technology
        </li>
        <li
          id="settingTab"
          className="tab text-gray-600 font-semibold text-[15px] py-2.5 px-5 border-b-2 border-transparent cursor-pointer"
        >
          AI
        </li>
        <li
          id="profileTab"
          className="tab text-gray-600 font-semibold text-[15px] py-2.5 px-5 border-b-2 border-transparent cursor-pointer"
        >
          ChatGPT
        </li>
        <li
          id="profileTab"
          className="tab text-gray-600 font-semibold text-[15px] py-2.5 px-5 border-b-2 border-transparent cursor-pointer"
        >
          Meta AI
        </li>
      </ul>
{/* 
      <div id="homeContent" className="tab-content max-w-2xl block mt-8">
        <h4 className="text-lg font-bold text-gray-600">Home</h4>
        <p className="text-sm text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in
          lacinia. Proin aliquam turpis at erat venenatis malesuada.
        </p>
      </div>
      <div id="settingContent" className="tab-content max-w-2xl hidden mt-8">
        <h4 className="text-lg font-bold text-gray-600">Setting</h4>
        <p className="text-sm text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in
          lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper,
          justo vitae consequat fermentum, felis diam posuere ante, sed
          fermentum quam justo in dui.
        </p>
      </div>
      <div id="profileContent" className="tab-content max-w-2xl hidden mt-8">
        <h4 className="text-lg font-bold text-gray-600">Profile</h4>
        <p className="text-sm text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in
          lacinia.
        </p>
      </div> */}
    </div>
  );
}
