import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-bigdummy',
  templateUrl: './bigdummy.component.html',
  styleUrls: ['./bigdummy.component.css']
})
export class BigdummyComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log("bigdummy:ngOnInit() ", this.data.mySession);
    //console.log("bigdummy:ngOnInit() ", this.data.get('single2'));
  }

}
