import { ExhausterProperty } from 'entities/exhauster';
import { FC, ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { ExhausterLinkIcon } from 'shared/assets';
import cls from './ExhausterInfo.module.scss';

type PropertyTitle = 'Все подшипники' | 'Предупреждения' | 'Последняя замена ротора'

interface ExhausterInfoProps {
    className?: string;
    title: PropertyTitle;
    description: ReactNode;
}

export const ExhausterInfo: FC<ExhausterInfoProps> = ({ className, title, description }) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpen = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <ExhausterProperty
            before={(
                <Button className={cls.Button} onClick={toggleOpen}>
                    <ExhausterLinkIcon style={{ transform: isOpened ? 'rotate(90deg)' : '' }} />
                </Button>
            )}
            title={title}
            description={isOpened ? description : null}
            className={classNames(cls.ExhausterInfo, {}, [className])}
        />
    );
};
