import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import cls from './TrendsBar.module.scss';

interface TrendsBarProps {
    className?: string;
}

export const TrendsBar: FC<TrendsBarProps> = ({ className }) => (
    <div className={classNames(cls.TrendsBar, {}, [className])}>
        <DateRangePicker
            initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}

        >
            <button type='button'>Select</button>
        </DateRangePicker>
    </div>
);
