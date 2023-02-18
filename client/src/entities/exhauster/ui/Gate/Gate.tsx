import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Gate.module.scss';

interface GateProps {
    className?: string;
    state: number;
    size: number;
}

export const Gate: FC<GateProps> = ({ className, state, size }) => (
    <div
        className={classNames(cls.Gate, {}, [className])}
        style={{ transform: `translate(${state}%)` }}

    >
        <div style={{ width: `${size}vw` }} className={cls.GateSecond}>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: 'calc(100% + 5px)' }}>
                    {`${state}%`}
                </div>
            </div>
        </div>
    </div>

);
