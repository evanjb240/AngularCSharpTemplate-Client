import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

//Services
import { Page1Service } from './page1/page1.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navigation/navbar/navbar.component';
import { Page1Component } from './page1/page1.component';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Page1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
