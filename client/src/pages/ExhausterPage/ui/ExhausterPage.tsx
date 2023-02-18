import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Exhauster } from 'shared/ui';
import cls from './ExhausterPage.module.scss';

interface ExhausterPageProps {
    className?: string;
}

const ExhausterPage: FC<ExhausterPageProps> = ({ className }) => (
    <div className={classNames(cls.ExhausterPage, {}, [className])}>
        <Exhauster />
    </div>
);

export default ExhausterPage;
