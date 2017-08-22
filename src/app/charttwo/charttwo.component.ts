import { Component, OnInit } from '@angular/core';
import {single} from './data';
import {single2} from './data2';
import {TownService} from '../services/town.service';

@Component({
  selector: 'app-charttwo',
  templateUrl: './charttwo.component.html',
  styleUrls: ['./charttwo.component.css'],
  providers: [TownService]
})
export class CharttwoComponent implements OnInit {
  count: number = 123;
  single: any[]; 
  single2: any[];    
  view: any[] =[700, 400]; // []; //

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {    
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private townService: TownService) {     
    Object.assign(this, {single});
    Object.assign(this, {single2});       
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event, this.count);
    //alert(JSON.stringify(event));

    Object.assign(this, {single});  
    if(this.count % 2) {
      this.single = this.single;
    }
    else {
      //this.single = this.single2;
      //this.townService.search('wtf');
      this.townService.searchGit('bobo').subscribe(
        res => {
          this.single = res;
          console.log(res);
          //console.log(res.total_count);
        }
      );
    
    }
    this.count++;    
  }

}
