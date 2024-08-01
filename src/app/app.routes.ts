import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Dashboard Page',
        component: DashboardPageComponent,
    },
    {
        path: 'leaderboard',
        title: 'App Leaderboard Page',
        component: LeaderboardPageComponent,
    }
];
