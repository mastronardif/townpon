import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { single } from  './westfieldfood1'; //'./data';
import { single2 } from './westfieldfood';
import { TownService } from '../services/town.service';
import { ColorHelper } from '../../common/color.helper';
import { Router }      from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-charttwo',
  templateUrl: './charttwo.component.html',
  styleUrls: ['./charttwo.component.css'],
  providers: [TownService]
})

@Directive({ selector: '[view]' })

export class CharttwoComponent implements OnInit {
  count: number = 123;
  single: any[]; 
  single2: any[]; 
  towns: any[];
  resturaunts: any[];

  //invertColor: any[];

  //invertColor.invertColor.col
  colors: any;
  // options
  //showXAxis = true;
  //showYAxis = true;
  gradient = false;
  //showLegend = true;
  //showXAxisLabel = true;
  //xAxisLabel = 'Country';
  //showYAxisLabel = true;
  //yAxisLabel = 'Population';

  colorScheme = {    
    //domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    domain: [
      '#bf9d76', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1', '#afafaf', '#707160', '#ba9383', '#d9d5c3'
    ]
  };

  constructor(private townService: TownService,
    private route: ActivatedRoute,
    //private location: Location,
    private router: Router, 
    el: ElementRef) {     

    Object.assign(this, {single});
    Object.assign(this, {single2});
  }

  private timer;

  setResturaunts(town: string, dest: any[]) {
      console.log(`setResturaunts(${town})`);
      this.townService.searchTown(town).subscribe(      
      res => { console.log("Resturaunts= ", res);        
               //this.single = res; 
               this.resturaunts = res;
       },
       err => {
        alert("FM err = " + err);
        console.log(err);
      });
  }

  ngOnInit() {   
    this.townService.searchTown('the towns').subscribe(      
      res => { //console.log(res);        
               this.single = res;                
               this.towns = res;
               this.towns = this.towns.map(item => item.name);
       },
       err => {
        alert("FM err = " + err);
        console.log(err);
      });

    let delta = 6000;
    this.timer = setInterval(() => 
      {
        this.onSelect(null);        
        //console.log(`tick tock every ${delta}`);
      }, delta);    

    // this.timer = setTimeout(() => 
    // {
    //   alert('this.onSelect(null)')
    //   console.log('ssssssssssss');
    // }, 500);
    //console.log('ngOnInit() ngOnInit() ngOnInit()');

  }

  // addToTowns(town) {
  //   console.log(`addToTowns(${town})`);
  // }

  onSelect(event) {
    Object.assign(this, {single});
    //this.single = this.single2;
    //Object.assign(this, {single2});
    //console.log(event, this.count);

    if (event != null) {

      if (this.towns.findIndex(item =>(item == event.name)) != -1 ) {
        this.setResturaunts(event.name, this.single);
      }      

      this.getCoupon(event);
      return;
      //this.townService.getCoupon(event);
    }
    
    if(this.count % 2) {
      this.single[0].value =  this.single[0].value+1;
      let name=this.single[1].name;         
      this.setColors('fire');
    }
    else {
      let wasCount = this.count;
      this.townService.searchGit('mastronardi').subscribe(      
          res => {            
            //console.log("\t", event, this.count);
            this.setColors('vivid');

            this.single = this.single2;  
            //console.log("2 this.single= ", this.single);

            let name = `${this.single[0].name} ZZ`;    
            this.single[0].value =  this.single[0].value+wasCount;      
          },           
         err => {
           alert("FM err = " + err);
           console.log(err);
         }
        );    
    }

    this.count++;        
  }

  getCoupon(event): void {    
    console.log('getCoupon', event);
    this.setColors('night');
    
    let id = event.name;
    let link = ['/detail', id];
    //this.router.navigate(link);
    this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
    //this.router.navigate(['/detail'], { queryParams: { id: '1YOU' }  }); 
  }

  setColors(name): void {
    this.colors = new ColorHelper(name, null, null);// (scheme, 'ordinal', [], null);
    this.colorScheme = { domain: this.colors.colorDomain}; //scheme; //this.colors.colorDomain; // // scheme; //this.colors;
  }

}
