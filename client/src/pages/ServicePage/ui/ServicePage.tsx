import { FC } from 'react';
import { classNames } from 'shared/lib';
import { ExhausterCard } from 'widgets/ExhausterCard';
import cls from './ServicePage.module.scss';

interface ServicePageProps {
    className?: string;
}

const ServicePage: FC<ServicePageProps> = ({ className }) => (
    <div className={classNames(cls.ServicePage, {}, [className])}>
        <div className={cls.Aglomaschine}>
            <ExhausterCard className={cls.ExhausterCard} />
            <ExhausterCard className={cls.ExhausterCard} />
        </div>
    </div>
);

export default ServicePage;
