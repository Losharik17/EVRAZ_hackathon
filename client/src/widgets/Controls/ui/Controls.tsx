import { TrendsControlsLabel, TrendsControlsWrapper } from 'entities/trends/ui/TrendsControls';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { Arrow } from 'shared/ui/Icons';
import cls from './Controls.module.scss';

interface ControlsProps {
    className?: string;
}

export const Controls: FC<ControlsProps> = ({ className }) => (
    <div className={classNames(cls.Controls, {}, [className])}>
        <TrendsControlsWrapper
            label={(
                <TrendsControlsLabel
                    before={(
                        <Button>
                            <Arrow />
                        </Button>
                    )}
                    body={<div>Агрегат</div>}
                    after={<>Значение</>}
                />
            )}
        />
    </div>
);
