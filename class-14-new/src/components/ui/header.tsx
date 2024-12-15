import { Search } from "lucide-react";
import { Input } from "./input";

export default function Header() {
  // text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400
  // bg-gray-800 pl-8 border-gray-700 focus:border-purple-500 text-white rounded
  return (
    <div className="fixed top-0 flex justify-between items-center bg-gray-900 w-[100vw] p-4">
      <div className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 font-bold">
        TikTok
      </div>
      <div className="flex justify-evenly items-center space-x-3">
        <Search />
        <Input
          placeholder="Search Movies ..."
          className="bg-gray-800 pl-8 border-gray-700 focus:border-purple-500 text-white rounded"
        />
      </div>
    </div>
  );
}
