import { Routes } from '@angular/router';
import { HomeContainer, AboutContainer, ProductsContainer } from '../app-components';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path:'home',
                component: HomeContainer
            },
            {
                path:'about',
                component: AboutContainer
            },
            {
                path:'products',
                component: ProductsContainer
            }
        ]
    }
]