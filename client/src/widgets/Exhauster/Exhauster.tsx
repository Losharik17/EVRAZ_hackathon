import { FC, HTMLAttributes } from 'react';
import { Scheme, SchemeRangeContainer } from 'entities/scheme/ui';
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
                    <SchemeRangeContainer progress={(
                        <SchemeProgressIndicator
                            type='Oil presure'
                            value={2}
                        />
                    )}
                    />
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
                    wef
                    <div style={{ width: 'inherit', height: 'inherit' }} />
                </div>
            </div>
        </div>
    </div>
);
