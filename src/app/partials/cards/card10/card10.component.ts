import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card10',
  templateUrl: './card10.component.html',
  styleUrls: ['./card10.component.css']
})
export class Card10Component implements OnInit {

  @Input() type:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
