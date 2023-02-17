import { useTrendsSelector } from 'entities/trends/model';
import { FC } from 'react';
import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
} from 'recharts';
import { classNames } from 'shared/lib';
import { Controls } from 'widgets/Controls';
import {
    ValueType,
    NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import { ChartTooltip } from 'entities/chart/ui';
import cls from './TrendPage.module.scss';

interface TrendPageProps {
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

const Cursor = () => <div>123</div>;

const TrendPage: FC<TrendPageProps> = ({ className }) => {
    const filters = useTrendsSelector((state) => state.trends.filters);
    return (
        <div className={classNames(cls.TrendPage, {}, [className])}>
            <Controls />
            {filters.map((filter) => (<div key={filter}>{filter}</div>))}
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={data}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip
                        cursor={{ stroke: '#9B9B9C' }}
                        content={(
                            <ChartTooltip />
                        )}
                    />
                    <CartesianGrid stroke='#eaeaea' />
                    <Line
                        type='linear'
                        dot={<></>}
                        dataKey='uv'
                        strokeWidth='2px'
                        stroke='#8884d8'
                    />
                    <Line type='linear' dataKey='pv' strokeWidth='2px' stroke='#ED7817' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TrendPage;
