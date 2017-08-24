import { Component, OnInit, Directive, ElementRef } from '@angular/core';
import { single } from './data';
import { single2 } from './data2';
import { TownService } from '../services/town.service';
import { ColorHelper } from '../../common/color.helper';

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
  //invertColor: any[];

  //invertColor.invertColor.col
  colors: any;
  //single2: any[];    
  //view: any[] =[700, 400]; // []; //
  //@el Input('view') view: string;
  //@Input() someattribute: string;
 // @ElementRef() asdf: string;

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
    //domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    domain: [
      '#bf9d76', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1', '#afafaf', '#707160', '#ba9383', '#d9d5c3'
    ]
  };

  constructor(private townService: TownService, el: ElementRef) {     
    //el.nativeElement.view = [70, 40]; // wtf

    Object.assign(this, {single});
    Object.assign(this, {single2});
//this.someattribute = elementRef.nativeElement.getAttribute('someattribute');       
  }

  private timer;
  ngOnInit() {
    let delta = 5000;
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
    //console.log(event, this.count);
    //console.log("debug ", this.single[0].name);
    //alert(JSON.stringify(event));
    Object.assign(this, {single});
    //console.log(event, this.count);

    if(this.count % 2) {
      this.single = this.single;
      this.single[0].name = "pray(1)";
      this.single[1] = {"name": "Starbucks(1)", "value": 4000000+this.count};
      //@view = [700, 400];      
      this.setColors('fire');
    }
    else {
      // this.townService.searchGitPromise("fish").
      // then(heroes => 
      //   {
      //     console.log('WAHT ARE YOU: ', heroes.Hero);          
      //   this.single = heroes.Hero;
      // }      
      // );//.slice(1, 5));       

//      this.single = this.single2;            
//      this.single[0] = {name: "pray(2)", value:   this.single[0].value};            
//      this.single[1] = {"name": "Starbucks", "value": 4000000+this.count};

      let wasCount = this.count;
      //this.townService.searchGitObservable2('mastronardif').subscribe(
      this.townService.searchGit('mastronardi').subscribe(      
          res => {            
            //console.log("\t", event, this.count);
            this.setColors('vivid');

            this.single = this.single2;            
            this.single[0] = {name: "pray(2)", value:   this.single[0].value};            
            this.single[1] = {"name": "Starbucks", "value": 4000000+wasCount};
          },           
         err => {
           alert("FM err = " + err);
           console.log(err);
         }
        );    
    }

    this.count++;        
  }

  setColors(name): void {
    // //this.colorScheme
    // //const scheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
    this.colors = new ColorHelper(name, null, null);// (scheme, 'ordinal', [], null);
    this.colorScheme = { domain: this.colors.colorDomain}; //scheme; //this.colors.colorDomain; // // scheme; //this.colors;
  }

}
