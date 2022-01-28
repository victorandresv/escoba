import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.css']
})
export class Card5Component implements OnInit {

  @Input() type:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
