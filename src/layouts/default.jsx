import { Outlet } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-100">
      <header className="flex items-center justify-between w-full p-4 bg-white shadow-md">
        <div className="flex items-center">
          <Gamepad2 className="h-8 w-8 text-blue-500" />
          <h1 className="ml-2 text-2xl font-bold text-gray-800">IdleTanjun</h1>
        </div>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;