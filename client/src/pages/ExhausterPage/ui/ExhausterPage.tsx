import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Exhauster } from 'shared/ui';
import { Exhauster as IExhauster } from 'shared/api/models';
import cls from './ExhausterPage.module.scss';

interface ExhausterPageProps {
    className?: string;
}

const ExhausterPage: FC<ExhausterPageProps> = ({ className }) => {
    const getExhauster = (): IExhauster => ({});
    const exhauster = getExhauster();

    return (
        <div className={classNames(cls.ExhausterPage, {}, [className])}>
            <Exhauster exhauster={exhauster} />
        </div>
    );
};

export default ExhausterPage;
