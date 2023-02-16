import {
    TrendsContorlsProperty,
    TrendsControlsLabel,
    TrendsControlsWrapper,
} from 'entities/trends/ui/TrendsControls';
import { FC } from 'react';
import { Arrow } from 'shared/assets';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
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
                    after={<div>Значение</div>}
                />
            )}
            body={(
                <>
                    <TrendsContorlsProperty
                        before={(
                            <Button className={cls.CustomButton}>
                                <Arrow />
                            </Button>
                        )}
                        title={<div>Главный привод</div>}
                    />
                    <TrendsContorlsProperty
                        before={(
                            <Button className={cls.CustomButton}>
                                <Arrow />
                            </Button>
                        )}
                        title={<div>Главный привод</div>}
                    />
                    <TrendsContorlsProperty
                        before={(
                            <Button className={cls.CustomButton}>
                                <Arrow />
                            </Button>
                        )}
                        title={<div>Главный привод</div>}
                    />
                    <TrendsContorlsProperty
                        before={(
                            <Button className={cls.CustomButton}>
                                <Arrow />
                            </Button>
                        )}
                        title={<div>Главный привод</div>}
                    />
                    <TrendsContorlsProperty
                        before={(
                            <Button className={cls.CustomButton}>
                                <Arrow />
                            </Button>
                        )}
                        title={<div>Главный привод</div>}
                    />
                    <TrendsContorlsProperty
                        title={<div>Охладитель</div>}
                    />
                </>
            )}
        />
    </div>
);
