import { routeConfig } from 'app/config';
import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageTitle } from 'widgets/PageTitle/ui/PageTitle';

export const AppRouter: FC = () => (
    <Routes>
        {Object.entries(routeConfig).map(([name, { path, element }]) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className='page'>
                            <PageTitle title={name} />
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
