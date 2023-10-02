import { Component, ViewChild, inject } from '@angular/core';
import { GameStoreService } from 'src/app/game-store.service';
import { NgForm } from '@angular/forms'
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent {
  gameStoreServive: GameStoreService = inject(GameStoreService);

  @ViewChild('errorSwal')
  public readonly errorSwal!: SwalComponent;

  constructor(){
  }
  
  filterResults(filter:NgForm) {
    if (!filter.value.search) {
      this.errorSwal.fire()
    }else{
      this.gameStoreServive.goToSearchPage(filter.value.search)
      filter.reset()
    }
  }
}
