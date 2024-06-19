import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Despesas: 4000, Rendimentos: 2400 },
  { name: 'Feb', Despesas: 3000, Rendimentos: 1398 },
  { name: 'Mar', Despesas: 2000, Rendimentos: 9800 },
  { name: 'Apr', Despesas: 2780, Rendimentos: 3908 },
  { name: 'May', Despesas: 1890, Rendimentos: 4800 },
  { name: 'Jun', Despesas: 2390, Rendimentos: 3800 },
  { name: 'Jul', Despesas: 3490, Rendimentos: 4300 },
  { name: 'Aug', Despesas: 2000, Rendimentos: 9800 },
  { name: 'Sep', Despesas: 2780, Rendimentos: 3908 },
  { name: 'Oct', Despesas: 1890, Rendimentos: 4800 },
  { name: 'Nov', Despesas: 2390, Rendimentos: 3800 },
  { name: 'Dec', Despesas: 3490, Rendimentos: 4300 },
];

export default function TransactionChart() {
  return (
    <div className="h-auto bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transações</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Rendimentos" fill="#00C2FF" />
            <Bar dataKey="Despesas" fill="red" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
