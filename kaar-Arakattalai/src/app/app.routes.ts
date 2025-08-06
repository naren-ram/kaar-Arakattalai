import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];