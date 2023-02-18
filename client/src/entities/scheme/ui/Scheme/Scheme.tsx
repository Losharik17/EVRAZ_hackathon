import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Scheme.module.scss';

type SchemeVariants = 'dark' | 'light'

interface SchemeProps {
    className?: string;
    title?: ReactNode;
    children?: ReactNode;
    variant?: SchemeVariants
}

export const Scheme: FC<SchemeProps> = ({
    className,
    title,
    variant = 'dark',
    children,
}) => (
    <div className={classNames(cls.Scheme, {}, [className, cls[variant]])}>
        {title && <div className={classNames(cls.SchemeTitle)}>{title}</div>}
        {children && <div className={classNames(cls.SchemeBody)}>{children}</div>}
    </div>
);
