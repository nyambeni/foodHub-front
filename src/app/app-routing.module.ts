
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurds/auth.guard';
import { AdminauthGuard } from './gaurds/adminauth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'cart-modal/:name',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)

  // canActivate: [AuthGuard]
  },
  {
    path: 'order2',
    loadChildren: () => import('./pages/order2/order2.module').then( m => m.Order2PageModule)
  },
  {
    path: 'order3',
    loadChildren: () => import('./pages/order3/order3.module').then( m => m.Order3PageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {

    path: 'signupadmin',
    loadChildren: () => import('./pages/singupadmin/singupadmin.module').then( m => m.SingupadminPageModule)
  },
  {
    path: 'signupcust',

    loadChildren: () => import('./pages/singupcust/singupcust.module').then( m => m.SingupcustPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'vendor-admin',
    loadChildren: () => import('./pages/vendor-admin/vendor-admin.module').then( m => m.VendorAdminPageModule),
   // canActivate: [AdminauthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/vendor/profile/profile.module').then( m => m.ProfilePageModule),
   // canActivate: [AuthGuard]
  },
  {
    path: 'add-menu',
    loadChildren: () => import('./pages/vendor/add-menu/add-menu.module').then( m => m.AddMenuPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./pages/vendor/overview/overview.module').then( m => m.OverviewPageModule)
  },
  {

    path: 'admin-login',
    loadChildren: () => import('./pages/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'extras',
    loadChildren: () => import('./pages/extras/extras.module').then( m => m.ExtrasPageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.component').then( m => m.SidebarComponent)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)

  },

  {

    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)

  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'custprof',
    loadChildren: () => import('./pages/custprof/custprof.module').then( m => m.CustprofPageModule),
   // canActivate: [AuthGuard]
  },
  {
    path: 'rest-apply',
    loadChildren: () => import('./pages/rest-apply/rest-apply.module').then( m => m.RestApplyPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
