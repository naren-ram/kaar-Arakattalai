import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyReferralsComponent } from './pages/my-referrals/my-referrals.component';


export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-referrals', component: MyReferralsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];