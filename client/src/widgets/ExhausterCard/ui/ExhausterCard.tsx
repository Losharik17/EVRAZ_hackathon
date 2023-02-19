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
import { ExhausterMain } from 'shared/api/models';

interface ExhausterCardProps {
    className?: string;
    exhauster?: ExhausterMain;
}

export const ExhausterCard: FC<ExhausterCardProps> = ({
    className,
    exhauster,
}) => (
    <Card className={className}>
        <ExhausterRow
            before={<ExhausterState state={false} />}
            title={`Эксгаустер ${exhauster.name}`}
            after={(
                <ExhausterLink to={`${RoutePath.Эксгаустер}?id=${exhauster.id}`} />
            )}
        />
        <ExhausterBody>
            <RotorTitle
                rotorTitle={`Ротор №${exhauster.rotor.number}`}
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
                        {(exhauster.bearings.map(({
                            id,
                            number,
                            current: { parameters },
                        }) => (exhauster.warnings.find((warn) => warn.number === number)
                            ? (
                                <>
                                    <ExhausterWarning
                                        key={id}
                                        title={`№${number} п-к`}
                                        params={parameters.map(({ value, title }) => (
                                            <WarningIndicator
                                                key={title}
                                                title={title}
                                                variant={value.status}
                                                Icon={title === 'T' ? ThermometerIcon : RadioIcon}
                                            />
                                        ))}
                                    />
                                </>
                            ) : <></>
                        )))}
                        {exhauster.datas.oil.oil_level.value.status !== 'idle' && (
                            <ExhausterWarning
                                title={exhauster.datas.oil.oil_level.title}
                                params={(
                                    <WarningIndicator
                                        variant={exhauster.datas.oil.oil_level.value.status}
                                        title={exhauster.datas.oil.oil_level.title}
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
                        {(exhauster.bearings.map(({
                            id,
                            number,
                            current: { parameters },
                        }) => (exhauster.warnings.find((warn) => warn.number !== number)
                            ? (
                                <>
                                    <ExhausterWarning
                                        key={id}
                                        title={`№${number} п-к`}
                                        params={parameters.map(({ value, title }) => (
                                            <WarningIndicator
                                                key={title}
                                                title={title}
                                                variant={value.status}
                                                Icon={title === 'T' ? ThermometerIcon
                                                    : RadioIcon}
                                            />
                                        ))}
                                    />
                                </>
                            ) : <></>
                        )))}
                        {exhauster.datas.oil.oil_level.value.status === 'idle' && (
                            <ExhausterWarning
                                title={exhauster.datas.oil.oil_level.title}
                                params={(
                                    <WarningIndicator
                                        variant={exhauster.datas.oil.oil_level.value.status}
                                        title={exhauster.datas.oil.oil_level.title}
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
