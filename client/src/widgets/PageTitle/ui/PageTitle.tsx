import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageTitle.module.scss';

interface PageTitleProps {
    className?: string;
    title?: string;
}

export const PageTitle: FC<PageTitleProps> = ({ className, title }) => (
    <h1 className={classNames(cls.PageTitle, {}, [className])}>{title}</h1>
);
