import { ExhausterProperty, ExhausterWarning } from 'entities/exhauster';
import { FC, ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { Arrow } from 'shared/ui/Icons';
import cls from './ExhausterInfo.module.scss';

type PropertyTitle = 'Все подшипники' | 'Предупреждения' | 'Последняя замена ротора'

interface ExhausterInfoProps {
    title: PropertyTitle;
    description: ReactNode;
}

export const ExhausterInfo: FC<ExhausterInfoProps> = ({ title, description }) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleOpen = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <ExhausterProperty
            before={(
                <Button onClick={toggleOpen}>
                    <Arrow style={{ transform: isOpened ? 'rotate(90deg)' : '' }} />
                </Button>
            )}
            title={title}
            description={isOpened ? description : null}
        />
    );
};
