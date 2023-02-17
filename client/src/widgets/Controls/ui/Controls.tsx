import {
    TrendsContolsProperty,
    TrendsControlsLabel,
    TrendsControlsWrapper,
} from 'entities/trends/ui/TrendsControls';
import { TrendsFilterDropdown } from 'features/TrendsFilterDropdown';
import { TrendsFilterToggle } from 'features/TrendsFilterToggle/ui/TrendsFilterToggle';
import { WarningIndicator } from 'features/WarningIndicator';
import { FC } from 'react';
import { Arrow } from 'shared/assets';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Checkbox } from 'shared/ui';
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
                    <TrendsFilterDropdown
                        title={<>Подшипник</>}
                    >
                        <TrendsFilterDropdown
                            title={<>Подшипник</>}
                        >
                            <TrendsContolsProperty
                                title={(
                                    <>
                                        <TrendsFilterToggle />
                                        <div>СП5</div>
                                    </>
                                )}
                                value={(
                                    <WarningIndicator>
                                        0000
                                    </WarningIndicator>
                                )}
                            />
                            <TrendsContolsProperty
                                title={(
                                    <>
                                        <TrendsFilterToggle />
                                        <div>СП5</div>
                                    </>
                                )}
                                value={(
                                    <WarningIndicator>
                                        0000
                                    </WarningIndicator>
                                )}
                            />
                            <TrendsContolsProperty
                                title={(
                                    <>
                                        <TrendsFilterToggle />
                                        <div>СП5</div>
                                    </>
                                )}
                                value={(
                                    <WarningIndicator>
                                        0000
                                    </WarningIndicator>
                                )}
                            />
                        </TrendsFilterDropdown>
                    </TrendsFilterDropdown>
                </>
            )}
        />
    </div>
);
