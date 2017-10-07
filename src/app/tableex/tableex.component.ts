import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Router }      from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { TownService } from '../services/town.service';
import { SimpleTimer } from 'ng2-simple-timer'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tableex',
  templateUrl: './tableex.component.html',
  styleUrls:  ['./tableex.component.css']
})
export class TableexComponent implements OnInit {

  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  // timer stuff
  sttv = {
    st: null,
    timerCounter0: 0,
    timerStopAt: 100, 
    timerTickSize: 0.5,
    timer0Id: null,
    timerName:'1sec'
  }

  timerCounter0 = 0;
  timerStopAt = 100; 
  //timerTickSize = 0.5;
  timer0Id: string;
  readonly timerName = '1sec';

  slider = {
    autoTicks: false,
    disabled: false,
    invert: false,
    max: 2,
    min: .1,    
    showTicks: true,
    step: 0.1,
    thumbLabel: true,
    value: this.sttv.timerTickSize,
    vertical: false
  };

  @ViewChild('filter') filter: ElementRef;

  constructor(private st: SimpleTimer,
              private townService: TownService,
              private route: ActivatedRoute,
              private router: Router) { 
                this.sttv.st = st;
                console.log(`\t ** tableex.component.ts:constructor, ${JSON.stringify(this.sttv)}`);
                
              }

  ngOnInit() {
    console.log(`\t ** tableex.component:ngOnInit timerName= ${this.timerName}, sttv= ${JSON.stringify(this.sttv)}`);
    this.dataSource = new ExampleDataSource(this.exampleDatabase);

    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });

        // Simulate real time with a dummy timmer.
        this.st.newTimer(this.timerName, this.sttv.timerTickSize);
        if (true) {
          this.startTimer0();
        }


        this.route.paramMap
        .switchMap((params: ParamMap) => this.townService.searchTown(params.get('id')))
        .subscribe(res => {
          console.log('res =', res);
          // update data names
          let idx = 0;
          res.forEach(element => {console.log(element.name);            
            this.exampleDatabase.data[idx++].name=element.name;
            this.exampleDatabase.data[idx].name=`ZZZZZ ${idx} YYYY`;
            
          });      
        console.log('*\t* table ex * this.route.paramMap');
        
        //this.tellEveryoneAboutTown(('wtf')); 
      });

  }

  ngOnDestroy() {
    console.log(`\t ** tableex.component:ngOnDestroy, this.st.delTimer(${this.timerName}), sttv= ${JSON.stringify(this.sttv)}`);
    this.st.delTimer(this.timerName);
  }

  resetTimer(ticSize: number) {
    //debugger;
    this.stopTimer0();
    this.sttv.timerTickSize = this.slider.value;
    this.st.delTimer(this.timerName);
    this.st.newTimer(this.timerName, this.sttv.timerTickSize);

    this.startTimer0();
  }

  startTimer0() {
    this.timerCounter0 = 0;
    this.subscribeTimer();
    //this.subscribeTimer0();
  }

  stopTimer0() { 
    //this.param= "";
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

  timer0callback(): void {
    this.timerCounter0++;
    console.log(`counter ${this.timerCounter0}`);
    console.timeEnd("answer time");
    this.simulateDataChange();

    // stop at __
    if (this.timerCounter0 > this.timerStopAt) {           
      if (this.timer0Id) {
        this.stopTimer0();
			  // Unsubscribe if timer Id is defined
        //this.st.unsubscribe(this.timer0Id);
      }
    }
    console.time("answer time");
	}

  //
  simulateDataChange() {
    let i = 5;
    let idx = Math.floor(Math.random() * i);
    console.log(`idx= ${idx}`);

    this.exampleDatabase.data[idx].progress = this.timerCounter0.toString(); // idx.toString();
  }  

  myEvent(event) {
    console.log("id= ", event.currentTarget.id);    
    let id = event.currentTarget.id;
    //console.log("exampleDatabase.data= ", this.exampleDatabase.data);
    if (id === '1') {
      this.timerCounter0 = 0;
      this.exampleDatabase.data[0].progress = '87';

      console.log(`this.slider.value= ${this.slider.value}`);

      if(!this.timer0Id)
      {
        //this.st.unsubscribe(this.timer0Id);
        //this.timer0Id = undefined;
        this.startTimer0();
      }
    }
  }

  // slider begin
  updateValueImme(event: any) {
    console.log("This is emitted as the thumb slides", event);
  }

  updateValue(event: any) {
    console.log("updateValue: event= ", event);

    this.slider.value = event.value.toFixed(1); //replace(/\.(\d\d)\d?$/, '.$1');
//    console.log(`* 2 * this.slider.value= ${this.slider.value}`);

    console.log(`** updateValue: ${this.sttv.timerTickSize} , ${this.slider.value}`);
    {      
    //this.st.getTimer().
    this.resetTimer(this.slider.value);
    this.sttv.timerTickSize = this.slider.value;
    }
  }
  // slider end
}


//
/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
id: string;
name: string;
progress: string;
color: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
/** Stream that emits whenever the data has been modified. */
dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
get data(): UserData[] { return this.dataChange.value; }

constructor() {

  // this.listenFunc = renderer.listen(elementRef.nativeElement, 'click', (event) => {
  //   event.preventDefault();
  //   let target = event.target || event.srcElement || event.currentTarget;
  //   console.log(target);

  // });

  // Fill up the database with 100 users.
  for (let i = 0; i < 100; i++) { this.addUser(); }
}

/** Adds a new user to the database. */
addUser() {
  const copiedData = this.data.slice();
  copiedData.push(this.createNewUser());
  //console.log(copiedData);
  this.dataChange.next(copiedData);
}

/** Builds and returns a new User. */
private createNewUser() {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: (this.data.length + 1).toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
}

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class ExampleDataSource extends DataSource<any> {
_filterChange = new BehaviorSubject('');
get filter(): string { return this._filterChange.value; }
set filter(filter: string) { this._filterChange.next(filter); }

constructor(private _exampleDatabase: ExampleDatabase) {
  super();
}

/** Connect function called by the table to retrieve one stream containing the data to render. */
connect(): Observable<UserData[]> {
  const displayDataChanges = [
    this._exampleDatabase.dataChange,
    this._filterChange,
  ];

  return Observable.merge(...displayDataChanges).map(() => {
    return this._exampleDatabase.data.slice().filter((item: UserData) => {
      let searchStr = (item.name + item.color).toLowerCase();
      return searchStr.indexOf(this.filter.toLowerCase()) != -1;
    });
  });
}

disconnect() {}
}
