import { FC } from 'react';
import {
    LineChart, CartesianGrid,
    Line, XAxis, YAxis, Tooltip, Area, AreaChart, ResponsiveContainer,
} from 'recharts';
import { classNames } from 'shared/lib';
import { Controls } from 'widgets/Controls';
import cls from './TrendPage.module.scss';

interface TrendPageProps {
    className?: string;
}

const TrendPage: FC<TrendPageProps> = ({ className }) => (
    <div className={classNames(cls.TrendPage, {}, [className])}>
        <Controls />
    </div>
);

export default TrendPage;
