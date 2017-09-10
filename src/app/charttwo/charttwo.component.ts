import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { single } from  './westfieldfood1';
import { single2 } from './westfieldfood';

import { TownService } from '../services/town.service';
import { ColorHelper } from '../../common/color.helper';
import { colorSets } from '../../utils/color-sets';
import { Router }      from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { TowndetailComponent }  from '../towndetail/towndetail.component';
import { StoredetailComponent } from '../storedetail/storedetail.component';
import { BigdummyComponent }    from '../bigdummy/bigdummy.component';
import { DataService } from "../services/data.service";


@Component({
  selector: 'app-charttwo',
  templateUrl: './charttwo.component.html',
  styleUrls: ['./charttwo.component.css'],
  providers: [TownService, TowndetailComponent, StoredetailComponent, BigdummyComponent]
})

@Directive({ selector: '[view]' })

export class CharttwoComponent implements OnInit {
  count: number = 123;
  single: any[]; 
  single2: any[]; 

  towns: any[];
  resturaunts: any[];
  town:string = 'bbb';
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

  constructor(private data: DataService, private townService: TownService,
    public snackBar: MdSnackBar,
    private route: ActivatedRoute,
    private router: Router, 
    el: ElementRef) {     

    Object.assign(this, {single});
    Object.assign(this, {single2});
  }

  private timer;

  tellEveryoneAboutTown(town: string) {
    //console.log(`tellEveryoneAboutTown(${town})`);
    this.data.changeMessage(town);
  }
 
  setResturaunts(town: string, dest: any[]) {
      //console.log(`setResturaunts(${town})`);
      this.townService.searchTown(town).subscribe(      
      res => { //console.log("Resturaunts= ", res);        
               //this.single = res; 
               this.resturaunts = res;
              
               this.single2=res;
               this.town = town;
               //console.log("resturaunts = ", this.single2)
       },
       err => {
        alert("FM err = " + err);
        console.log(err);
      });
  }

  ngOnDestroy() { 
    console.log('ngOnDestroy()');
    clearInterval(this.timer);
  }

  ngOnInit() {   
    //this.data.currentMessage.subscribe(message => this.town = message+'uuu');
    console.log('charttwo:ngOnInit()');

    this.route.paramMap
    .switchMap((params: ParamMap) => this.townService.searchTown(params.get('id')))
    .subscribe(res => {this.single2 = res; this.setColors('RANDOM');});


    this.townService.searchTown('the towns').subscribe(      
      res => { //console.log(res);        
               this.single = res;                
               this.towns = res;
               this.towns = this.towns.map(item => item.name);

               this.town = 'the towns';
               this.tellEveryoneAboutTown('the towns');
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

  onSelect(event) {
    //Object.assign(this, {single});
    
    if (event != null) {
      let town:string = event.name;
      if (this.towns.findIndex(item =>(item == event.name)) != -1 ) {
        console.log(`SET single for ${town}`);
        //this.town=town;
        this.setResturaunts(event.name, this.single);
      }      

      this.getCoupon(event);
      return;
      //this.townService.getCoupon(event);
    }
    
    if(this.count % 2) {

      Object.assign(this, {single});

      this.single[0].value =  this.single[0].value+1;
      let name=this.single[1].name;         
      this.setColors('fire');
      //this.town='Westfield(default)';
      this.tellEveryoneAboutTown('Westfield');
    }
    else {
      //console.log("\t ***** ***** ", event, this.count);
      this.tellEveryoneAboutTown(this.town);
      let wasCount = this.count;
      this.townService.searchGit('mastronardi').subscribe(      
          res => {            
            //console.log("\t", event, this.count);
            this.setColors('vivid');

            this.single = this.single2;  
            //console.log("2 this.single= ", this.single);

            //let name = `${this.single[0].name} ZZ`;    
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

  openSnackBar(name: string) {
    //this.snackBar.openFromComponent(PizzaPartyComponent, {
      this.snackBar.open(`getting your coupon for ${name}`, 'Close', { duration: 1000 });
      
      //this.snackBar.openFromComponent(CharttwoComponent, {
      //duration: 1500,
      //});
  }

  openSnackBar2(name: string) {
    //console.log('openSnackBar2');
    
    //this.snackBar.openFromComponent(PizzaPartyComponent, {
      //this.snackBar.open(`getting your coupon for ${name}`, 'Close', { duration: 1000 });
      //import { TowndetailComponent }  from '../towndetail/towndetail.component';

      this.snackBar.openFromComponent(
        //CharttwoComponent,
        //StoredetailComponent,
        //TowndetailComponent,
        BigdummyComponent,
         { duration: 1000, });
  }

  getCoupon(event): void {
    const name: string = event.name;  
    const b908: boolean  = (-1 != name.indexOf('0954')) && 
              (-1 != name.indexOf('0954')); 

    if (event.name != 'Publick House') {
      if (b908) {
        this.openSnackBar2(event.name);
      }
      else {
        this.openSnackBar(event.name);
      }
      return;
    }

    //console.log('getCoupon', event);
    this.setColors('night');
    
    let id = event.name;
    let link = ['/detail', id];
    //this.router.navigate(link);
    this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
    //this.router.navigate(['/detail'], { queryParams: { id: '1YOU' }  }); 
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  setColors(name:string): void {
    
    if (name.toUpperCase() == 'RANDOM') {      
      let iRand = this.getRandomIntInclusive(0, colorSets.length-1);
      //console.log(iRand, colorSets[iRand].name);
      name = colorSets[iRand].name;
    }

    this.colors = new ColorHelper(name, null, null);// (scheme, 'ordinal', [], null);
    this.colorScheme = { domain: this.colors.colorDomain}; //scheme; //this.colors.colorDomain; // // scheme; //this.colors;
  }

}
