import { FC } from 'react';
import { EvrazIcon } from 'shared/assets';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <EvrazIcon width={150} height={50} />
        <h1>Прогнозная аналитика эксгаустеров</h1>
    </div>
);
