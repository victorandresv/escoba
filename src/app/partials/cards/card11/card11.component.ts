import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card11',
  templateUrl: './card11.component.html',
  styleUrls: ['./card11.component.css']
})
export class Card11Component implements OnInit {

  @Input() type:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
