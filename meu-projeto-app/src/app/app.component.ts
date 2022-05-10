import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roc-root',
  template:`
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

<!-- <app-data-biding></app-data-biding>  -->
<!-- <app-diretivas-atributos>
  <h1>Aulas e diretivas de Atributos</h1>
  <h3>final da aula</h3>
</app-diretivas-atributos>
<app-diretivas-atributos>
  <h1>dener</h1>
  <h3>final da </h3>
</app-diretivas-atributos>
  <router-outlet></router-outlet>
   <app-diretivas-atributos></app-diretivas-atributos> -->
   <!-- <app-new-component></app-new-component> -->

  <!-- <app-input [contador]="addValue"></app-input>
     <br>
    <button (click)="add()"> ADD</button> -->

     <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
      
    <app-output (enviarDados)="setDados($event)"></app-output> 
<roc-meu-propio></roc-meu-propio>
   <router-outlet></router-outlet>
  `
})
export class AppComponent  implements OnInit {

  public add(){
    this.addValue += 1;
  }

  public destruir: boolean = true;
  public addValue: number = 10;

  public getDados: {nome: string, idade: number}  | undefined;
  constructor() {
}

   ngOnInit(): void {}    

  
    public setDados(event: {nome: string, idade: number}) {
      this.getDados = event;
    }
    }
 
