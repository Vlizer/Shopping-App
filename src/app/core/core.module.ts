import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {AuthService} from '../auth/service/auth.service';
import {ShoppingListService} from '../shared/services/shopping.service';
import {RecipeService} from '../shared/services/recipe.service';
import {DatabaseService} from '../shared/services/database.service';
import { ErrorComponent } from './error/error.component';
import {ErrorService} from "../shared/services/error.service";
import {FormsModule} from "@angular/forms";
import {ProfilesService} from "../shared/services/profiles.service";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DatabaseService,
    AuthService,
    ErrorService,
    ProfilesService
  ]
})
export class CoreModule {

}
