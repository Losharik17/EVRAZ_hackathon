import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Scheme.module.scss';

interface SchemeProps {
    className?: string;
}

export const Scheme: FC<SchemeProps> = ({ className }) => (
    <div className={wclassNames(cls.Scheme, {}, [className])} />
);
