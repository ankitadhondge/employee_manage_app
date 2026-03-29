import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { EmployeeList } from './pages/employee-list/employee-list';
import { EmployeeForm } from './pages/employee-form/employee-form';
import { Department } from './pages/department/department';
import { Designation } from './pages/designation/designation';
import { Header } from './pages/header/header'; // Corrected import
export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },

    {
        path:'',
        component: Header,
        children:[
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'employees',
                component: EmployeeList
            },
            {
                path: 'employee-form',
                component: EmployeeForm
            },
            {
                path: 'departments',
                component: Department
            },
            {
                path: 'designations',
                component: Designation
            }
        ]
    }

];


