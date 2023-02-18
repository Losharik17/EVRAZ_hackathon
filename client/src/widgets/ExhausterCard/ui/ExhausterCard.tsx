import { FC } from 'react';
import {
    ExhausterBody,
    ExhausterProperty,
    ExhausterRow,
    ExhausterWarning,
    RotorTitle,
} from 'entities/exhauster';
import { ExhausterForecast } from 'features/ExhausterForecast';
import { ExhausterInfo } from 'features/ExhausterInfo';
import { ExhausterLink } from 'features/ExhausterLink';
import { ExhausterState } from 'features/ExhausterState';
import { WarningIndicator } from 'features/WarningIndicator';

import { RoutePath } from 'shared/config';
import {
    Card,
    Divider,
    Input,
} from 'shared/ui';
import { Exhauster, RadioIcon, ThermometerIcon, WaterIcon } from 'shared/assets';

interface ExhausterCardProps {
    className?: string;
}

const status = 'critical';

export const ExhausterCard: FC<ExhausterCardProps> = ({ className }) => (
    <Card className={className}>
        <ExhausterRow
            before={<ExhausterState title='123' />}
            title='Эксгаустер'
            after={(
                <ExhausterLink to={RoutePath.Эксгаустер} />
            )}
        />
        <ExhausterBody>
            <RotorTitle
                rotorTitle='Ротор № 37'
                rotorDate='25.02.2023'
                after={<>Изменить</>}
            />
            <Divider />
            <ExhausterProperty
                title='Последняя замена ротора'
                description={(
                    <ExhausterForecast
                        currentDay={<>6 cут</>}
                        forecastDay={<>12 Cут</>}
                    />
                )}
            />
            <Divider />
            <img src={Exhauster} alt='example' width='100%' />
            <Divider />
            <ExhausterInfo
                title='Предупреждения'
                description={(
                    <ExhausterWarning
                        title='№5 п-к'
                        params={(
                            <>
                                <WarningIndicator
                                    variant='critical'
                                    title='T'
                                    Icon={ThermometerIcon}
                                />
                                <WarningIndicator
                                    variant='idle'
                                    title='V'
                                    Icon={RadioIcon}
                                />
                                <WarningIndicator
                                    variant='warning'
                                    title='L'
                                    Icon={WaterIcon}
                                />
                            </>
                        )}
                    />
                )}
            />
            <Divider />
            <ExhausterInfo
                title='Все подшипники'
                description={(
                    <>
                        <ExhausterWarning
                            title='№7 п-к'
                            params={(
                                <WarningIndicator
                                    variant='warning'
                                    title='L'
                                    Icon={WaterIcon}
                                />
                            )}
                        />
                        <ExhausterWarning
                            title='№8 п-к'
                            params={(
                                <WarningIndicator
                                    variant='critical'
                                    title='T'
                                    Icon={ThermometerIcon}
                                />
                            )}
                        />
                    </>
                )}
            />
            <Divider />
            <Input placeholder='Отправить сообщение в SAP' />
        </ExhausterBody>
    </Card>
);
