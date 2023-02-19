import React, { Children, FC, ReactNode } from 'react';
import { Chip } from 'shared/ui';
import cls from './WarningIndicator.module.scss';

type WarningVariants = 'idle' | 'warning' | 'critical';
type WarningFont = 'small' | 'medium' | 'large';
interface WarningIndicatorProps {
    className?: string;
    title?: string;
    variant?: WarningVariants;
    font?: WarningFont;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const WarningIndicator: FC<WarningIndicatorProps> = ({
    className,
    title,
    variant,
    font = 'small',
    Icon,
}) => (
    <Chip
        className={className}
        variant={variant}
        font={font}
    >
        {title}
        {Icon && <Icon className={cls[variant]} />}

    </Chip>
);
