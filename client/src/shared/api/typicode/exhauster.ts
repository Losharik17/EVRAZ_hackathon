export type Status = 'ok' | 'warning' | 'critical'

export interface Property {
    value: {
        number: number;
        status: Status;
    },
    title: string;
}

export type BearingProperty = Property
export type OilProperty = Property
export type RotorProperty = Property
export type StatorProperty = Property

export interface Bearing {
    id: number;
    bearing_id: number;
    added_at: string;
    properties: BearingProperty[];
}

export interface Oil {
    level: OilProperty;
    pressure: OilProperty;
}

export interface Rotor {
    current: RotorProperty;
    voltage: RotorProperty;
}

export interface Stator {
    current: StatorProperty;
    voltage: StatorProperty;
    temperature: StatorProperty;
}

export interface Exhauster {
    id: number;
    name: string;
    aglomachine_id: number;
    bearings: Bearing[];
    oil: Oil;
    stator: Stator;
}
