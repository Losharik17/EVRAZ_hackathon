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
import { BrushTraveller } from 'shared/assets';
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

export const Chart: FC<ChartProps> = ({ className }) => {
    const array: any = [];
    return (
        <div className={classNames(cls.Chart, {}, [className])}>
            <ResponsiveContainer
                width='100%'
                height='100%'
                debounce={2}
            >
                <LineChart data={data}>
                    <XAxis
                        dataKey='name'
                        interval={3}
                        padding={{ left: 30 }}
                    />
                    <YAxis
                        // typeof Axiss
                        type='category'
                        padding={{ top: 30 }}
                    />
                    {/* Compeleted */}
                    <Legend
                        verticalAlign='top'
                        iconType='plainline'
                    />
                    {/* TODO: Change data display */}
                    <Tooltip
                        // The offset size between the position of tooltip and the active position.
                        offset={5}
                        cursor={{ stroke: '#9B9B9C' }}
                        // content={(
                        //     <ChartTooltip />
                        // )}
                        // Sort items in payload
                        // itemSorter={() => {}}
                    />
                    <Brush
                        traveller={(<BrushTraveller style={{ display: 'flex' }} />)}
                        data={data}
                        dataKey='name'
                        travellerWidth={10}
                    />
                    {/* Done */}
                    <CartesianGrid stroke='#eaeaea' />
                    {/* TODO: Connect with server */}
                    {array.map(({ color, key, name }: any) => (
                        <Line
                            key={name}
                            // Set data key for chart
                            name={name}
                            dataKey={`${Math.random()}`}
                            type='linear'
                            legendType='plainline'
                            // Change active dot, optional
                            activeDot={{ stroke: 'red', strokeWidth: 4 }}
                            // Set color
                            stroke={`${Math.random()}`}
                            strokeWidth='2px'
                            // Hide chart with condition
                            hide
                            points={[{ x: 12, y: 12, value: 240 }]}
                            // unit
                        />
                    ))}
                    <Line type='monotone' dataKey='uv' stroke='red' />
                    <Line dataKey='pv' stroke='yellow' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
