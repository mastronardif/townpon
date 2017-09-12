import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { TownService } from './services/town.service';
import { DataService } from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TownService]
})

export class AppComponent implements OnInit {

  public town:string = "tbd";

  constructor(private data: DataService, private router: Router ) {
    console.log(`app.components.ts, constructor, ${router}`);
  }

  ngOnInit() {
    console.log('app.component:ngOnInit');
    console.log('this.router[0]', this.router);

    this.data.currentMessage.subscribe(message => {
                              //console.log("SUBscribed. A new TOWN has been loaded: "+message);
                              this.town = message});
  }

  sendMsg(event) {
    // Send msg to ___.
    this.data.changeMessage22(event.currentTarget.name);
  }

  adminTown(event) {
    var elementId = event.currentTarget.id;
    this.getCoupon('Add an establishment. ');
  }

  adminSelectTown() {
    let id='b'+Date.now();
    console.log(':adminAddSelectTown', id);
 
    let link = ['/charttwo', id];
    this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
  }

  adminAddStoreDetail() {
    console.log('adminAddStoreDetail');
    let id = 'tbd_id';
    let link = ['/store', id];
    //this.router.navigate(link);
    this.router.navigate(link, { replaceUrl: false, skipLocationChange: true });
    
    //this.router.navigate(['/store', 'tbd']);

    // gotoDetail(): void {
    //   this.router.navigate(['/detail', this.selectedHero.id]);
    // }
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
