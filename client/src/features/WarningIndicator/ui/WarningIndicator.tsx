import React, { FC, ReactNode } from 'react';
import { Chip } from 'shared/ui';

type WarningVariants = 'idle' | 'warning' | 'critical';
type WarningFont = 'small' | 'medium' | 'large';
interface WarningIndicatorProps {
    className?: string;
    children?: ReactNode;
    variant?: WarningVariants;
    font?: WarningFont;
}

export const WarningIndicator: FC<WarningIndicatorProps> = ({
    className,
    children,
    variant,
    font = 'small',
}) => (
    <Chip
        className={className}
        variant={variant}
        font={font}
    >
        {children}
    </Chip>
);
