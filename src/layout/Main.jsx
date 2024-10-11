import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex min-h-screen  mx-auto">
      <div className="hidden lg:block 2xl:w-[16%] xl:w-[18%] w-1/5  bg-[#1A416A]   min-h-screen max-h-screen overflow-y-auto sticky top-0 sidebar-scrollbar">
        <Sidebar />
      </div>
      <div className="flex-grow max-w-screen-mak w-full bg-[#FFF] pl-9 py-8 pr-9 lg:pr-20 max-h-screen overflow-y-auto sticky top-0">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
