import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Label.module.scss';

interface LabelProps {
    className?: string;
    before?: ReactNode;
    body?: ReactNode;
    after?: ReactNode;
}

export const Label: FC<LabelProps> = ({
    before,
    body,
    after,
    className,
}) => (
    <div className={classNames(cls.Label, {}, [className])}>
        {before && <span>{ before }</span> }
        {body && body}
        {after && (
            <span>
                {after}
            </span>
        )}
    </div>
);
