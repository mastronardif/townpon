
import {switchMap} from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { SimpleTimer } from 'ng2-simple-timer';
import { TownService } from '../services/town.service'
@Component({
  selector: 'app-towndetail',
  templateUrl: './towndetail.component.html',
  styleUrls: ['./towndetail.component.css'],
  providers: [TownService]
})
export class TowndetailComponent implements OnInit {
  results: any;
  result: any;
  param: string;
  bShowCoupon: boolean;
  discount: string;

  timerCounter0 = 0;
  timerStopAt = 200; 
  timerTickSize = .001;
  timer0Id: string;
  timer0button = 'Subscribe';

  imagePath: string;

  constructor(private st: SimpleTimer,
              private townService: TownService,
              private route: ActivatedRoute,
              private location: Location) { 
  }

  ngOnInit() {
    console.log("\t **** towndetail.component.ts:ngOnInit");

    // this.route.params.subscribe(params => {
    //   // each time the search data is change you'll get this running
    //   //Do what ever you need to refresh your search page
    //   console.log('*** New route params for towndetail.component ', this.route);
    // });


    //this.bShowCoupon= false;
		this.st.newTimer('1sec', this.timerTickSize);
    //this.subscribeTimer0();
      
    //FM research this.  It looks like it calls the route at init time.
    // Alex ?
    this.route.paramMap.pipe(    
      switchMap((params: ParamMap) => ( this.param = params.get('id'),  
        console.log(`this.param = ${this.param}`),
        this.townService.getCoupon(String(+params.get('id'))) )
      ))
      .subscribe(res => {  
        console.log(`** this.param = ${this.param}`);    
        console.log("towndetail.component.ts this.route.paramMap", res);
        this.result = res;
        this.results = JSON.stringify(res);
        this.imagePath = res.thumb;
        this.discount = res.coupon.msg;
        if (this.param) {
          this.startTimer0();
        }
      });
  }

  delAllTimer() {
		this.st.delTimer('1sec');
		//this.st.delTimer('5sec');		
  }

  startTimer0() {
    this.timerCounter0 = 0;
    this.subscribeTimer();
    //this.subscribeTimer0();
  }

  stopTimer0() { 
    this.param= "";
    this.timerCounter0 = 0;      
    this.unsubscribeTimer();
  }

  unsubscribeTimer() {
	  if (this.timer0Id) {
			this.st.unsubscribe(this.timer0Id);
			this.timer0Id = undefined;
			console.log('timer 0 Unsubscribed.');
    }
  }

  subscribeTimer() {
	  if (!this.timer0Id) {
			this.timer0Id = this.st.subscribe('1sec', () => this.timer0callback());
			console.log('timer 0 Subscribed.');
    }
  }
    
  // REMOVEME__subscribeTimer0() {
	// 	if (this.timer0Id) {
	// 		// Unsubscribe if timer Id is defined
	// 		this.st.unsubscribe(this.timer0Id);
	// 		this.timer0Id = undefined;
	// 		//this.timer0button = 'Subscribe';
	// 		console.log('timer 0 Unsubscribed.');
	// 	} else {
	// 		// Subscribe if timer Id is undefined
	// 		this.timer0Id = this.st.subscribe('1sec', () => this.timer0callback());
	// 		//this.timer0button = 'Unsubscribe XXXX';
	// 		console.log('timer 0 Subscribed.');
	// 	}
	// 	console.log(this.st.getSubscription());
  // }

  timer0callback(): void {
    this.timerCounter0++;
    //console.log(`counter ${this.timerCounter0}`);

    // stop at __
    if (this.timerCounter0 > this.timerStopAt) {           
      if (this.timer0Id) {
        this.stopTimer0();
			  // Unsubscribe if timer Id is defined
        //this.st.unsubscribe(this.timer0Id);
      }
    }
	}
  
  goBack(): void {
    this.location.back();
  }

  reserveCoupon(): void {
    this.stopTimer0();
    this.param= "";
  }
  closeCoupon(): void {
    this.stopTimer0();    
    this.param= "";
  } 

}
