import { ExhausterPage } from 'pages/ExhausterPage';
import { ServicePage } from 'pages/ServicePage';
import { TrendPage } from 'pages/TrendPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath, RouteName } from 'shared/config';

interface RouteConfig {
    name: RouteName;
    route: RouteProps;
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN_SERVICE]: {
        path: RoutePath['Главный экран'],
        element: <ServicePage />,
    },
    [AppRoutes.EXHAUSTER]: {
        path: RoutePath['Эксгаустер'],
        element: <ExhausterPage />,
    },
    [AppRoutes.TRENDS]: {
        path: RoutePath['Тренды эксгаустера'],
        element: <TrendPage />,
    },
};
