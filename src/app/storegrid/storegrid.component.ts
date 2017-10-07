import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storegrid',
  templateUrl: './storegrid.component.html',
  styleUrls: ['./storegrid.component.css']
})
export class StoregridComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', stuff: "XXX"},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  tiles00 = this.buildGridModel({
    icon : "avatar:svg-",
    title: "Svg-",
    background: ""
  });

  strNums:string = "wtf asdf ewr ";
  nums:string[];// = [1,2,3,45];

  tiles1 = this.wtf();
  tilesJson = JSON.stringify(this.tiles1, null, 2);
  //bobo = console.log("FFFFFFFFFFFF ", this.tiles1);

  constructor() { console.log('StoregridComponent:constructor'); 
                //console.log(this.tiles);
  }

  ngOnInit() {
  }

  buildGridModel(tileTmpl) {
    var it2, results = [ ];

    
    //console.log(` copy = ${JSON.stringify(it)}`);

    for (var j=0; j<11; j++) {
      let it = Object.assign({}, tileTmpl);
      //it = angular.extend({},tileTmpl);

      it.icon  = it.icon + (j+1);
      it.title = it.title + (j+1);
      it.span  = { row : 1, col : 1 };

      switch(j+1) {
        case 1:
          it.background = "red";
          it.span.row = it.span.col = 2;
          break;

        case 2: it.background = "green";         break;
        case 3: it.background = "darkBlue";      break;
        case 4:
          it.background = "blue";
          it.span.col = 2;
          break;

        case 5:
          it.background = "yellow";
          it.span.row = it.span.col = 2;
          break;

        case 6: it.background = "pink";          break;
        case 7: it.background = "darkBlue";      break;
        case 8: it.background = "purple";        break;
        case 9: it.background = "deepBlue";      break;
        case 10: it.background = "lightPurple";  break;
        case 11: it.background = "yellow";       break;
      }
      //console.log(it);

      results.push(it);
    }
    //console.log('results = ', results);
    return results;
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  randomize(nums:number []) {
    console.log(`nums = ${nums}`);
    //this.nums = [2,3,5, 7];
    //this.nums = this.strNums;
    let numbers = this.strNums.split(' ');

    console.log(`numbers = ${numbers}`);
    this.shuffle(numbers);
    console.log(`shuffle numbers = ${numbers}`);
    this.nums = numbers;
  }


  wtf() {

    return [{"icon":"avatar:svg-1","title":"Svg-1","background":"red","span":{"row":2,"col":2}},{"icon":"avatar:svg-2","title":"Svg-2","background":"green","span":{"row":1,"col":1}},{"icon":"avatar:svg-3","title":"Svg-3","background":"darkBlue","span":{"row":1,"col":1}},{"icon":"avatar:svg-4","title":"Svg-4","background":"blue","span":{"row":1,"col":2}},{"icon":"avatar:svg-5","title":"Svg-5","background":"yellow","span":{"row":2,"col":2}},{"icon":"avatar:svg-6","title":"Svg-6","background":"pink","span":{"row":1,"col":1}},{"icon":"avatar:svg-7","title":"Svg-7","background":"darkBlue","span":{"row":1,"col":1}},{"icon":"avatar:svg-8","title":"Svg-8","background":"purple","span":{"row":1,"col":1}},{"icon":"avatar:svg-9","title":"Svg-9","background":"deepBlue","span":{"row":1,"col":1}},{"icon":"avatar:svg-10","title":"Svg-10","background":"lightPurple","span":{"row":1,"col":1}
      },{"icon":"avatar:svg-11","title":"Svg-11","background":"yellow","span":{"row":1,"col":1}}];
  }
 
}



