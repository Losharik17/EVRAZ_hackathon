import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Chip } from 'shared/ui';
import cls from './RotorTitle.module.scss';

interface RotorTitleProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    rotorTitle?: string;
    rotorDate?: string;
    after?: ReactNode;
}

export const RotorTitle: FC<RotorTitleProps> = ({
    className,
    rotorTitle,
    rotorDate,
    after, ...props
}) => (
    <div className={classNames(cls.RotorTitle, {}, [className])} {...props}>
        <div className={cls.TitleWrapper}>
            <h1>{rotorTitle}</h1>
            <Chip font='small'>{rotorDate}</Chip>
        </div>
        {after}
    </div>
);
