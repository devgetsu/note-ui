import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FineComponent } from './components/fine/fine.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PasswordsComponent } from './components/passwords/passwords.component';
import { ConsumbtionsComponent } from './components/consumbtions/consumbtions.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [authGuard] },
    { path: 'main', component: MainComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'passwords', component: PasswordsComponent },
    { path: 'fines', component: FineComponent },
    { path: 'consumption', component: ConsumbtionsComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full' }
];
