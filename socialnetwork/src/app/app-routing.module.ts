import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
 { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
   { path: 'auth/register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
