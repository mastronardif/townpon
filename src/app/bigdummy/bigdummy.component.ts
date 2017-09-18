import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import {single, multi} from './data';
@Component({
  selector: 'app-bigdummy',
  templateUrl: './bigdummy.component.html',
  styleUrls: ['./bigdummy.component.css']
})
export class BigdummyComponent implements OnInit {

  single: any[];
  multi: any[];
  
  view: any[] = [480, 130]//[700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private data: DataService) {
    Object.assign(this, {single, multi})   
   }

  ngOnInit() {
    console.log("bigdummy:ngOnInit() ", this.data.mySession);
    //console.log("bigdummy:ngOnInit() ", this.data.get('single2'));
  }

  onSelect(event) {
    console.log(event);
  }
  
}
