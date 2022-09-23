import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),canActivate:[AuthGuard] },
 { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule),canActivate:[AuthGuard] },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard] },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),canActivate:[AuthGuard] },
  { path: '', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
   { path: 'auth/register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'createpost', loadChildren: () => import('./createpost/createpost.module').then(m => m.CreatepostModule),canActivate:[AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
