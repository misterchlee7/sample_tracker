import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SavedItems } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DashComponent,
    HistoryComponent,
    CheckoutComponent,
    UserdashComponent,
    UsersamplesComponent,
    LoginComponent,
    ConfirmationComponent,
    ActiveComponent,
    CompletedComponent,
    SavedComponent,
    OpenreqComponent,
    BorrowedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [HttpService, SavedItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
