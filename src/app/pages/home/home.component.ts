import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';
import { card } from 'src/app/models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  cards:card[] = []

  ngOnInit(): void {
    data.map((datacard) => {this.cards.push({cardId: datacard.id, cardName: datacard.name, cardPhotoCover: datacard.photoCover, cardPrice: datacard.price, cardPlaform: datacard.plataforms, cardLabel: datacard.label, cardUrl: datacard.url})})
  }

}
