import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { UserDashboard } from './pages/user-dashboard/user-dashboard';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [

    { path: '', component: Home },

    { path: 'register', component: Register },

    { path: 'login', component: Login },

    { path: 'user-dashboard', component: UserDashboard },

    { path: 'admin-dashboard', component: AdminDashboard }

];