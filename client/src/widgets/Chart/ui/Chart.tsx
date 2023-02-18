import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Brush,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { ChartTooltip } from 'entities/chart/ui';
import cls from './Chart.module.scss';

interface ChartProps {
    className?: string;
}

const data = [
    { name: '00:00', uv: 500, pv: 600 },
    { name: '00:15', uv: 300, pv: 200 },
    { name: '00:30', uv: 350, pv: 220 },
    { name: '00:45', uv: 330, pv: 220 },
    { name: '01:00', uv: 320, pv: 230 },
    { name: '01:15', uv: 200, pv: 210 },
    { name: '01:30', uv: 600, pv: 200 },
    { name: '01:45', uv: 100, pv: 200 },
    { name: '02:00', uv: 320, pv: 200 },
    { name: '02:15', uv: 200, pv: 245 },
    { name: '02:30', uv: 600, pv: 245 },
    { name: '02:45', uv: 100, pv: 245 },
    { name: '03:00', uv: 320, pv: 200 },
    { name: '03:15', uv: 200, pv: 200 },
    { name: '03:30', uv: 600, pv: 200 },
    { name: '03:45', uv: 100, pv: 200 },
    { name: '04:00', uv: 320, pv: 200 },
    { name: '04:15', uv: 200, pv: 200 },
    { name: '04:30', uv: 600, pv: 200 },
    { name: '04:45', uv: 100, pv: 200 },
];

export const Chart: FC<ChartProps> = ({ className }) => (
    <div className={classNames(cls.Chart, {}, [className])}>
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart syncMethod='index' syncId={30} data={data}>
                <XAxis dataKey='name' interval={3} padding={{ left: 30 }} />
                <YAxis padding={{ top: 30 }} />
                <Legend verticalAlign='top' iconType='diamond' />
                <Tooltip
                    cursor={{ stroke: '#9B9B9C' }}
                    content={(
                        <ChartTooltip />
                    )}
                />
                {/* <Brush
                        // traveller={<MarkIcon />}
                        data={data}
                        dataKey='name'
                        travellerWidth={9}
                    /> */}
                <Brush
                    dataKey='pv'
                    travellerWidth={9}
                />

                <CartesianGrid stroke='#eaeaea' />
                <Line
                    type='linear'
                    dot={{ stroke: 'red', strokeWidth: 2 }}
                    activeDot={{ stroke: 'red', strokeWidth: 4 }}
                    // label={{ fill: 'red', fontSize: 20 }}
                    points={[{ x: 12, y: 12, value: 240 }]}
                    dataKey='uv'
                    strokeWidth='2px'
                    stroke='#8884d8'
                />
                <Line type='linear' dataKey='pv' strokeWidth='2px' stroke='#ED7817' />
            </LineChart>
        </ResponsiveContainer>
    </div>
);
