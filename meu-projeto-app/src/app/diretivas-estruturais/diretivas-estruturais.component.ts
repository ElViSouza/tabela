import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade:number}> = [
    { nome: "Daner Troquatte", idade: 29},
    { nome: "paulo", idade:24},
    { nome: "jhon", idade:53}
  ]
  
  public nome: string = 'dener';
  constructor() { }

  
  ngOnInit(): void {

    setInterval(  ()=>{
      if (this.condition){
        this.condition = false;
      } else{
      this.condition = true;
    }
}, 2000)
  }

  public onClick() {
    if (this.conditionClick){
      this.conditionClick = false;
    } else{ 
    this.conditionClick = true;
  }
  }
  public onClickAddList(){
this.list.push({ nome: "nay", idade: 31});

  }

public onEventList(event:number){
 
  this.list.splice(event, 12)
}  
}

 