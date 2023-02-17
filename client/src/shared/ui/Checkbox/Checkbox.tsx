import { FC, HTMLAttributes, useState } from 'react';
import { Mark } from 'shared/assets';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';

type CheckboxTheme = 'active' | 'inactive';

interface CheckboxProps extends HTMLAttributes<HTMLLabelElement> {
    className?: string;
    label?: string;
    isChecked?: boolean;
    theme?: CheckboxTheme;
    disabled?: boolean;
    toggleChecked?: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({
    className,
    label,
    isChecked,
    toggleChecked,
    disabled = false,
    theme = 'inactive',
    ...props
}) => (
    <>
        <input
            id={label}
            type='checkbox'
            disabled={disabled}
            checked={isChecked}
            onChange={toggleChecked}
            className={classNames(cls.Checkbox, {}, [className])}
        />
        <label
            htmlFor={label}
            className={classNames(cls.Label, {}, [isChecked ? cls.active : cls.inactive])}
            {...props}
        >
            <Mark />
        </label>
    </>
);
