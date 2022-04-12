import { Injectable } from '@angular/core';
import { SummonerData } from 'src/app/shared/interfaces/summoner-data';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public country = [
    { value: 'br1', viewValue: 'Brasil' },
    { value: 'eun1', viewValue: 'Europe Nordic & East' },
    { value: 'euw1', viewValue: 'Europe West' },
    { value: 'jp1', viewValue: 'Japan' },
    { value: 'kr', viewValue: 'Korea' },
    { value: 'la1', viewValue: 'Latin America North' },
    { value: 'la2', viewValue: 'Latin America South' },
    { value: 'na1', viewValue: 'North America' },
    { value: 'oc1', viewValue: 'Oceania' },
    { value: 'tr1', viewValue: 'Turkey' },
    { value: 'ru', viewValue: 'Russia' },
  ];
  public selectedCountry: string = '';
  public summonerData: SummonerData = {
    accountId: '',
    profileIconId: 0,
    summonerLevel: 0,
    name: '',
    id: 0,
    revisionDate: 0,
    puuid: ''
  };

  constructor() { }
}
