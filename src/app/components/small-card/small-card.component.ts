import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  // propriedades
  @Input()
  photoCover: string = "";
  
  @Input()
  cardTitle: string = "";

  // passo 1: criar a propriedade
  // passo 2: adiconar [routerLink]="['content', id]" no html
  // passo 3: adicionar o id="1" no html(home)
  @Input()
  id: string = "0";

  constructor() {

  }

}
