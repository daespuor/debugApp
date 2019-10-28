import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharacterListComponent } from "./views/character-list/character-list.component";
import { CharacterDetailsComponent } from "./views/character-details/character-details.component";

const routes: Routes = [
  { path: "", component: CharacterListComponent },
  { path: "character/:id", component: CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
