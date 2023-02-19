import { Card } from '../../ui/Card/Card';

export type Status = 'idle' | 'warning' | 'critical'

export interface Property {
    value: {
        number: number;
        status?: Status;
    },
    title: string;
}

export interface BooleanProperty {
    value: {
        number: boolean;
        status?: Status;
    },
    title: string;
}

export interface BearingParameters {
    parameters: Property[];
    id: number;
    added_at: string;
}

export interface Bearing {
    id: number;
    number: number;
    datas?: BearingParameters[];
    current: BearingParameters;
}

export interface Warning {
    number: number;
}

export interface Oil {
    oil_level: Property;
    oil_pressure: Property;
}

export interface OilPump {
    starting_oil_pump_started: Property;
    emergency_oil_pump_started: Property;
}

export interface Cooler {
    water_temperature_before: Property;
    water_temperature_after: Property;
    oil_temperature_before: Property;
    oil_temperature_after: Property;
}

export interface MainDrive {
    rotor_current: Property;
    rotor_voltage: Property;
    stator_current: Property;
    stator_voltage: Property;
    stator_temperature: Property;
}

export interface Manifold {
    collector_temperature_before: Property;
    collector_underpressure_before: Property;
}

export interface Operations {
    work: BooleanProperty;
    motor_air_temperature_1?: Property;
    motor_air_temperature_2?: Property;
    motor_air_temperature_3?: Property;
    temperature_front_eksgauster: Property;
    vacuum_front_eksgauster: Property;
}

export interface SensorsData {
    id: number;
    oil: Oil;
    oil_pump: OilPump;
    cooler: Cooler,
    gas_manifold: Manifold;
    eksgauster_operation: Operations;
    added_at: string;
    main_drive: MainDrive;
    gas_valve_position: Property;
}

export interface Rotor {
    id: number;
    number: string;
    start_date: string;
    eksgauster_id: number;
}

export interface CurrentBearing {
    added_at: string;
    parameters: Property[];
}

export interface BearingMain {
    id: number;
    number: number;
    eksgauster_id: number;
    current: CurrentBearing;
}

export interface ExhausterMain {
    id?: number;
    name?: string;
    bearings?: BearingMain[];
    warnings?: Array<number>;
    datas?: {
        oil?: Oil;
    }
    rotor?: Rotor;
    work?: BooleanProperty;
}

export interface BearingsKeys {
    1: BearingMain;
    2: BearingMain;
    3: BearingMain;
    4: BearingMain;
    5: BearingMain;
    6: BearingMain;
    7: BearingMain;
    8: BearingMain;
    9: BearingMain;
}

export interface Warnings {
    1: Status;
    2: Status;
    3: Status;
    4: Status;
    5: Status;
    6: Status;
    7: Status;
    8: Status;
    9: Status;
}

export interface Exhauster {
    id: number;
    name: string;
    bearings: BearingsKeys;
    datas: SensorsData;
    warnings: Warnings;
}

export interface Aglomachine {
    id: number;
    number: number;
    eksgausters: ExhausterMain[];
}

export interface CustomParameters {
    temperature: string,
    vibration_vertical: string,
    vibration_horizontal: string;
    vibration_axial: string;
}

export interface CustomOil extends Oil{
    title: string;
}

export interface CustomOilpump extends OilPump {
    title: string;
}

export interface CustomMainDrive extends MainDrive {
    title: string;
}

export interface CustomCooler extends Cooler {
    title: string;
}

export interface CustomOperations extends Operations {
    title: string;
}

export interface CustomManifold extends Manifold {
    title: string;
}

export interface BearingItem {
    title: string;
    parameters: CustomParameters;
}

export interface Bearings {
    title: string;
    items: BearingItem[]
}

export interface ExhausterChart {
    bearings: Bearings;
    oil: CustomOil;
    oil_pump: CustomOilpump;
    main_drive: CustomMainDrive;
    cooler: CustomCooler;
    gas_manifold: CustomManifold;
    eksgauster_operation: CustomOperations;
}
