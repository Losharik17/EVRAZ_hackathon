import { FC, useEffect, useLayoutEffect } from 'react';
import { useLazyGetExhausterQuery } from 'shared/api/service/exhauster';
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
            <div className={cls.Wrapper}>
                <div className={cls.Aglomaschine}>
                    {exhauster && (
                        <ExhausterCard
                            className={cls.ExhausterCard}
                            exhauster={exhauster}
                        />
                    )}
                    {exhauster && (
                        <ExhausterCard
                            className={cls.ExhausterCard}
                            exhauster={exhauster}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
