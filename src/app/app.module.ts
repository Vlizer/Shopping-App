import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth-module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {ProfilesModule} from './profiles/profiles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    ProfilesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
