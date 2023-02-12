import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './ExhausterPage.module.scss';

interface ExhausterPageProps {
    className?: string;
}

const ExhausterPage: FC<ExhausterPageProps> = ({ className }) => (
    <div className={classNames(cls.ExhausterPage, {}, [className])} />
);

export default ExhausterPage;
