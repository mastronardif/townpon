import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SimpleTimer } from 'ng2-simple-timer';
import { MatInputModule, MatListModule, MatGridListModule, MatTableModule, MatFormFieldModule, MatSliderModule, MatIconModule, MatSnackBarModule, MatCardModule, MatToolbarModule } from '@angular/material';
import {Component} from '@angular/core';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {CharttwoComponent}   from './charttwo/charttwo.component';
import { TowndetailComponent } from './towndetail/towndetail.component';
import { TownroutesRoutingModule } from './townroutes/townroutes-routing.module';
import { StoredetailComponent } from './storedetail/storedetail.component';
import { StoregridComponent } from './storegrid/storegrid.component';
import { BigdummyComponent } from './bigdummy/bigdummy.component';
import { DataService } from './services/data.service';
import { CoursesService } from "./services/courses.service";

import { TableexComponent } from './tableex/tableex.component';
import { StoredashboardComponent } from './storedashboard/storedashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CharttwoComponent,
    TowndetailComponent,
    BigdummyComponent,
    StoredetailComponent,
    StoregridComponent,
    TableexComponent,
    StoredashboardComponent,
  ],
  entryComponents: [BigdummyComponent],
  imports: [
    BrowserModule, RouterModule,
    //MaterialModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,   
    MatInputModule,
	MatListModule,
	MatGridListModule,
    MatSnackBarModule, 
    MatIconModule,	
	MatSliderModule,
	MatFormFieldModule,
	MatTableModule,
	
    TownroutesRoutingModule
  ],
  providers: [SimpleTimer, CoursesService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
