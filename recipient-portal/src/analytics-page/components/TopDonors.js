import * as React from 'react';
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';

function TopDonors(props) {
  const { data } = props;

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="public_key" />
        <YAxis label={{ value: 'Dollars', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Tooltip/>
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TopDonors;