/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const data = [
    {
      subject: 'Neutral',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Positive',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Very Positive',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Negative',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Very Negative',
      A: 85,
      B: 90,
      fullMark: 150,
    },

  ];
  
  export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />

            <Radar name="Mike" dataKey="A" stroke="#000000" fill="#000000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
    }
  }
  