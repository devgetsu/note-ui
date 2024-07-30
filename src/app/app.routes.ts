import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FineComponent } from './components/fine/fine.component';
import { EmployeesComponent } from './components/employees/employees.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'employees', component: FineComponent },
    { path: 'passwords', component: EmployeesComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];
