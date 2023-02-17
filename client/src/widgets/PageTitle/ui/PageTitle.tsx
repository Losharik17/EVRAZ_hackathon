import { FC, ReactNode } from 'react';
import { FileIcon } from 'shared/assets';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './PageTitle.module.scss';

interface PageTitleProps {
    className?: string;
    title?: string;
    after?: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ className, title, after }) => (
    <h1 className={classNames(cls.PageTitleWrapper, {}, [className])}>
        <div className={cls.PageTitle}>
            <Button>
                <FileIcon />
            </Button>
            {title}
        </div>
        {after}
    </h1>
);
