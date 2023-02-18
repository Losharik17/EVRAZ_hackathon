// import { useTrendsSelector } from 'entities/trends/model';
import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Controls } from 'widgets/Controls';
import { Chart } from 'widgets/Chart';
import cls from './TrendPage.module.scss';

interface TrendPageProps {
    className?: string;
}
// const setShown = 'uv';
// const filters = useTrendsSelector((state) => state.trends.filters);
const TrendPage: FC<TrendPageProps> = ({ className }) => (
    <div className={classNames(cls.TrendPage, {}, [className])}>
        <Controls />
        <Chart />
    </div>
);
export default TrendPage;
