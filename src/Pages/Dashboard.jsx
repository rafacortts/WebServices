import React from "react";
import Sidebar from "../Components/Sidebar";
import MenuDash from "../Components/MenuDash";
import DashboardStatsGrid from "../Components/DashboardStats";
import BuyerProfilePieChart from "../Components/DashPie";
import RecentOrders from "../Components/DashSell";
import PopularProducts from "../Components/DashProducts";
import TransactionChart from "../Components/DashGraphic";

const Home = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      {/* Barra lateral */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex flex-col flex-1 p-4 overflow-auto">
        {/* Menu Dashboard */}
        <MenuDash className="h-full w-full mb-4" />

        {/* Estatísticas do Dashboard e Gráfico de Perfil do Comprador */}
        <div className="flex flex-col items-center mt-6">
          <DashboardStatsGrid />

          <div className="flex flex-col md:flex-row mt-8 w-full justify-between">
            <BuyerProfilePieChart className="w-full md:w-1/2 p-4" />
            <TransactionChart className="w-full md:w-1/2 p-4" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full mt-6">
          <RecentOrders className="w-full lg:w-1/2 p-4" />
          <PopularProducts className="w-full lg:w-1/2 p-4" />
        </div>
      </div>
    </div>
  );
};

export default Home;
