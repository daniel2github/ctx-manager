import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'ctx-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome to Context Manager!'

  constructor() { }

  ngOnInit() {
  }

}
