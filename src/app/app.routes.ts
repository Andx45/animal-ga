import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RegisterComponent } from './pages/register/register.component';
import { PetsComponent } from './pages/dash/pets/pets.component';
import { AppointmentComponent } from './pages/dash/appointment/appointment.component';
import { ServicesComponent } from './pages/services/services.component';
import { AccountComponent } from './pages/dash/account/account.component';
import { ProductsComponent } from './pages/catalogs/products/products.component';
import { CalendarComponent } from './pages/catalogs/calendar/calendar.component';
import { GaleryProductsComponent } from './pages/galery-products/galery-products.component';
import { UsersComponent } from './pages/catalogs/users/users.component';
import { PetsAdminComponent } from './pages/catalogs/pets-admin/pets-admin.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'products', component: GaleryProductsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: NavigationComponent, children:[
        {path: '', redirectTo: 'pets', pathMatch: 'full'},
        {path: 'pets', title: 'Mascotas', component: PetsComponent},
        {path: 'appointment', title: 'Citas', component: AppointmentComponent},
        {path: 'account', title: 'Cuenta', component: AccountComponent},
        {path: 'catalog/products', title: 'Productos', component: ProductsComponent},
        {path: 'catalog/calendar', title: 'Calendario', component: CalendarComponent},
        {path: 'catalog/users', title: 'Usuarios', component: UsersComponent},
        {path: 'catalog/pet-admin', title: 'Usuarios', component: PetsAdminComponent}
    ]},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
