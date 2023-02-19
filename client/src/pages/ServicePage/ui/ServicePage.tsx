import { FC, useEffect, useLayoutEffect } from 'react';
import { Aglomachine } from 'shared/api/models';
import { useGetExhausterQuery, useLazyGetExhausterQuery } from 'shared/api/service/api';
import { classNames } from 'shared/lib';
import { ExhausterCard } from 'widgets/ExhausterCard';
import cls from './ServicePage.module.scss';

interface ServicePageProps {
    className?: string;
}

const ServicePage: FC<ServicePageProps> = ({ className }) => {
    const [getExhauster, { data: exhauster, isLoading }] = useLazyGetExhausterQuery();
    useLayoutEffect(() => {
        getExhauster('');
    }, []);
    return (
        <div className={classNames(cls.ServicePage, {}, [className])}>
            {/* {aglomachines.map(({ id, exhausters }) => (
                <div key={id}>
                    {exhausters.map((exhauster) => (
                        <ExhausterCard
                            key={exhauster.id}
                            exhauster={exhauster}
                        />
                    ))}
                </div>
            ))} */}
            <div className={cls.Aglomaschine}>
                {exhauster && <ExhausterCard exhauster={exhauster} />}
            </div>
        </div>
    );
};

export default ServicePage;
