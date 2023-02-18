import { FC } from 'react';
import {
    TrendsContolsProperty,
    TrendsControlsLabel,
    TrendsControlsWrapper,
} from 'entities/trends/ui/TrendsControls';
import { TrendsFilterDropdown } from 'features/TrendsFilterDropdown';
import { TrendsFilterToggle } from 'features/TrendsFilterToggle/ui/TrendsFilterToggle';
import { ArrowIcon } from 'shared/assets';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import cls from './Controls.module.scss';

interface ControlsProps {
    className?: string;
}

interface UnitCell {
    name: string;
    value: string;
}

interface UnitElements {
    cellName: string;
    cells: Array<UnitCell>;
}

type ValueState = 'idle' | 'warning' | 'critical'

interface CellValue {
    number: number;
    state: ValueState;
}

const bearings: UnitElements[] = [
    {
        cellName: '1ПС',
        cells: [
            {
                name: 'T, °С',
                value: '0000',
            },
            {
                name: 'Верт, мм/с',
                value: '0000',
            },
            {
                name: 'Гориз, мм/с',
                value: '0000',
            },
            {
                name: 'Ось, мм/с',
                value: '0000',
            },
        ],
    },
    {
        cellName: '3ПС',
        cells: [
            {
                name: 'T, °С',
                value: '0000',
            },
            {
                name: 'Верт, мм/с',
                value: '0000',
            },
        ],
    },
];

export const Controls: FC<ControlsProps> = ({ className }) => (
    <div className={classNames(cls.Controls, {}, [className])}>
        <TrendsControlsWrapper
            label={(
                <TrendsControlsLabel
                    before={(
                        <Button>
                            <ArrowIcon />
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
                        {bearings.map(({ cellName, cells }) => (
                            <TrendsFilterDropdown
                                key={cellName}
                                title={cellName}
                            >
                                {cells.map(({ name, value }) => (
                                    <TrendsContolsProperty
                                        key={name}
                                        title={(
                                            <>
                                                <TrendsFilterToggle name={`${cellName}${name}`} />
                                                {name}
                                            </>
                                        )}
                                        value={value}
                                    />
                                ))}
                            </TrendsFilterDropdown>
                        ))}
                    </TrendsFilterDropdown>
                    <TrendsFilterDropdown
                        title={<>Подшипник</>}
                    >
                        {bearings.map(({ cellName, cells }) => (
                            <TrendsFilterDropdown
                                key={cellName}
                                title={cellName}
                            >
                                {cells.map(({ name, value }) => (
                                    <TrendsContolsProperty
                                        key={name}
                                        title={(
                                            <>
                                                <TrendsFilterToggle name={`${cellName}${name}`} />
                                                {name}
                                            </>
                                        )}
                                        value={value}
                                    />
                                ))}
                            </TrendsFilterDropdown>
                        ))}
                    </TrendsFilterDropdown>
                    <TrendsFilterDropdown
                        title={<>Подшипник</>}
                    >
                        {bearings.map(({ cellName, cells }) => (
                            <TrendsFilterDropdown
                                key={cellName}
                                title={cellName}
                            >
                                {cells.map(({ name, value }) => (
                                    <TrendsContolsProperty
                                        key={name}
                                        title={(
                                            <>
                                                <TrendsFilterToggle name={`${cellName}${name}`} />
                                                {name}
                                            </>
                                        )}
                                        value={value}
                                    />
                                ))}
                            </TrendsFilterDropdown>
                        ))}
                    </TrendsFilterDropdown>
                </>
            )}
        />
    </div>
);
