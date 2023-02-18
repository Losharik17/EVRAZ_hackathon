import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SchemeProgressBar.module.scss';

export interface SchemeProgressBarProps {
    className?: string;
    value: number;
    title: ReactNode;
    range: number;
    background: string;
}

export const SchemeProgressBar: FC<SchemeProgressBarProps> = ({
    className,
    value,
    title,
    range,
    background,
}) => (
    <div className={classNames(cls.SchemeProgressBar, {}, [className])}>
        <div
            className={cls.DataContainer}
            style={{
                transition: 'background 1s ease',
                background: `linear-gradient(to right, ${background} 0%,
                     ${background} ${value / range * 100}%,
                       #00000000 ${value / range * 100}%, #00000000 100%)`,
            }}
        >
            <div className={cls.Value} style={{ zIndex: 100 }}>{value}</div>
            <div className={cls.title} style={{ zIndex: 100 }}>{title}</div>
        </div>
    </div>
);
