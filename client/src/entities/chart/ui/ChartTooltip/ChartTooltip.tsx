import { FC } from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ChartTooltip.module.scss';

interface ChartTooltipProps extends TooltipProps<ValueType, NameType> {
    className?: string;
}

export const ChartTooltip: FC<ChartTooltipProps> = ({
    className,
    active,
    payload,
    label,
}) => {
    if (active) {
        return (
            <div className={classNames(cls.ChartTooltip, {}, [className])}>
                <div className={cls.ChartLabel}>{label}</div>
                <div className={cls.ChartBody}>
                    <span>{label}</span>
                    <span>{payload?.[1].value}</span>
                    <>{JSON.stringify(payload)}</>
                </div>
            </div>
        );
    }

    return null;
};
