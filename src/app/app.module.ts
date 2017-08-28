import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CharttwoComponent }   from './charttwo/charttwo.component';
import { TowndetailComponent } from './towndetail/towndetail.component';
import { TownroutesRoutingModule } from './townroutes/townroutes-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CharttwoComponent,
    TowndetailComponent
  ],
  imports: [
    BrowserModule, RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    TownroutesRoutingModule
  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
