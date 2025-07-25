import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Standalone components should be IMPORTED, not DECLARED
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyReferralsComponent } from './pages/my-referrals/my-referrals.component';
import { ContributionStatusComponent } from './components/contribution-status/contribution-status.component';

import { appRoutes } from './app.routes';

@NgModule({
  // ❌ NO declarations for standalone components
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

    // ✅ Import standalone components here
    AppComponent,
    DashboardComponent,
    MyReferralsComponent,
    ContributionStatusComponent
  ],
  // ❌ DO NOT bootstrap standalone components here
  // bootstrap: [AppComponent]
})
export class AppModule { }
