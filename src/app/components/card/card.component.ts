import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../../scss/main.scss']
})
export class CardComponent {
  @Input() cardLabel:string = '';
  @Input() cardName:string = '';
  @Input() cardPhotoCover:string = '';
  @Input() cardPlataform:string = '';
  @Input() cardPrice:string = '';
  @Input() cardUrl:string = '';
}
