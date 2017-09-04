import { Component, OnInit } from '@angular/core';
//import { Location } from '@angular/common';
import { Router }      from '@angular/router';

@Component({
  selector: 'app-storedetail',
  templateUrl: './storedetail.component.html',
  styleUrls: ['./storedetail.component.css']
})
export class StoredetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome(): void {
    //this.location.back();
    //let link = ['/detail', 'FUCK'];
    let home = ['/charttwo'];
    
    //this.router.navigateByUrl("/charttwo");
    this.router.navigate(home, { replaceUrl: false, skipLocationChange: true });
    
  }
  // save(): void {
  //   this.heroService.update(this.hero)
  //     .then(() => this.goBack());
//}

}
