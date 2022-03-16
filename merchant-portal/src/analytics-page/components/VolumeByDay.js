import * as React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { styled, useTheme } from '@mui/material/styles';

function VolumeByDay(props) {
  const { data } = props;
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <Line type="monotone" dot={false} dataKey="value" stroke={theme.palette.primary.main} strokeWidth={2}/>
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'Dollars', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default VolumeByDay;