import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';
import { SummonerV4Service } from 'src/app/services/summoner-v4/summoner-v4.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  playerName: string = '';
  errorMessage: string = '';
  showLoader: boolean = false;

  constructor(
    public store: StoreService,
    private _summonerV4: SummonerV4Service,
    private _router: Router,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.store.selectedCountry = 'br1';
  }

  getSummonerData(): void {
    this.showLoader = true;
    this._summonerV4.getSummonerByName(this.playerName).subscribe(data  => {
      this.store.summonerData.accountId = data.accountId;
      this.store.summonerData.profileIconId = data.profileIconId;
      this.store.summonerData.summonerLevel = data.summonerLevel;
      this.store.summonerData.name = data.name;
      this.store.summonerData.id = data.id;
      this.store.summonerData.revisionDate = data.revisionDate;
      this.store.summonerData.puuid = data.puuid;
   }, error => {
      this.showLoader = false;
      this.errorMessage = `${error.statusText} - ${error.status}`;  
      this.openSnackBar();
    }, () => {
      this.showLoader = false;
      if(!!this.store.summonerData.name) {
        this._router.navigate(['/dashboard']);
      }
    });
  };

  openSnackBar(): void {
    this._snackBar.open(this.errorMessage, '',  { duration: 2000 });
  }
}
