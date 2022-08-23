import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallSheetComponent } from './FORMS-MODULE/call-sheet/call-sheet.component';
import { ContactsListComponent } from './FORMS-MODULE/contacts-list/contacts-list.component';
import { FundUtilizationComponent } from './FORMS-MODULE/fund-utilization/fund-utilization.component';
import { ShootingScheduleComponent } from './FORMS-MODULE/shooting-schedule/shooting-schedule.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'registration', component:  RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contacts-list', component: ContactsListComponent },
  { path: 'fund-utilization', component: FundUtilizationComponent },
  { path: 'shooting-schedule', component: ShootingScheduleComponent },
  { path: 'call-sheet', component: CallSheetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
