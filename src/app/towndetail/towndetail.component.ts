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

  constructor(private townService: TownService,
              private route: ActivatedRoute,
              private location: Location) { 

  }

  ngOnInit() {
    this.route.paramMap    
    .switchMap((params: ParamMap) => this.townService.searchGit(String(+params.get('id'))))
    .subscribe(res => console.log("towndetail.component.ts this.route.paramMap", res));

    // this.heroService.getHero(+params.get('id')))
    // .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  

}
