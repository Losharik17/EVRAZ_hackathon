import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Wrapper.module.scss';

interface WrapperProps {
    className?: string;
    label?: ReactNode;
    body?: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ label, body, className }) => (
    <div className={classNames(cls.Wrapper, {}, [className])}>
        {label}
        {body}
    </div>
);
