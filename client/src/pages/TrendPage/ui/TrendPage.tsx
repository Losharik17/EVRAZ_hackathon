import { useTrendsSelector } from 'entities/trends/model';
import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Controls } from 'widgets/Controls';
import cls from './TrendPage.module.scss';

interface TrendPageProps {
    className?: string;
}

const TrendPage: FC<TrendPageProps> = ({ className }) => {
    const filters = useTrendsSelector((state) => state.trends.filters);
    return (
        <div className={classNames(cls.TrendPage, {}, [className])}>
            <Controls />
            {filters.map((filter) => (<div key={filter}>{filter}</div>))}
        </div>
    );
};

export default TrendPage;
