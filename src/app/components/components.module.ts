import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

import { MatInputModule } from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ProfileCardComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ComponentsModule { }
