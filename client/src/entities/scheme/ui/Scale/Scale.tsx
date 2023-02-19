import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Scale.module.scss';

interface ScaleProps {
    className?: string;
    divisions: Array<string>;
}

export const Scale: FC<ScaleProps> = ({ className, divisions }) => (
    <div className={classNames(cls.Scale, {}, [className])}>
        {
            divisions.map((d) => (
                <div
                    className={cls.Division}
                    style={{ width: `${100 / divisions.length}%` }}
                >
                    <div>{d}</div>
                </div>
            ))
        }
    </div>
);
