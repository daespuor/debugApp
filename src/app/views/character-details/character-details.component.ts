import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CharacterService } from "src/app/services/character.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.css"]
})
export class CharacterDetailsComponent implements OnInit {
  public character$: Observable<Character>;
  public isLoading: boolean;
  constructor(
    private characterService: CharacterService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.character$ = this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.characterService.getCharacterForId(Number(params.get("id"))).pipe(
          tap(() => {
            this.isLoading = false;
          })
        )
      )
    );
  }
}
