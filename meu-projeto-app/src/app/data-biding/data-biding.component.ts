import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "daner";
  public idade: number = 29;

  constructor() { }

  ngOnInit(): void {}

public alertaInfo(valor: string) {
  alert(valor)
}

}