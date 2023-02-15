import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TrendsControlsLabel.module.scss';

interface TrendsControlsLabelProps {
    className?: string;
    before?: ReactNode;
    body?: ReactNode;
    after?: ReactNode
}

export const TrendsControlsLabel: FC<TrendsControlsLabelProps> = ({
    before,
    body,
    after,
    className,
}) => (
    <div className={classNames(cls.TrendsControlsLabel, {}, [className])}>
        {before && (
            <div>
                {before}
            </div>
        )}
        {body && (
            <div>
                {body}
            </div>
        )}
        {after && (
            <div>
                {after}
            </div>
        )}
    </div>
);
