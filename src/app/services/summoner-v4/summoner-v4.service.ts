import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SummonerData } from 'src/app/shared/interfaces/summoner-data';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})

export class SummonerV4Service {

  constructor(private _http: HttpClient, private _store: StoreService) { }

  getSummonerByName(summonerName: string): Observable<SummonerData> {
    return this._http.get<SummonerData>(`https://${this._store.selectedCountry}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${environment.apiKey}`);
  }
}
