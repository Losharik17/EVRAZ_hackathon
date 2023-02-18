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
import { Exhauster as IExhauster } from 'shared/api/models';

interface ExhausterCardProps {
    className?: string;
    exhauster: IExhauster;
}

export const ExhausterCard: FC<ExhausterCardProps> = ({
    className,
    exhauster: {
        id,
        name,
        rotor,
        bearings,
        datas,
        current: {
            eksgauster_operation: { work },
            oil: { oil_level },
        },
    },
}) => (
    <Card className={className}>
        <ExhausterRow
            before={<ExhausterState state={work.value.number} />}
            title={`Эксгаустер ${name}`}
            after={(
                <ExhausterLink to={`${RoutePath.Эксгаустер}/${id}`} />
            )}
        />
        <ExhausterBody>
            <RotorTitle
                rotorTitle={`Ротор №${rotor.number}`}
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
                    <>
                        {(bearings.map(({
                            id,
                            number,
                            current: { parameters },
                        }) => (
                            <ExhausterWarning
                                key={id}
                                title={`№${number} п-к`}
                                params={parameters.map(({ value, title }) => (
                                    value.status !== 'idle'
                                        ? (
                                            <WarningIndicator
                                                key={title}
                                                title={title}
                                                variant={value.status}
                                                Icon={title === 'T' ? ThermometerIcon : RadioIcon}
                                            />
                                        ) : null
                                ))}
                            />
                        )))}
                        {oil_level.value.status !== 'idle' && (
                            <ExhausterWarning
                                title={oil_level.title}
                                params={(
                                    <WarningIndicator
                                        variant={oil_level.value.status}
                                        title={oil_level.title}
                                        Icon={WaterIcon}
                                    />
                                )}
                            />
                        )}
                    </>
                )}
            />
            <Divider />
            <ExhausterInfo
                title='Все подшипники'
                description={(
                    <>
                        {(bearings.map(({
                            id,
                            number,
                            current: { parameters },
                        }) => (
                            <ExhausterWarning
                                key={id}
                                title={`№${number} п-к`}
                                params={parameters.map(({ value, title }) => (
                                    value.status === 'idle'
                                        ? (
                                            <WarningIndicator
                                                key={title}
                                                title={title}
                                                variant={value.status}
                                                Icon={title === 'T' ? ThermometerIcon : RadioIcon}
                                            />
                                        ) : null
                                ))}
                            />
                        )))}
                        {oil_level.value.status === 'idle' && (
                            <ExhausterWarning
                                title={oil_level.title}
                                params={(
                                    <WarningIndicator
                                        variant={oil_level.value.status}
                                        title={oil_level.title}
                                        Icon={WaterIcon}
                                    />
                                )}
                            />
                        )}
                    </>
                )}
            />
            <Divider />
            <Input placeholder='Отправить сообщение в SAP' />
        </ExhausterBody>
    </Card>
);
