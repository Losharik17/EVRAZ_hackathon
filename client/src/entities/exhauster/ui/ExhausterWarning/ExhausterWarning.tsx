import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Alert } from 'shared/ui';
import cls from './ExhausterWarning.module.scss';

interface ExhausterWarningProps {
    className?: string;
    title: string;
    params: ReactNode;
    isNested?: boolean;
}

export const ExhausterWarning: FC<ExhausterWarningProps> = ({
    className,
    title,
    params,
    isNested = true,
}) => {
    const a = 1;
    return (
        <div className={classNames(cls.ExhausterWarning, {}, [className])}>
            <Alert
                className={isNested ? cls.Nested : undefined}
                justify='spaceBetween'
            >
                <div>{title}</div>
                <div className={cls.Params}>{params}</div>
            </Alert>
        </div>
    );
};
