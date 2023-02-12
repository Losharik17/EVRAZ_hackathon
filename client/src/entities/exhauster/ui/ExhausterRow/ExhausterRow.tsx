import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ExhausterRow.module.scss';

interface ExhausterRowProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    title: string;
    before: ReactNode;
    after: ReactNode;
}

export const ExhausterRow: FC<ExhausterRowProps> = ({
    className,
    title,
    before,
    after,
    ...props
}) => (
    <div className={classNames(cls.ExhausterRow, {}, [className])} {...props}>
        <div className={classNames(cls.ExhausterTitle)}>
            {before}
            <span>{title}</span>
        </div>
        {after}
    </div>
);
