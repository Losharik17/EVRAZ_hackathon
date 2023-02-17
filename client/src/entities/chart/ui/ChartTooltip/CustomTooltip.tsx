import { FC } from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { classNames } from 'shared/lib/classNames/classNames';
import { Divider } from 'shared/ui';
import cls from './CustomTooltip.module.scss';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
    className?: string;
}

export const CustomTooltip: FC<CustomTooltipProps> = ({
    className,
    active,
    payload,
    label,
}) => {
    if (active) {
        return (
            <div className={classNames(cls.CustomTooltip, {}, [className])}>
                <p className='label'>{`${label} : ${payload?.[1].value}`}</p>
            </div>
        );
    }

    return null;
};
