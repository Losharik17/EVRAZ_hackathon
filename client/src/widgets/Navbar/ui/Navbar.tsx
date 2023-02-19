import { FC } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/'>Агломашины</Link>
        <Link to='/exhauster?id=1'>Эксгаустер</Link>
        <Link to='/trends?id=1'>Тренды</Link>
    </div>
);
