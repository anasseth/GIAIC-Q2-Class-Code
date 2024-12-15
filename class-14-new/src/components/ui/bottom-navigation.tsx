import { Compass, Home, Menu, User } from "lucide-react";

export default function BottomNavigation() {
  return (
    <div className="flex items-center justify-around bg-gray-900 h-16 fixed bottom-0 w-[100vw]">
      <a>
        <Home />
      </a>
      <a>
        <Compass />
      </a>
      <a>
        <Menu />
      </a>
      <a>
        <User />
      </a>
    </div>
  );
}
