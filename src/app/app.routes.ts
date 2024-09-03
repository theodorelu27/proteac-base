import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TeaTimeGamingComponent } from './pages/tea-time-gaming/tea-time-gaming.component';
import { AlterSphereComponent } from './pages/alter-sphere/alter-sphere.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tea-time-gaming',
        component: TeaTimeGamingComponent
    },
    {
        path: 'alter-sphere',
        component: AlterSphereComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
