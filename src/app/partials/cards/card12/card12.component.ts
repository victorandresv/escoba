import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card12',
  templateUrl: './card12.component.html',
  styleUrls: ['./card12.component.css']
})
export class Card12Component implements OnInit {

  @Input() type:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
