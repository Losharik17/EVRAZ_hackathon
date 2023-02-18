import { Gate, Scheme, SchemePointer, SchemeRangeContainer } from 'entities/scheme/ui';
import { SchemeProgressIndicator }
    from 'features/SchemeProgressIndicator/ui/SchemeProgressIndicator';
import { FC, HTMLAttributes, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Exhauster.module.scss';
import exhausterPng from './exhauster.png';

interface ExhausterProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Exhauster: FC<ExhausterProps> = ({
    className,
    children,
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
                    id='SCHEME-DIV0'
                    className={cls.rect}
                    style={{
                        left: `${60 / 1449 * 100}%`,
                        top: `${445 / 855 * 100}%`,
                        width: `${120 / 1449 * 100}%`,
                        height: `${67 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme title={<>9СП</>}>
                        <div>T, °С 220</div>
                        <div>T, °С 220</div>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV1'
                    className={cls.rect}
                    style={{
                        left: `${66 / 1449 * 100}%`,
                        top: `${539 / 855 * 100}%`,
                        width: `${119 / 1449 * 100}%`,
                        height: `${136 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
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
                    id='SCHEME-DIV1'
                    className={cls.rect}
                    style={{
                        left: `${515 / 1449 * 100}%`,
                        top: `${630 / 855 * 100}%`,
                        width: `${120 / 1449 * 100}%`,
                        height: `${136 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
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
                    id='SCHEME-DIV3'
                    className={cls.rect}
                    style={{
                        left: `${515 / 1449 * 100}%`,
                        top: `${552 / 855 * 100}%`,
                        width: `${120 / 1449 * 100}%`,
                        height: `${67 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme title={<>6СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV4'
                    className={cls.rect}
                    style={{
                        left: `${679 / 1449 * 100}%`,
                        top: `${552 / 855 * 100}%`,
                        width: `${120 / 1449 * 100}%`,
                        height: `${68 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme title={<>5СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV5'
                    className={cls.rect}
                    style={{
                        left: `${830 / 1449 * 100}%`,
                        top: `${552 / 855 * 100}%`,
                        width: `${120 / 1449 * 100}%`,
                        height: `${136 / 855 * 100}%`,
                    }}
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
                    <Scheme variant='light' title={<>5СП</>}>
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
                    id='SCHEME-DIV7'
                    className={cls.rect}
                    style={{
                        left: `${1175 / 1449 * 100}%`,
                        top: `${259 / 855 * 100}%`,
                        width: `${229 / 1449 * 100}%`,
                        height: `${59 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <SchemeRangeContainer progress={(
                        <SchemeProgressIndicator
                            type='Oil presure'
                            value={2}
                        />
                    )}
                    />
                </div>
                <div
                    id='SCHEME-DIV8'
                    className={cls.rect}
                    style={{
                        left: `${1072 / 1449 * 100}%`,
                        top: `${240 / 855 * 100}%`,
                        width: `${60 / 1449 * 100}%`,
                        height: `${29 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme>
                        <span>-223C</span>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV9'
                    className={cls.rect}
                    style={{
                        left: `${1035 / 1449 * 100}%`,
                        top: `${144 / 855 * 100}%`,
                        width: `${130 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <div className={cls.Span}>Охладитель</div>
                </div>
                <div
                    id='SCHEME-DIV10'
                    className={cls.rect}
                    style={{
                        left: `${1029 / 1449 * 100}%`,
                        top: `${74 / 855 * 100}%`,
                        width: `${60 / 1449 * 100}%`,
                        height: `${29 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme>
                        <span>-223C</span>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV11'
                    className={cls.rect}
                    style={{
                        left: `${1113 / 1449 * 100}%`,
                        top: `${75 / 855 * 100}%`,
                        width: `${60 / 1449 * 100}%`,
                        height: `${29 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme>
                        <span>-223C</span>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV12'
                    className={cls.rect}
                    style={{
                        left: `${947 / 1449 * 100}%`,
                        top: `${165 / 855 * 100}%`,
                        width: `${60 / 1449 * 100}%`,
                        height: `${29 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme>
                        <span>-223C</span>
                    </Scheme>
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
                    <Scheme variant='light' title={<>5СП</>}>
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
                    id='SCHEME-DIV14'
                    className={cls.rect}
                    style={{
                        left: `${677 / 1449 * 100}%`,
                        top: `${275 / 855 * 100}%`,
                        width: `${120 / 1449 * 100}%`,
                        height: `${67 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme title={<>3СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV15'
                    className={cls.rect}
                    style={{
                        left: `${514 / 1449 * 100}%`,
                        top: `${275 / 855 * 100}%`,
                        width: `${120 / 1449 * 100}%`,
                        height: `${67 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme title={<>4СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV16'
                    className={cls.rect}
                    style={{
                        left: `${1160 / 1449 * 100}%`,
                        top: `${553 / 855 * 100}%`,
                        width: `${120 / 1449 * 100}%`,
                        height: `${136 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Scheme title={<>1СП</>}>
                        <div>
                            <span>T, °С</span>
                            <span>220</span>
                        </div>
                    </Scheme>
                </div>
                <div
                    id='SCHEME-DIV17'
                    className={cls.rect}
                    style={{
                        left: `${252 / 1449 * 100}%`,
                        top: `${231 / 855 * 100}%`,
                        width: `${157 / 1449 * 100}%`,
                        height: `${70 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
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
                    id='SCHEME-DIV18'
                    className={cls.rect}
                    style={{
                        left: `${607 / 1449 * 100}%`,
                        top: `${445 / 855 * 100}%`,
                        width: `${103 / 1449 * 100}%`,
                        height: `${22 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <div className={cls.Span}>Редуктор</div>
                </div>
                <div
                    id='SCHEME-DIV19'
                    className={cls.rect}
                    style={{
                        left: `${290 / 1449 * 100}%`,
                        top: `${722 / 855 * 100}%`,
                        width: `${80 / 1449 * 100}%`,
                        height: `${10 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <Gate size={20 / 1449 * 100} state={82} />
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
            </div>
        </div>
    </div>
);
