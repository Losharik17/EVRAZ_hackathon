export type Status = 'idle' | 'warning' | 'critical'

export interface Property {
    value: {
        number: number;
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
    datas: BearingParameters[];
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
    work: Property;
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
}

export interface Exhauster {
    id: number;
    name: string;
    bearings: Bearing[];
    datas: SensorsData[];
    rotor: Rotor;
}
