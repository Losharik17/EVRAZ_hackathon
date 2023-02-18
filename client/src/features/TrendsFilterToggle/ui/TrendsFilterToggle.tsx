import { useTrendsActions, useTrendsSelector } from 'entities/trends/model';
import { FC, useEffect, useState } from 'react';
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
    const { addFilter, removeFilter, filter } = useTrendsActions();
    const filters = useTrendsSelector((state) => state.filter.filters);
    const currentFilter = filters.filter((filterName) => filterName === name)[0];
    const isCurrent = currentFilter !== undefined;
    const [isChecked, setIsChecked] = useState<boolean>(isCurrent);

    const onToggle = () => {
        if (isChecked) {
            removeFilter(name);
            filter(filters);
        } else {
            addFilter(name);
            filter(filters);
        }
        setIsChecked((prev) => !prev);
    };

    return (
        <Checkbox
            label={name}
            toggleChecked={onToggle}
            isChecked={isChecked}
            className={className}
        />
    );
};
