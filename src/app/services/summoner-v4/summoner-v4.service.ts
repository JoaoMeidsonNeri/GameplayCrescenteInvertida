import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StoreService } from '../store/store.service';
import { SummonerData } from 'src/app/shared/interfaces/summoner-data';

@Injectable({
  providedIn: 'root'
})
export class SummonerV4Service {

  summonerData$!: any;
  constructor(private http: HttpClient, private store: StoreService) { }

  getSummonerByName(summonerName: string) {
    return this.http.get<SummonerData>(`https://${this.store.selectedCountry}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${environment.apiKey}`);
  }
}
