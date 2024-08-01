import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FineComponent } from './components/fine/fine.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PasswordsComponent } from './components/passwords/passwords.component';
import { ConsumbtionsComponent } from './components/consumbtions/consumbtions.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guard/auth.guard';
import { PasswordEditComponent } from './components/passwords/password-edit/password-edit.component';
import { PasswordPostComponent } from './components/passwords/password-post/password-post.component';
import { EmployeesUpdateComponent } from './components/employees/employees-update/employees-update.component';
import { EmployeesPostComponent } from './components/employees/employees-post/employees-post.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [authGuard] },
    { path: 'main', component: MainComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'employees-edit/:id', component: EmployeesUpdateComponent },
    { path: 'employees-post', component: EmployeesPostComponent },
    { path: 'passwords', component: PasswordsComponent},
    { path: 'passwords-edit/:id', component : PasswordEditComponent},
    { path: 'passwords-post', component : PasswordPostComponent},
    { path: 'fines', component: FineComponent },
    { path: 'consumption', component: ConsumbtionsComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full' }
];
