import { routeConfig } from 'app/config';
import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { PageTitle } from 'widgets/PageTitle/ui/PageTitle';

export const AppRouter: FC = () => (
    <Routes>
        {Object.entries(routeConfig).map(([name, { path, element }]) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
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
