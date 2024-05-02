import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'form',
    title: 'Form',
    component: FormPageComponent,
  },
];
