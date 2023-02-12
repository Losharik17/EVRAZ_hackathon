import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ExhausterBody.module.scss';

interface ExhausterBodyProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const ExhausterBody: FC<ExhausterBodyProps> = ({ className, children, ...props }) => (
    <div className={classNames(cls.ExhausterBody, {}, [className])} {...props}>{children}</div>
);
