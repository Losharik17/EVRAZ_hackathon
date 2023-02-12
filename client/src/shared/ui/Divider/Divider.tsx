import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Divider.module.scss';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    className?: string;
    vertical?: boolean;
}

export const Divider: FC<DividerProps> = ({ className, vertical, ...props }) => (
    <hr
        style={{ transform: vertical ? 'rotate(90deg)' : 'none' }}
        className={classNames(cls.Divider, {}, [className])}
        {...props}
    />
);
