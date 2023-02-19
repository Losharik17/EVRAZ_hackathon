import { FC, useEffect, useLayoutEffect } from 'react';
import { useLazyGetAglomachineQuery, useLazyGetExhausterQuery } from 'shared/api/service/exhauster';
import { classNames } from 'shared/lib';
import { ExhausterCard } from 'widgets/ExhausterCard';
import cls from './ServicePage.module.scss';

interface ServicePageProps {
    className?: string;
}

const ServicePage: FC<ServicePageProps> = ({ className }) => {
    // const [getExhauster, { data: exhauster, isLoading }] = useLazyGetExhausterQuery();
    const [getAlgomachines, { data: algomachine }] = useLazyGetAglomachineQuery();

    useLayoutEffect(() => {
        getAlgomachines('');
    }, []);
    return (
        <div className={classNames(cls.ServicePage, {}, [className])}>
            <div className={cls.Wrapper}>
                <div className={cls.Aglomaschine}>
                    {algomachine && algomachine.eksgausters.map((exhauster) => (
                        <ExhausterCard
                            key={exhauster.id}
                            className={cls.ExhausterCard}
                            exhauster={exhauster}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
