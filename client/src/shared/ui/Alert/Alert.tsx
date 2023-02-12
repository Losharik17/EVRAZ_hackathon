import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Alert.module.scss';

type AlertTheme = 'idle' | 'critical' | 'warning' | 'info'
type AlertJustify = 'spaceBetween' | 'spaceAround' | 'start' | 'center' | 'end'

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: AlertTheme;
    justify?: AlertJustify;
}

export const Alert: FC<AlertProps> = ({
    className,
    children,
    theme = 'idle',
    justify = 'start',
    ...props
}) => (
    <div
        className={classNames(cls.Alert, {}, [className, cls[theme], cls[justify]])}
        {...props}
    >
        {children}
    </div>
);
