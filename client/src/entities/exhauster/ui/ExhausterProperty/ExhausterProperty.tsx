import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ExhausterProperty.module.scss';

interface ExhausterPropertyProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    title: string;
    description?: ReactNode;
    before?: ReactNode;
}

export const ExhausterProperty: FC<ExhausterPropertyProps> = ({
    className,
    title,
    description,
    before,
    ...props
}) => (
    <div className={classNames(cls.ExhausterProperty, {}, [className])} {...props}>
        <div className={cls.TitleWrapper}>
            <div className={cls.Before}>{before}</div>
            <h2 className={cls.Title}>{title}</h2>
        </div>
        <div className={cls.Description}>{description}</div>
    </div>
);
