import Sidebar from "../Components/Sidebar";
import MenuDash from "../Components/MenuDash";

import React from "react";

const Home = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        <MenuDash className="h-full w-full" />
      </div>
    </div>
  );
};

export default Home;
