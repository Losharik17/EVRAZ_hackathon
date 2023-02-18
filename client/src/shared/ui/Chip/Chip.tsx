import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Chip.module.scss';

type ChipVariant = 'idle' | 'warning' | 'critical';
type ChipFont = 'small' | 'medium' | 'large';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    font?: ChipFont;
    variant?: ChipVariant;
}

export const Chip: FC<ChipProps> = ({
    className,
    children,
    font = 'large',
    variant = 'idle',
    ...props
}) => (
    <div
        className={classNames(cls.Chip, {}, [className, cls[font], cls[variant]])}
        {...props}
    >
        {children}
    </div>
);
