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
import { TrendsBar } from 'widgets/TrendsBar';
import { ExhausterChart } from 'shared/api/models';
import cls from './Controls.module.scss';

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

interface ControlsProps {
    className?: string;
    controls?: ExhausterChart;
}

export const Controls: FC<ControlsProps> = ({ className, controls }) => (
    <div className={classNames(cls.Controls, {}, [className])}>
        <TrendsBar />
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
                    <TrendsFilterDropdown title={controls.bearings.title}>
                        {controls.bearings.items.map(({ title, parameters }) => (
                            <TrendsFilterDropdown
                                key={title}
                                title={title}
                            >
                                {parameters.temperature && (
                                    <TrendsContolsProperty title={(
                                        <>
                                            <TrendsFilterToggle
                                                name={`${parameters.temperature}${title}`}
                                            />
                                            {parameters.temperature}
                                        </>
                                    )}
                                    />
                                )}
                                {parameters.vibration_axial && (
                                    <TrendsContolsProperty title={(
                                        <>
                                            <TrendsFilterToggle
                                                name={`${parameters.vibration_axial}${title}`}
                                            />
                                            {parameters.vibration_axial}
                                        </>
                                    )}
                                    />
                                )}
                                {parameters.vibration_horizontal && (
                                    <TrendsContolsProperty title={(
                                        <>
                                            <TrendsFilterToggle
                                                name={`${parameters.vibration_horizontal}${title}`}
                                            />
                                            {parameters.vibration_horizontal}
                                        </>
                                    )}
                                    />
                                )}
                                {parameters.vibration_vertical && (
                                    <TrendsContolsProperty title={(
                                        <>
                                            <TrendsFilterToggle
                                                name={`${parameters.vibration_vertical}${title}`}
                                            />
                                            {parameters.vibration_vertical}
                                        </>
                                    )}
                                    />
                                )}
                            </TrendsFilterDropdown>
                        ))}
                    </TrendsFilterDropdown>
                    <TrendsFilterDropdown title={controls.oil.title}>
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.oil.oil_level}`}
                                />
                                {controls.oil.oil_level}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.oil.oil_pressure}`}
                                />
                                {controls.oil.oil_pressure}
                            </>
                        )}
                        />
                    </TrendsFilterDropdown>
                    <TrendsFilterDropdown title={controls.gas_manifold.title}>
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.gas_manifold.collector_temperature_before}`}
                                />
                                {controls.gas_manifold.collector_temperature_before}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.gas_manifold.collector_underpressure_before}`}
                                />
                                {controls.gas_manifold.collector_underpressure_before}
                            </>
                        )}
                        />
                    </TrendsFilterDropdown>
                    <TrendsFilterDropdown title={controls.main_drive.title}>
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.main_drive.rotor_current}`}
                                />
                                {controls.main_drive.rotor_current}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.main_drive.rotor_voltage}`}
                                />
                                {controls.main_drive.rotor_voltage}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.main_drive.stator_current}`}
                                />
                                {controls.main_drive.stator_current}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.main_drive.stator_temperature}`}
                                />
                                {controls.main_drive.stator_temperature}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.main_drive.stator_voltage}`}
                                />
                                {controls.main_drive.stator_voltage}
                            </>
                        )}
                        />
                    </TrendsFilterDropdown>
                    <TrendsFilterDropdown title={controls.cooler.title}>
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.cooler.oil_temperature_after}`}
                                />
                                {controls.cooler.oil_temperature_after}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.cooler.oil_temperature_before}`}
                                />
                                {controls.cooler.oil_temperature_before}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.cooler.water_temperature_after}`}
                                />
                                {controls.cooler.water_temperature_after}
                            </>
                        )}
                        />
                        <TrendsContolsProperty title={(
                            <>
                                <TrendsFilterToggle
                                    name={`${controls.cooler.water_temperature_before}`}
                                />
                                {controls.cooler.water_temperature_before}
                            </>
                        )}
                        />
                    </TrendsFilterDropdown>
                </>
            )}
        />
    </div>
);
