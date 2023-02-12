import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './TrendPage.module.scss';

interface TrendPageProps {
    className?: string;
}

const TrendPage: FC<TrendPageProps> = ({ className }) => (
    <div className={classNames(cls.TrendPage, {}, [className])} />
);

export default TrendPage;
