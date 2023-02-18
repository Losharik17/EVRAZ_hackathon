import { Scheme, SchemeRangeContainer } from 'entities/scheme/ui';
import { FC, HTMLAttributes } from 'react';
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
        {children}
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
                    <SchemeRangeContainer />
                </div>
                <div
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
                    className={cls.rect}
                    style={{
                        left: `${1035 / 1449 * 100}%`,
                        top: `${144 / 855 * 100}%`,
                        width: `${130 / 1449 * 100}%`,
                        height: `${21 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                />
                <div
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
                    className={cls.rect}
                    style={{
                        left: `${252 / 1449 * 100}%`,
                        top: `${231 / 855 * 100}%`,
                        width: `${157 / 1449 * 100}%`,
                        height: `${91 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >
                    <SchemeRangeContainer />
                </div>
                <div
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
                    <div style={{ width: 'inherit', height: 'inherit' }} />
                </div>
                <div
                    className={cls.rect}
                    style={{
                        left: `${292 / 1449 * 100}%`,
                        top: `${720 / 855 * 100}%`,
                        width: `${79 / 1449 * 100}%`,
                        height: `${12 / 855 * 100}%`,
                        fontSize: `${15 / 855 * 100}vh`,
                        lineHeight: `${15 / 855 * 100}vh`,
                    }}
                >

                    wef
                    <div style={{ width: 'inherit', height: 'inherit' }} />
                </div>
            </div>
        </div>
    </div>
);
