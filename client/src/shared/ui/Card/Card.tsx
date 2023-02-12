import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
}

export const Card: FC<CardProps> = ({ className, children, ...props }) => (
    <div
        className={classNames(cls.Card, {}, [className])}
        {...props}
    >
        {children}
    </div>
);
