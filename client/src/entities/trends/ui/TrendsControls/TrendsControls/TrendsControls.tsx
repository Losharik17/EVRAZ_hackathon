import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TrendsControls.module.scss';

interface TrendsControlsProps {
    className?: string;
    label?: ReactNode;
    body?: ReactNode;
}

export const TrendsControls: FC<TrendsControlsProps> = ({ label, body, className }) => (
    <div className={classNames(cls.TrendsControls, {}, [className])}>
        {label}
        {body}
    </div>
);
