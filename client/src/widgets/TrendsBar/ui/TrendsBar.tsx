import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DateRangePicker from 'react-bootstrap-daterangepicker';

import { Button } from 'shared/ui';
import cls from './TrendsBar.module.scss';

interface TrendsBarProps {
    className?: string;
}

export const TrendsBar: FC<TrendsBarProps> = ({ className }) => (
    <div className={classNames(cls.TrendsBar, {}, [className])}>
        <Button>Сформировать эксель</Button>
        <DateRangePicker
            initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}

        >
            <Button>Выбрать</Button>
        </DateRangePicker>
    </div>
);
