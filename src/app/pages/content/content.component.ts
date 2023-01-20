import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  // propriedades
  photoCover: string = "";
  titleContent: string = "";
  descriptionContent: string = "";
  private id: string | null = "0";

  // busca dinamicamente no banco de dados 'data'.
  constructor(
    private route: ActivatedRoute
  ) { }
  
  // quando for iniciado, captura o parâmetro que voltou do request, 
  // ou seja, da rota, no caso, o 'id' e converte em Json.
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      // console.log(value.get("id")) 
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id) [0]
    // console.log(result) 
    this.titleContent = result.title;
    this.descriptionContent = result.description;
    this.photoCover = result.photoCover;
  }
}
