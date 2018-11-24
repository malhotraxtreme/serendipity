import { Routes } from '@angular/router';
import { HomeContainer, AboutContainer, ProductsContainer, ContactComponent, LifestyleComponent, ApparelsComponent, AppliancesComponent } from '../app-components';

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
                // component: ProductsContainer,
                children: [
                    {
                        path: 'apparels',
                        component: ApparelsComponent
                    },
                    {
                        path: 'appliances',
                        component: AppliancesComponent
                    },
                    {
                        path: 'lifestyle',
                        component: LifestyleComponent
                    }
                ]
            },
            {
                path:'contact',
                component: ContactComponent
            }
        ]
    }
]