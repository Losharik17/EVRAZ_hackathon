import { FC, ReactNode } from 'react';
import { Alert, Chip } from 'shared/ui';
import cls from './ExhausterForecast.module.scss';

interface ExhausterForecastProps {
    currentDay: ReactNode;
    forecastDay: ReactNode;
}

export const ExhausterForecast: FC<ExhausterForecastProps> = ({ currentDay, forecastDay }) => (
    <Alert className={cls.Alert}>
        <Chip className={cls.ForecastDays}>{currentDay}</Chip>
        <div className={cls.Forecast}>
            <h2 className={cls.ForecastBefore}>Прогноз</h2>
            <h2 className={cls.ForecastTitle}>{forecastDay}</h2>
        </div>
    </Alert>
);
