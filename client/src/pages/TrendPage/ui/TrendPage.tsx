// import { useTrendsSelector } from 'entities/trends/model';
import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib';
import { Controls } from 'widgets/Controls';
import { Chart } from 'widgets/Chart';
import { useLocation } from 'react-router-dom';
import { useLazyGetChartTitlesQuery } from 'shared/api/service/exhauster';
import cls from './TrendPage.module.scss';

interface TrendPageProps {
    className?: string;
}

const TrendPage: FC<TrendPageProps> = ({ className }) => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const id = query.get('id');

    const [getChartTitles, { data }] = useLazyGetChartTitlesQuery();

    useEffect(() => {
        getChartTitles('');
    }, []);
    console.log(data);
    return (
        <div className={classNames(cls.TrendPage, {}, [className])}>
            {data !== undefined ? <Controls controls={data} /> : <></>}
            <Chart />
        </div>
    );
};

export default TrendPage;
