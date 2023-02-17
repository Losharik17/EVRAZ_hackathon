export enum AppRoutes {
    MAIN_SERVICE = 'Главный экран',
    TRENDS = 'Тренды эксгаустера',
    EXHAUSTER = 'Эксгаустер',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN_SERVICE]: '/',
    [AppRoutes.EXHAUSTER]: '/exhauster',
    [AppRoutes.TRENDS]: '/trends',
};

export enum RouteName {
    MAIN_SERVICE ='Главный экран',
    EXHAUSTER = 'Эксгаустер',
    TRENDS = 'Тренды эксгаустера',
}
