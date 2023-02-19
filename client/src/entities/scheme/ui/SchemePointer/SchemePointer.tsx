import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Status } from 'shared/api/models';
import cls from './SchemePointer.module.scss';

interface SchemePointerProps {
    className?: string;
    label: string;
    variant: Status;
}

export const SchemePointer: FC<SchemePointerProps> = ({ className, label, variant = 'idle' }) => (
    <div className={classNames(cls.SchemePointer, {}, [className, cls[variant]])}>
        {label[0]}
    </div>
);
