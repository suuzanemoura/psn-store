import { Component, inject } from '@angular/core';
import { GameStoreService } from 'src/app/game-store.service';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent {
  gameStoreServive: GameStoreService = inject(GameStoreService);

  constructor(){
  }
  
  filterResults(filter:NgForm) {
    if (!filter.value.search) {
      window.alert("Busca vazia. Tente novamente.")
    }else{
      this.gameStoreServive.goToSearchPage(filter.value.search)
      filter.reset()
    }
  }
}
