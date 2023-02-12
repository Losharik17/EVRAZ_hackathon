import React, { FC, ReactNode } from 'react';
import { Chip } from 'shared/ui';

type WarningVariants = 'idle' | 'warning' | 'critical';

interface WarningIndicatorProps {
    className?: string;
    children?: ReactNode;
    variant?: WarningVariants;
}

export const WarningIndicator: FC<WarningIndicatorProps> = ({ className, children, variant }) => (
    <Chip
        className={className}
        variant={variant}
        font='small'
    >
        {children}
    </Chip>
);
