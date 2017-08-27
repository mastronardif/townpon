import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { TownService } from '../services/town.service'
@Component({
  selector: 'app-towndetail',
  templateUrl: './towndetail.component.html',
  styleUrls: ['./towndetail.component.css']
})
export class TowndetailComponent implements OnInit {
  results: any;
  result: any;
  param: string;
  bShowCoupon: boolean;
  discount: string;

  imagePath: string;

  constructor(private townService: TownService,
              private route: ActivatedRoute,
              private location: Location) { 
  }

  ngOnInit() {
    //this.bShowCoupon= false;
  
    this.route.paramMap    
      .switchMap((params: ParamMap) => 
      (this.param = params.get('id'),  
        this.townService.getCoupon(String(+params.get('id'))) )
      )
      .subscribe(res => {      
      //console.log("towndetail.component.ts this.route.paramMap", res);
      this.result = res;
      this.results = JSON.stringify(res);
      this.imagePath = res.thumb;
      this.discount = res.coupon.msg; //"The coupon!10% off order";
      //console.log("############ results = ", this.results);
      });

    // this.heroService.getHero(+params.get('id')))
    // .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  reserveCoupon(): void {
    //alert('reserve coupon  ');
    this.param= "";
  }
  closeCoupon(): void {    
    this.param= "";
  }


  

}
