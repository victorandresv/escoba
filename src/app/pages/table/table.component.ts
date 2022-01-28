import { Component, OnInit } from '@angular/core';
import { Baraja } from 'src/app/libs/baraja.js';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public cards:Card[] = [];
  public cardsremain:Card[] = [];

  public table_left_up_card:Card;
  public table_right_up_card:Card;
  public table_left_down_card:Card;
  public table_right_down_card:Card;
  public current_card:Card;

  public table_card_me_1:Card;
  public table_card_me_2:Card;
  public table_card_me_3:Card;

  constructor() { 
    const baraja = new Baraja();
    baraja.Riffle();
    this.cardsremain = baraja.GetRemainCards();

    /*
    baraja.Riffle();
    let cards:any = baraja.GetFour();

    this.table_left_up_card = cards[0][0];
    this.table_right_up_card = cards[1][0];
    this.table_left_down_card = cards[2][0];
    this.table_right_down_card = cards[3][0];
    */

    /*
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
    */
  }

  click_card1(){
    
  }

  ngOnInit(): void {
  }

}
