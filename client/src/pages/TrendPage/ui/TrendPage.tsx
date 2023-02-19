// import { useTrendsSelector } from 'entities/trends/model';
import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Controls } from 'widgets/Controls';
import { Chart } from 'widgets/Chart';
import cls from './TrendPage.module.scss';

interface TrendPageProps {
    className?: string;
}
// const filters = useTrendsSelector((state) => state.trends.filters);
// const setShown = 'uv';
const TrendPage: FC<TrendPageProps> = ({ className }) => (
    <div className={classNames(cls.TrendPage, {}, [className])}>
        <Controls />
        <Chart />
    </div>
);
export default TrendPage;
