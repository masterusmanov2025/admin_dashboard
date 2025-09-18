import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { year: 2016, 'San Francisco': 120, 'Bangkok': 180, 'Paris': 150 },
  { year: 2017, 'San Francisco': 80, 'Bangkok': 160, 'Paris': 200 },
  { year: 2018, 'San Francisco': 180, 'Bangkok': 120, 'Paris': 450 },
  { year: 2019, 'San Francisco': 220, 'Bangkok': 180, 'Paris': 300 }
];

const StackedAreaChart = () => {
  return (
    <div className="w-full bg-white mt-[24px]">
      <div className="max-w-4xl mx-auto">
               
        <div className="">
          <ResponsiveContainer width="100%" height={500}>
            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 40,
                bottom: 20,
              }}
            >
              <XAxis 
                dataKey="year" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: '#6b7280' }}
                domain={[0, 'dataMax']}
                tickCount={6}
              />
              
              <Area
                type="monotone"
                dataKey="San Francisco"
                stackId="1"
                stroke="#a855f7"
                fill="#a855f7"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="Bangkok"
                stackId="1"
                stroke="#14b8a6"
                fill="#14b8a6"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="Paris"
                stackId="1"
                stroke="#f97316"
                fill="#f97316"
                strokeWidth={2}
              />
              
              <Legend 
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{
                  paddingTop: '20px',
                  fontSize: '14px'
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StackedAreaChart;