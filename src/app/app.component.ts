import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor( private router: Router ) {
    console.log(`app.components.ts, constructor, ${router}`);
  }
  ngOnInit() {
    console.log('app.component:ngOnInit');
    console.log('this.router[0]', this.router);

    // this.router.routeReuseStrategy.shouldReuseRoute = function() {
    //   return false;
    // };

    // ( =>
    //   {
    //     console.log(`what the fuck is bob (${bob})`);
    //     return false;
    //   }
    // );
  }

  adminTown(event) {
    var elementId = event.currentTarget.id;
    //alert(`Admin(${elementId}) Town coming to a theater near you.`);
    this.getCoupon('Add an establishment. ');
  }

  getCoupon(id:string): void {    
    id=id+Date.now();
    console.log(':getCoupon', id);
    
    //let id = event.name;
    let link = ['/detail', id];
//this.router.navigate(link);
    this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
    //this.router.navigate(['/detail'], { queryParams: { id: '1YOU' }  }); 
  }

}
