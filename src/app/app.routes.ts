import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FineComponent } from './components/fine/fine.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PasswordsComponent } from './components/passwords/passwords.component';
import { ConsumbtionsComponent } from './components/consumbtions/consumbtions.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'passwords', component: PasswordsComponent },
    { path: 'fines', component: FineComponent },
    { path: 'consumption', component: ConsumbtionsComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];
