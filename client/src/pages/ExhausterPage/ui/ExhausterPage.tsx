import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './ExhausterPage.module.scss';
import { Exhauster } from 'shared/ui';

interface ExhausterPageProps {
    className?: string;
}

const ExhausterPage: FC<ExhausterPageProps> = ({ className }) => (
    <div className={classNames(cls.ExhausterPage, {}, [className])} >
        <Exhauster />
    </div>
);

export default ExhausterPage;
