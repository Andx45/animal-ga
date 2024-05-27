import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RegisterComponent } from './pages/register/register.component';
import { PetsComponent } from './pages/dash/pets/pets.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: NavigationComponent, children:[
        {path: '', redirectTo: 'pets', pathMatch: 'full'},
        {path: 'pets', title: 'Mascotas', component: PetsComponent}
    ]},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
