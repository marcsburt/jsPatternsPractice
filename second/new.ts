import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "welcome",
  templateUrl: "welcome.component.html"
})
export class WelcomeComponent implements OnInit {
  @Input() name: "string";
  constructor() {}

  ngOnInit() {}
}
