import { Component, inject } from '@angular/core';
import { game } from 'src/app/models/game';
import { GameStoreService } from 'src/app/game-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{

  gameList:game[] = [];
  gameStoreServive: GameStoreService = inject(GameStoreService);

  constructor(){
    this.gameList = this.gameStoreServive.getAllGames()
  }
}
