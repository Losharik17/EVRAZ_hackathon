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
    <div className={classNames(cls.PropertyWrapper, {}, [className])}>
        <div className={cls.Property}>
            <div>{ before }</div>
            <Alert className={cls.PropertyBody}>
                <div className={cls.PropertyTitle}>{title}</div>
                {value && <div className={cls.PropertyValue}>{value}</div>}
            </Alert>
        </div>
        { children && (
            <div className={cls.PropertyChildren}>
                {children}
            </div>
        )}
    </div>
);
