import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Checkbox } from 'shared/ui';
import cls from './TrendsFilterToggle.module.scss';

interface TrendsFilterToggleProps {
    className?: string;
    name?: string;
}

export const TrendsFilterToggle: FC<TrendsFilterToggleProps> = ({
    name,
    className,
}) => {
    const [isChecked, setIsChecked] = useState(false);

    const onToggle = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <Checkbox
            label={name}
            onClick={onToggle}
            isChecked={isChecked}
        />
    );
};
