import { useEffect, useLayoutEffect, HTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import { useLocation } from 'react-router-dom';
import { useLazyGetAllExhausterPropertiesQuery } from 'shared/api/service/exhauster';
import {
    SchemeRangeContainer,
    Scheme, SchemePointer,

} from 'entities/scheme/ui';

import { SchemeProgressIndicator }
    from 'features/SchemeProgressIndicator/ui/SchemeProgressIndicator';
import {
    bearings as bearingsStyle,
    cooler,
    gas,
    gate,
    presure,
    reducer,
    temperature,
    temperature1,
    temperature2,
    temperature3,
} from 'shared/api/consts/style.exhauster';

import { Gate } from 'entities/exhauster';
import { Scale } from 'entities/scheme/ui/Scale/Scale';
import { Exhauster } from 'widgets/Exhauster/Exhauster';
import { PageLoader } from 'widgets/PageLoader';
import cls from './ExhausterPage.module.scss';
import exhausterPng from './exhauster.png';

interface ExhausterPageProps {
    className?: string;
}

const ExhausterPage: FC<ExhausterPageProps> = ({ className }) => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const id = query.get('id');
    const [getProps, { data, isLoading, isFetching }] = useLazyGetAllExhausterPropertiesQuery();

    useEffect(() => {
        getProps(id);
    }, []);

    return (
        <div className={classNames(cls.ExhausterPage, {}, [className])}>
            {isLoading && <PageLoader />}
            {data && <Exhauster exhauster={data} />}
        </div>
    );
};

export default ExhausterPage;
