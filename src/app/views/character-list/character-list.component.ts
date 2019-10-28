import { Component, OnInit, OnDestroy } from "@angular/core";
import { CharacterService } from "src/app/services/character.service";
import { Observable } from "rxjs";
import { TrackJS } from "trackjs";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"]
})
export class CharacterListComponent implements OnDestroy {
  public characters: Character[];
  public isAutoRunning: boolean;
  public interval: any;
  public isLoading: boolean;
  constructor(private characterService: CharacterService) {
    this.isAutoRunning = false;
    this.isLoading = false;
  }

  onGenerate() {
    this.isLoading = true;
    performance.mark("start");
    this.characterService.getRandomCharacters().subscribe((res: any) => {
      this.characters = res.results;
      this.isLoading = false;
      performance.mark("end");
      performance.measure("get random characters", "start", "end");
      console.log(performance.getEntriesByType("measure"));
      TrackJS.console.log("Characters updates");
    });
  }
  generateWithIntervals() {
    this.isAutoRunning = true;
    this.characters = [];
    try {
      this.interval = setInterval(function() {
        this.isLoading = true;
        this.characterService.getRandomCharacters().subscribe((res: any) => {
          this.characters.push(res.results);
          this.isLoading = false;
        });
      }, 3000);
    } catch (err) {
      TrackJS.track(err.message);
    }
  }

  stopInterval() {
    this.isAutoRunning = false;
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    this.stopInterval();
  }
}
