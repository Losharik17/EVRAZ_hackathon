import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ExhausterLinkIcon } from 'shared/assets';
import { Button } from 'shared/ui';
import { Link, LinkProps } from 'react-router-dom';
import cls from './ExhausterLink.module.scss';

interface ExhausterLinkProps extends LinkProps {
    className?: string;
    to: string;
}

export const ExhausterLink: FC<ExhausterLinkProps> = ({ className, to, ...props }) => (
    <Link to={to} {...props}>
        <Button className={classNames(cls.ExhausterLink, {}, [className])}>
            <ExhausterLinkIcon />
        </Button>
    </Link>

);
