import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Updated data structure
const data = [
  { score: 1, locationA: 10, locationB: 15 },
  { score: 2, locationA: 12, locationB: 20 },
  { score: 3, locationA: 5, locationB: 8 },
  { score: 4, locationA: 4, locationB: 6 },
  { score: 5, locationA: 9, locationB: 10 },
  { score: 6, locationA: 7, locationB: 9 },
  { score: 7, locationA: 3, locationB: 4 },
  { score: 8, locationA: 6, locationB: 7 },
  { score: 9, locationA: 8, locationB: 6 },
  { score: 10, locationA: 10, locationB: 12 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis dataKey="score" />
          <YAxis />


          <Bar dataKey="locationA" fill="#000000" name="Location A" />
          <Bar dataKey="locationB" fill="#D1D1D1" name="Location B" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
