import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../lib/helpers';

const recentOrderData = [
  {
    id: '1',
    product_id: '4324',
    customer_id: '23143',
    customer_name: 'João da Silva',
    order_date: '2022-05-17T03:24:00',
    order_total: '$435.50',
    current_order_status: 'ENTREGUE',
    shipment_address: 'Rua dos Bobos, nº 0, São Paulo, SP, 01001-000',
  },
  {
    id: '7',
    product_id: '7453',
    customer_id: '96453',
    customer_name: 'Maria Souza',
    order_date: '2022-05-14T05:24:00',
    order_total: '$96.35',
    current_order_status: 'ENTREGUE',
    shipment_address: 'Avenida Brasil, nº 100, Rio de Janeiro, RJ, 20040-010',
  },
  {
    id: '2',
    product_id: '5434',
    customer_id: '65345',
    customer_name: 'Pedro Oliveira',
    order_date: '2022-05-17T07:14:00',
    order_total: '$836.44',
    current_order_status: 'ENVIADO',
    shipment_address: 'Rua das Flores, nº 500, Belo Horizonte, MG, 30123-456',
  },
  {
    id: '3',
    product_id: '9854',
    customer_id: '87832',
    customer_name: 'Ana Costa',
    order_date: '2022-05-16T12:40:00',
    order_total: '$334.50',
    current_order_status: 'ENVIADO',
    shipment_address: 'Travessa das Oliveiras, nº 25, Salvador, BA, 40010-020',
  },
  {
    id: '4',
    product_id: '8763',
    customer_id: '09832',
    customer_name: 'Carlos Santos',
    order_date: '2022-05-14T03:24:00',
    order_total: '$876.00',
    current_order_status: 'ENVIADO',
    shipment_address: 'Rua das Palmeiras, nº 10, Recife, PE, 50020-030',
  },
  {
    id: '5',
    product_id: '5627',
    customer_id: '97632',
    customer_name: 'Fernanda Lima',
    order_date: '2022-05-14T05:24:00',
    order_total: '$96.35',
    current_order_status: 'ENTREGUE',
    shipment_address: 'Avenida Paulista, nº 800, São Paulo, SP, 01310-100',
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Últimos Pedidos</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3 overflow-x-auto">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="px-2 py-1 text-left">ID</th>
              <th className="px-2 py-1 text-left">Produto</th>
              <th className="px-2 py-1 text-left">Cliente</th>
              <th className="px-2 py-1 text-left">Período</th>
              <th className="px-2 py-1 text-left">Valor</th>
              <th className="px-2 py-1 text-left">Envio</th>
              <th className="px-2 py-1 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id} className="border-t border-gray-200">
                <td className="px-2 py-1">
                  <Link to={`/order/${order.id}`}>#{order.id}</Link>
                </td>
                <td className="px-2 py-1">
                  <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                </td>
                <td className="px-2 py-1">
                  <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
                </td>
                <td className="px-2 py-1">
                  {format(new Date(order.order_date), 'dd MMM yyyy')}
                </td>
                <td className="px-2 py-1">{order.order_total}</td>
                <td className="px-2 py-1">{order.shipment_address}</td>
                <td className="px-2 py-1">{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
