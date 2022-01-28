import { Card } from "../models/card";

export class Baraja {

    naipes:Card[] = [];
    barajados:Card[] = [];

    constructor() {
        this.Build();
    }


    Build() {
        const types = ["oro", "basto", "copa", "espada"];
        const number = ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"];
        const values = [1,2,3,4,5,6,7,8,9,10];
    
        for (let n = 0; n < types.length; n++) {
            for (let i = 0; i < number.length; i++) {
                this.naipes.push({
                    number: number[i],
                    type: types[n],
                    value: values[i]
                });
            }
        }
        return this.naipes;
    }

    Riffle() {

        let search = true;
        const total_naipes = this.naipes.length;
        
        while (search) {
            let index_naipe = Math.floor(Math.random() * (39 - 0));
            
            let naipe = this.naipes.splice(index_naipe, 1);
            if(typeof naipe[0] != "undefined") {
                this.barajados.push(naipe[0]);
            }

            if(this.barajados.length == total_naipes) {
                search = false;
            }
        }

    }

    GetRemainCards(){
        return this.barajados;
    }

    GetFour(){
        const table = [];
        for(let n = 0; n < this.barajados.length; n++){
            if(table.length < 4){
                table.push(this.barajados.splice(n, 1));
            } 
        }
        return table;
    }

    FirstDeal(number:any) {
        this.Riffle();
        const table = [];
        const players:any = [];

        for(let i = 0; i < number; i++){
            players[i] = [];
        }
        
        for(let n = 0; n < this.barajados.length; n++){
            if(table.length < 4){
                table.push(this.barajados.splice(n, 1));
            } else {
                for(let i = 0; i < number; i++){
                    if(players[i].length < 3) {
                        players[i].push(this.barajados.splice(n, 1)[0]);
                    }
                }
            }
        }
        console.log(players);
        console.log(table);
        console.log(this.barajados.length);

    }



    IsEscoba(data:any){
        let sum = 0;
        for(let n = 0; n < data.length; n++){
            sum += data[n].value;
        }
        if(sum == 15){
            return true;
        } else {
            return false;
        }
    }
    
}
