import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleriaModule } from 'primeng/galleria';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RoleMasterComponent } from './MASTERS-MODULE/role-master/role-master.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ContactsListComponent } from './FORMS-MODULE/contacts-list/contacts-list.component';
import { FundUtilizationComponent } from './FORMS-MODULE/fund-utilization/fund-utilization.component';
import { CallSheetComponent } from './FORMS-MODULE/call-sheet/call-sheet.component';
import { ShootingScheduleComponent } from './FORMS-MODULE/shooting-schedule/shooting-schedule.component';

import { LocationInfoComponent } from './FORMS-MODULE/location-info/location-info.component';
import { DailyExpensesComponent } from './EXPENSES-MODULE/daily-expenses/daily-expenses.component';
import { MenuMasterComponent } from './MASTERS-MODULE/menu-master/menu-master.component';
import { UnionMasterComponent } from './MASTERS-MODULE/union-master/union-master.component';
import { MaincategoryMasterComponent } from './MASTERS-MODULE/maincategory-master/maincategory-master.component';
import { SubcategoryMasterComponent } from './MASTERS-MODULE/subcategory-master/subcategory-master.component';
import { StateMasterComponent } from './MASTERS-MODULE/state-master/state-master.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MenuComponent,
    RegistrationComponent,
    LoginComponent,

    ContactsListComponent,
    FundUtilizationComponent,
    CallSheetComponent,
    ShootingScheduleComponent

    RoleMasterComponent,
    MenuMasterComponent,
    UnionMasterComponent,
    MaincategoryMasterComponent,
    SubcategoryMasterComponent,
    StateMasterComponent,
    ContactsListComponent,
    LocationInfoComponent,
    DailyExpensesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleriaModule,
    SidebarModule,
    PanelModule,
    InputTextModule,
    FormsModule,
    CardModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    TableModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
