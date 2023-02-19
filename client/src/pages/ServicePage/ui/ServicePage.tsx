import { FC, useEffect, useLayoutEffect } from 'react';
import { useLazyGetAglomachineQuery, useLazyGetExhausterQuery } from 'shared/api/service/exhauster';
import { classNames } from 'shared/lib';
import { ExhausterCard } from 'widgets/ExhausterCard';
import { PageLoader } from 'widgets/PageLoader';
import cls from './ServicePage.module.scss';

interface ServicePageProps {
    className?: string;
}

const ServicePage: FC<ServicePageProps> = ({ className }) => {
    // const [getExhauster, { data: exhauster, isLoading }] = useLazyGetExhausterQuery();
    const [getAlgomachines, { data: algomachines, isLoading }] = useLazyGetAglomachineQuery();

    useLayoutEffect(() => {
        getAlgomachines('');
    }, []);
    console.log(algomachines);
    return (
        <div className={classNames(cls.ServicePage, {}, [className])}>
            {isLoading && <PageLoader />}
            <div className={cls.Wrapper}>
                {algomachines !== undefined ? algomachines.map(({ eksgausters, id, number }) => (
                    <div className={cls.Aglomaschine} key={id}>
                        { eksgausters.map((exhauster) => (
                            <ExhausterCard
                                key={exhauster.id}
                                className={cls.ExhausterCard}
                                exhauster={exhauster}
                            />
                        ))}
                    </div>
                )) : <></>}
            </div>
        </div>
    );
};

export default ServicePage;
