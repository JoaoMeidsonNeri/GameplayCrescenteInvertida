import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SummonerData } from 'src/app/shared/interfaces/summoner-data';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})

export class SummonerV4Service {

  constructor(private http: HttpClient, private store: StoreService) { }

  getSummonerByName(summonerName: string): Observable<SummonerData> {
    return this.http.get<SummonerData>(`https://${this.store.selectedCountry}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${environment.apiKey}`);
  }
}
