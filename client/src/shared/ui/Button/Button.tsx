import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => (
    <button
        type='button'
        className={classNames(cls.Button, {}, [className])}
        {...props}
    >
        {children}
    </button>
);
