import { FC } from 'react';
import { Aglomachine } from 'shared/api/models';
import { classNames } from 'shared/lib';
import { ExhausterCard } from 'widgets/ExhausterCard';
import cls from './ServicePage.module.scss';

interface ServicePageProps {
    className?: string;
}

const ServicePage: FC<ServicePageProps> = ({ className }) => {
    const getAglomachines = (): Aglomachine[] => ([] as Aglomachine[]);
    const aglomachines = getAglomachines();

    return (
        <div className={classNames(cls.ServicePage, {}, [className])}>
            {aglomachines.map(({ id, exhausters }) => (
                <div key={id}>
                    {exhausters.map((exhauster) => (
                        <ExhausterCard
                            key={exhauster.id}
                            exhauster={exhauster}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ServicePage;
