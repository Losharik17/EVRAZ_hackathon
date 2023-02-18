import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SchemeRangeContainer.module.scss';

interface SchemeRangeContainerProps {
    className?: string;
    range?: ReactNode;
    progress?: ReactNode;
}

export const SchemeRangeContainer: FC<SchemeRangeContainerProps> = ({
    className,
    range,
    progress,
}) => (
    <div className={classNames(cls.SchemeRangeContainer, {}, [className])}>
        {range}
        {progress}
    </div>
);
