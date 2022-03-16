import * as React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';
import { styled, useTheme } from '@mui/material/styles';

function Recipients(props) {
  const { data } = props;
  const theme = useTheme();
  const COLORS = [theme.palette.success.main, theme.palette.secondary.main, theme.palette.error.main, theme.palette.warning.main];

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
        <XAxis dataKey="recipient_name" />
        <YAxis label={{ value: 'Dollars', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Tooltip/>
        <Bar dataKey="value" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Recipients;