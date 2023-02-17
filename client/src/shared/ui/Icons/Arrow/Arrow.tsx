import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Arrow.module.scss';

interface ArrowProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Arrow: FC<ArrowProps> = ({ className, ...props }) => (
    <div className={classNames(cls.Arrow, {}, [className])} {...props}>{'>'}</div>
);
