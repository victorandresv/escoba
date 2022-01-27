import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frontcard',
  templateUrl: './frontcard.component.html',
  styleUrls: ['./frontcard.component.css']
})
export class FrontcardComponent implements OnInit {

  @Input() number: string = "1";
  @Input() type: string = "oro";

  constructor() { }

  ngOnInit(): void {
  }

  


}
