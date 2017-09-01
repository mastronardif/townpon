import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  adminTown(event) {
    var elementId = event.currentTarget.id;
    alert(`Admin(${elementId}) Town coming to a theater near you.`);
  }
}
