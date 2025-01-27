import React from 'react'
import { createHashRouter } from 'react-router-dom'
import { getDefaultLayout } from './components/layout/index'
import ErrorPage from './pages/error';
import Home from './pages/home';
import { CustomRouteObject } from './lib/types';


export const routerObjects: CustomRouteObject[] = [
  {
    path: '/',
    Component: Home,
  },
]

export function createRouter(): ReturnType<typeof createHashRouter> {
  const routeWrappers = routerObjects.map((router) => {
    const getLayout = router.Component?.getLayout || getDefaultLayout
    const Component = router.Component!
    const page = getLayout(<Component />)
    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createHashRouter(routeWrappers)
}