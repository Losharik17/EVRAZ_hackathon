import { FC, HTMLAttributes } from 'react';
import { Scheme, SchemePointer, SchemeRangeContainer } from 'entities/scheme/ui';
import { SchemeProgressIndicator }
    from 'features/SchemeProgressIndicator/ui/SchemeProgressIndicator';
import {
    bearings,
    cooler,
    gas,
    gate,
    presure,
    reducer,
    temperature,
    temperature1,
    temperature2,
    temperature3,
} from 'shared/api/consts/style.exhauster';
import { Exhauster as IExhauster } from 'shared/api/models';
import { classNames } from 'shared/lib/classNames/classNames';
import { Gate } from 'entities/exhauster';
import { Scale } from 'entities/scheme/ui/Scale/Scale';
import cls from './Exhauster.module.scss';
import exhausterPng from './exhauster.png';

interface ExhausterProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    exhauster?: IExhauster;
}

export const Exhauster: FC<ExhausterProps> = ({
    className,
    children,
    exhauster,
    ...props
}) => (
    <div
        className={classNames(cls.Exhauster, {}, [className])}
        {...props}
    >
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
            className={cls.container}
        >
            <div>
                <img
                    src={exhausterPng}
                    style={{ top: 0, left: 0, width: '100%', height: '100%' }}
                    alt=''
                />
                <div
                    className={cls.rect}
                    style={bearings.nineth}
                >
                    <Scheme title={<>9СП</>}>
                        <div>T, °С 220</div>
                        <div>T, °С 220</div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.eigth}
                >
                    <Scheme title={<>8СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.seventh}
                >
                    <Scheme title={<>7СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.sixth}
                >
                    <Scheme title={<>6СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.fifth}
                >
                    <Scheme title={<>5СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.second}
                >
                    <Scheme title={<>2ПС</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.fifth}
                >
                    <Scheme variant='light' title={<>5СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={presure}
                >
                    <Scheme variant='light'>
                        <SchemeRangeContainer
                            range={<Scale divisions={['0', '1', '2', '3', '4', '5', '6']} />}
                            progress={(
                                <SchemeProgressIndicator
                                    type='Oil presure'
                                    value={2}
                                />
                            )}
                        />
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={temperature}
                >
                    <Scheme>
                        <span>-223C</span>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={cooler}
                />
                <div
                    className={cls.rect}
                    style={temperature1}
                >
                    <Scheme>
                        <span>-223C</span>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={temperature3}
                >
                    <Scheme>
                        <span>-223C</span>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={temperature2}
                >
                    <Scheme>
                        <span>-223C</span>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.third}
                />
                <div
                    className={cls.rect}
                    style={bearings.third}
                >
                    <Scheme title={<>3СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.fourth}
                >
                    <Scheme title={<>4СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={bearings.first}
                >
                    <Scheme title={<>1СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    className={cls.rect}
                    style={gas}
                >
                    <SchemeRangeContainer progress={(
                        <SchemeProgressIndicator
                            type='Gas temperature'
                            value={80}
                        />
                    )}
                    />
                </div>
                <div
                    className={cls.rect}
                    style={reducer}
                >
                    <div style={{ width: 'inherit', height: 'inherit' }} />
                </div>
                {/* Заслонка */}
                <div
                    className={cls.rect}
                    style={gate}
                >
                    <Gate size={20 / 1449 * 100} state={10} />

                </div>
                <div
                    id='SCHEME-DIV20'
                    className={cls.rect}
                    style={{
                        left: `${225 / 1449 * 100}%`,
                        top: `${468.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >
                    <SchemePointer label='1' variant='critical' />
                </div>
                <div
                    id='SCHEME-DIV21'
                    className={cls.rect}
                    style={{
                        left: `${225 / 1449 * 100}%`,
                        top: `${496.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >
                    <SchemePointer label='1' variant='critical' />
                </div>
                <div
                    id='SCHEME-DIV22'
                    className={cls.rect}
                    style={{
                        left: `${416 / 1449 * 100}%`,
                        top: `${498.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >
                    <SchemePointer label='1' variant='warning' />
                </div>
                <div
                    id='SCHEME-DIV23'
                    className={cls.rect}
                    style={{
                        left: `${689 / 1449 * 100}%`,
                        top: `${405.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >
                    <SchemePointer label='1' variant='idle' />
                </div>
                <div
                    id='SCHEME-DIV24'
                    className={cls.rect}
                    style={{
                        left: `${689 / 1449 * 100}%`,
                        top: `${487.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >
                    <SchemePointer label='1' variant='warning' />
                </div>
                <div
                    id='SCHEME-DIV25'
                    className={cls.rect}
                    style={{
                        left: `${608 / 1449 * 100}%`,
                        top: `${487.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >
                    <SchemePointer label='1' variant='warning' />
                </div>
                <div
                    id='SCHEME-DIV26'
                    className={cls.rect}
                    style={{
                        left: `${608 / 1449 * 100}%`,
                        top: `${405.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >
                    <SchemePointer label='1' variant='idle' />
                </div>
                <div
                    id='SCHEME-DIV27'
                    className={cls.rect}
                    style={{
                        left: `${881 / 1449 * 100}%`,
                        top: `${384.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >
                    <SchemePointer label='1' variant='critical' />
                </div>
                <div
                    id='SCHEME-DIV28'
                    className={cls.rect}
                    style={{
                        left: `${1211 / 1449 * 100}%`,
                        top: `${382.625 / 855 * 100}%`,
                        width: `${21 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                    }}
                >

                    <SchemePointer label='1' variant='critical' />
                </div>

                <div
                    id='SCHEME-DIV6'
                    className={cls.rect}
                    style={{
                        left: `${942 / 1449 * 100}%`,
                        top: `${337 / 855 * 100}%`,
                        width: `${230 / 1449 * 100}%`,
                        height: `${148 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >

                    sdfsfd
                </div>

                <div
                    id='SCHEME-DIV13'
                    className={cls.rect}
                    style={{
                        left: `${696 / 1449 * 100}%`,
                        top: `${100 / 855 * 100}%`,
                        width: `${230 / 1449 * 100}%`,
                        height: `${163 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme variant='light' title={<>Маслобак</>}>
                        <SchemeRangeContainer
                            range={<Scale divisions={['0', '20', '40', '60', '80', '100']} />}
                            progress={(
                                <SchemeProgressIndicator
                                    type='Oil level'
                                    value={34}
                                />
                            )}
                        />
                    </Scheme>
                </div>

            </div>
        </div>
    </div>
);
