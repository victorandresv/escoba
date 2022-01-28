import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.css']
})
export class Card6Component implements OnInit {

  @Input() type:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
