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
    <div style={{ width: '100%', height: '100%' }} className={classNames(cls.SchemeRangeContainer, {}, [className])}>
        <div className={cls.Range}>{range}</div>
        <div className={cls.Progress}>{progress}</div>
    </div>
);
