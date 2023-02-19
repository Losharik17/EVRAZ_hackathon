import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SchemeProgressBar, SchemeProgressBarProps } from 'entities/scheme/ui';
import { progresBarsRange } from 'shared/api/consts';
import cls from './SchemeProgressIndicator.module.scss';

type Indicator = 'Oil presure' | 'Oil level' | 'Gas temperature';

enum IndicatorEnum {
    OIL_PRESURE = 'Oil presure',
    OIL_LEVEL = 'Oil level',
    GAS_TEMPERATURE = 'Gas temperature'
}

const variants = {
    [IndicatorEnum.OIL_PRESURE]: {
        title: 'ДАВЛЕНИЕ МАСЛА, кг/см',
        background: '#FDC65F',
        range: progresBarsRange.oilPresureRange,
    },
    [IndicatorEnum.OIL_LEVEL]: {
        title: 'УРОВЕНЬ МАСЛА, %',
        background: '#F18863',
        range: progresBarsRange.oilLevelRange,
    },
    [IndicatorEnum.GAS_TEMPERATURE]: {
        title: 'ТЕМПЕРАТУРА ГАЗА, C',
        background: '#B3B9B9',
        range: progresBarsRange.gasTemperatureRange,
    },
};

interface SchemeProgressIndicatorProps {
    className?: string;
    value: number;
    type: Indicator;
}

export const SchemeProgressIndicator: FC<SchemeProgressIndicatorProps> = ({
    className,
    value,
    type,
}) => (
    <SchemeProgressBar
        className={classNames(cls.SchemeProgressIndicator, {}, [className])}
        value={value}
        title={variants[type].title}
        range={variants[type].range}
        background={variants[type].background}
    />
);
