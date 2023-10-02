import { Component, inject, OnInit, AfterContentChecked } from '@angular/core';
import { game } from 'src/app/models/game';
import { GameStoreService } from 'src/app/game-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, AfterContentChecked {

  filteredGameList:game[] = []
  private search:string | null = ''
  private newSearch:string | null = ''
  private gameStoreServive: GameStoreService = inject(GameStoreService);

  constructor(
    private route:ActivatedRoute
  ){}

  setNameParams():void{
    this.route.paramMap.subscribe( value => {
      this.search = value.get("name"),
      this.newSearch = value.get("name")
    })
  }

  ngAfterContentChecked(): void {

    this.setValuesToComponent(this.newSearch)

    if(this.newSearch !== this.search){
      this.search = this.newSearch
      this.setValuesToComponent(this.search)
    }

  }

  ngOnInit(): void {
    this.setNameParams()
    this.setValuesToComponent(this.search)
  }

  setValuesToComponent(search:string | null){

    if(search === null){
      window.alert("Busca vazia. Digite pelo menos 1 caractere e tente novamente.")
    } else{
      this.filteredGameList = this.gameStoreServive.getGameByName(search)
    }
    
  }
  
}
