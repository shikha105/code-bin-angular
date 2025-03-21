import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';
import { DeferredDemoComponent } from './components/deferred-demo/deferred-demo.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'create-bin',
    component: CreateBinComponent,
    canActivate: [authGuard],
  },
  { path: 'defer-demo', component: DeferredDemoComponent },
  { path: '', component: HomeComponent },
  { path: 'snippet/:id', component: ViewSnippetComponent },
  { path: '**', component: NotFoundComponent },
];
