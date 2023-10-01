import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html'
})
export class CardPricingComponent {
  @Input() cardName:string = '';
  @Input() cardPlataform:string = '';
  @Input() cardPrice:string = '';
}
