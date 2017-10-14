import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AuthGuard} from './auth/service/auth-guard.service';
import {AuthModule} from './auth/auth-module';
import {AuthService} from './auth/service/auth.service';
import {CoreModule} from './core/core.module';
import {DatabaseService} from './shared/services/database.service';
import {RecipeService} from './shared/services/recipe.service';
import {SharedModule} from './shared/shared.module';
import {ShoppingListService} from './shared/services/shopping.service';
import {ProfilesModule} from './profiles/profiles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    CoreModule,
    ProfilesModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService, DatabaseService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
