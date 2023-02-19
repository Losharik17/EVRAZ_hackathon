import { ExhausterLamp } from 'entities/exhauster';
import { FC, useState } from 'react';

interface ExhausterStateProps {
    title?: string;
    state?: boolean;
}

export const ExhausterState: FC<ExhausterStateProps> = ({ title, state = false }) => (
    <ExhausterLamp variant={state ? 'active' : 'inactive'} />
);
