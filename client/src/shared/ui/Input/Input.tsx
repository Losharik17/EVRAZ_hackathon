import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: FC<InputProps> = ({ className, ...props }) => (
    <input
        className={classNames(cls.Input, {}, [className])}
        {...props}
    />
);
