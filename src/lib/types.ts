import { ReactNode, ComponentType } from 'react';
import { RouteObject } from 'react-router-dom';

export interface RouteError {
    status:number,
    statusText: string,
    message: string
}

export type LayoutComponent =  ComponentType & {
    getLayout?: (page: ReactNode) => ReactNode;
  }
  
  export type CustomRouteObject  =  RouteObject & {
    Component?: LayoutComponent; // Use the extended component type
  }

    
  export type  mealCardProps  = {
   size?: 'sm' | 'lg'
  }
  