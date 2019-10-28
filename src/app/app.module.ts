import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { CharacterListComponent } from "./views/character-list/character-list.component";
import { HttpClientModule } from "@angular/common/http";
import { CharacterDetailsComponent } from "./views/character-details/character-details.component";
import { TrackJS } from "trackjs";
TrackJS.install({
  token: "5ac78110f1044163a739923e55e31e23"
  // for more configuration options, see https://docs.trackjs.com
});
@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
