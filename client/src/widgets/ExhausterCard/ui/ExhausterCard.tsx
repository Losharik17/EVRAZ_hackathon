import {
    ExhausterBody,
    ExhausterProperty,
    ExhausterRow,
    ExhausterWarning,
    RotorTitle,
} from 'entities/exhauster';
import { ExhausterForecast } from 'features/ExhausterForecast';
import { ExhausterInfo } from 'features/ExhausterInfo';
import { ExhausterState } from 'features/ExhausterState';
import { WarningIndicator } from 'features/WarningIndicator';
import { FC } from 'react';
import { Exhauster } from 'shared/assets';
import { Button, Card, Chip, Divider, Input } from 'shared/ui';
import { Arrow } from 'shared/ui/Icons';

interface ExhausterCardProps {
    className?: string;
}

export const ExhausterCard: FC<ExhausterCardProps> = ({ className }) => (
    <Card className={className}>
        <ExhausterRow
            before={<ExhausterState title='123' />}
            title='Эксгаустер'
            after={(
                <Button>
                    <Arrow />
                </Button>
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
                                <WarningIndicator variant='critical'>T</WarningIndicator>
                                <WarningIndicator variant='idle'>V</WarningIndicator>
                                <WarningIndicator variant='warning'>L</WarningIndicator>
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
                            params={<WarningIndicator variant='warning'>L</WarningIndicator>}
                        />
                        <ExhausterWarning
                            title='№8 п-к'
                            params={
                                <WarningIndicator variant='critical'>T</WarningIndicator>
                            }
                        />
                    </>
                )}
            />
            <Divider />
            <Input placeholder='Отправить сообщение в SAP' />
        </ExhausterBody>
    </Card>
);
