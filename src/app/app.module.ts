import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular/material';
import { MdSnackBar, MdSnackBarModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CharttwoComponent }   from './charttwo/charttwo.component';
import { TowndetailComponent } from './towndetail/towndetail.component';
import { TownroutesRoutingModule } from './townroutes/townroutes-routing.module';
import { StoredetailComponent } from './storedetail/storedetail.component';
import { StoregridComponent } from './storegrid/storegrid.component';
import { BigdummyComponent } from './bigdummy/bigdummy.component';
import { DataService } from './services/data.service';
import { TableexComponent } from './tableex/tableex.component';

@NgModule({
  declarations: [
    AppComponent,
    CharttwoComponent,
    TowndetailComponent,
    BigdummyComponent,
    StoredetailComponent,
    StoregridComponent,
    TableexComponent,
  ],
  entryComponents: [BigdummyComponent],
  imports: [
    BrowserModule, RouterModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,    
    MdSnackBarModule,    
    TownroutesRoutingModule
  ],
  providers: [SimpleTimer, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
