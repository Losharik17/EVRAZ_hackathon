import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Alert } from 'shared/ui';
import cls from './Property.module.scss';

interface PropertyProps {
    className?: string;
    before?: ReactNode;
    title?: ReactNode;
    value?: ReactNode;
    children?: ReactNode;
    isNested?: boolean;
}

export const Property: FC<PropertyProps> = ({
    before,
    title,
    value,
    children,
    isNested,
    className,
}) => (
    <div className={classNames('', {}, [className])}>
        <div className={cls.Property}>
            {before}
            <Alert className={cls.PropertyBody}>
                {title}
                {value}
            </Alert>
        </div>
        <div>
            {children}
        </div>
    </div>
);
