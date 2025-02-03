import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { OptionalPage } from 'pages/OptionalPage'

export enum AppRoutes {
  MAIN = 'main',
  OPTIONAL = 'optional',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.OPTIONAL]: '/4-themes',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.OPTIONAL]: {
    path: RoutePath[AppRoutes.OPTIONAL],
    element: <OptionalPage />,
  },
}
