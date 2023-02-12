import { FC, useState } from 'react';
import { Checkbox } from 'shared/ui';

interface ExhausterStateProps {
    title: string;
    defaultState?: boolean;
}

export const ExhausterState: FC<ExhausterStateProps> = ({ title, defaultState = false }) => {
    const [isChecked, setIsChecked] = useState(defaultState);

    const toggleChecked = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <Checkbox
            theme={isChecked ? 'active' : 'inactive'}
            isChecked={isChecked}
            toggleChecked={toggleChecked}
            label={title}
        />
    );
};
