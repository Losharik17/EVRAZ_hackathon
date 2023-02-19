import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ExhausterLamp.module.scss';

type LampState = 'inactive' | 'active'

interface ExhausterLampProps {
    className?: string;
    children?: ReactNode
    variant?: LampState;
}

export const ExhausterLamp: FC<ExhausterLampProps> = ({
    className,
    children,
    variant,
}) => (
    <div className={classNames(cls.ExhausterLamp, {}, [className, cls[variant]])}>
        {children}
    </div>
);
