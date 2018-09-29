import { Routes } from '@angular/router';
import { HomeContainer } from '../app-components/home/home.container';

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
            }
        ]
    }
]