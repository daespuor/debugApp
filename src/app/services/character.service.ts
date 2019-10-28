import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = "https://rickandmortyapi.com/api/character/";
  }

  public getRandomCharacters(): Observable<Character[]> {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    return this.http.get(
      `${this.apiUrl}?page=${randomNumber}`,
      {}
    ) as Observable<Character[]>;
    //.pipe(map((res: any) => res.results));
  }

  public getCharacterForId(id: number): Observable<Character> {
    return this.http.get(`${this.apiUrl}${id}`, {}) as Observable<Character>;
  }
}
