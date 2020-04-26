import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './compoments/home/home.component';
import { SideBarComponent } from './compoments/side-bar/side-bar.component';
import { TopBarComponent } from './compoments/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { API_BASE_URL } from './services/api-base-url.token';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent, SideBarComponent, TopBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
  ],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.apiUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
