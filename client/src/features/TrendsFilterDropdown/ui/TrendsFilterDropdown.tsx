import { TrendsContolsProperty } from 'entities/trends/ui/TrendsControls';
import { FC, ReactNode, useState } from 'react';
import { Arrow } from 'shared/assets';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './TrendsFilterDropdown.module.scss';

interface TrendsFilterDropdownProps {
    className?: string;
    title?: ReactNode;
    children?: ReactNode;
}

export const TrendsFilterDropdown: FC<TrendsFilterDropdownProps> = ({
    title,
    children,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <TrendsContolsProperty
            before={(
                <Button onClick={onToggle}>
                    <Arrow className={isOpen ? cls.Rotate : cls.RotateIdle} />
                </Button>
            )}
            title={title}
        >
            {isOpen && children}
        </TrendsContolsProperty>
    );
};
