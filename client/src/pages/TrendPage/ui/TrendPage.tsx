import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Controls } from 'widgets/Controls';
import { Chart } from 'widgets/Chart';
import { useLocation } from 'react-router-dom';
import cls from './TrendPage.module.scss';

interface TrendPageProps {
    className?: string;
}

export const TrendPage: FC<TrendPageProps> = ({ className }) => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const id = query.get('id');

    console.log(id);

    return (
        <div className={classNames(cls.TrendPage, {}, [className])}>
            <Controls />
            <Chart />
        </div>
    );
};

// export default TrendPage;
