import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashComponent } from './dash/dash.component';
import { HistoryComponent } from './history/history.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserdashComponent } from './userdash/userdash.component';
import { UsersamplesComponent } from './usersamples/usersamples.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ActiveComponent } from './history/active/active.component';
import { CompletedComponent } from './history/completed/completed.component';
import { SavedComponent } from './usersamples/saved/saved.component';
import { OpenreqComponent } from './openreq/openreq.component';
import { BorrowedComponent } from './usersamples/borrowed/borrowed.component';

const routes: Routes = [
  // { path:'', pathMatch: 'full', redirectTo: '/login' },
  { path:'admin/create', component: CreateComponent },
  { path:'admin/dash', component: DashComponent },
  { path:'admin/checkout', component: CheckoutComponent },
  { path:'admin/requests', component: OpenreqComponent },
  { path:'admin/history', component: HistoryComponent, 
  children: [{path: 'active', component: ActiveComponent},{path: 'completed',component: CompletedComponent}]
  },
  { path:'user/samples', component: UsersamplesComponent, children: [{ path: 'borrowed',component: BorrowedComponent }, { path: 'saved', component: SavedComponent }] }, 
  { path:'user/dash', component: UserdashComponent },
  { path:'confirmation', component: ConfirmationComponent },
  { path:'login', component: LoginComponent },

  { path: '**', component: UserdashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }