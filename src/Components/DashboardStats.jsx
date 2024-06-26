import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';

const DashboardStatsGrid = () => {
  // Constantes para os ícones
  const IconVendas = <IoBagHandle className="text-2xl text-white" />;
  const IconGastos = <IoPieChart className="text-2xl text-white" />;
  const IconClientes = <IoPeople className="text-2xl text-white" />;
  const IconPedidos = <IoCart className="text-2xl text-white" />;

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-primaryColor">
          {IconVendas}
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Vendas</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$54232</strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-customRed">
          {IconGastos}
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Gastos</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$3423</strong>
            <span className="text-sm text-green-500 pl-2">-343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-black">
          {IconClientes}
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Clientes</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">12313</strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-black">
          {IconPedidos}
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Pedidos</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">16432</strong>
            <span className="text-sm text-red-500 pl-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}

export default DashboardStatsGrid;
