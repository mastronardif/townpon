import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storedashboard',
  templateUrl: './storedashboard.component.html',
  styleUrls: ['./storedashboard.component.css']
})
export class StoredashboardComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', stuff: "XXX"},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  strNums:string = "wtf asdf ewr ";
  nums:string[];// = [1,2,3,45];

  tiles1 = this.wtf();
  tilesJson = JSON.stringify(this.tiles1, null, 2);
  constructor() { }

  ngOnInit() {
  }

  wtf() {
    
        return [{"icon":"avatar:svg-1","title":"Svg-1","background":"red","span":{"row":2,"col":2}},{"icon":"avatar:svg-2","title":"Svg-2","background":"green","span":{"row":1,"col":1}},{"icon":"avatar:svg-3","title":"Svg-3","background":"darkBlue","span":{"row":1,"col":1}},{"icon":"avatar:svg-4","title":"Svg-4","background":"blue","span":{"row":1,"col":2}},{"icon":"avatar:svg-5","title":"Svg-5","background":"yellow","span":{"row":2,"col":2}},{"icon":"avatar:svg-6","title":"Svg-6","background":"pink","span":{"row":1,"col":1}},{"icon":"avatar:svg-7","title":"Svg-7","background":"darkBlue","span":{"row":1,"col":1}},{"icon":"avatar:svg-8","title":"Svg-8","background":"purple","span":{"row":1,"col":1}},{"icon":"avatar:svg-9","title":"Svg-9","background":"deepBlue","span":{"row":1,"col":1}},{"icon":"avatar:svg-10","title":"Svg-10","background":"lightPurple","span":{"row":1,"col":1}
          },{"icon":"avatar:svg-11","title":"Svg-11","background":"yellow","span":{"row":1,"col":1}}];
      }

}
