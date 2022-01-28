import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public cards:any = [];
  public move_bottom:string = "";

  constructor() { 
    const types = ['oro', 'copa', 'basto', 'espada'];
    for(var i = 0; i < types.length; i++){
      for(var n = 0; n < 12; n++){
        if(n >= 7 && n <=8){
          continue;
        }
        this.cards.push({
          number: n+1,
          type: types[i]
        });
      }
    }
  }

  click_card1(){
    this.move_bottom = "move-boot";
  }

  ngOnInit(): void {
  }

}
