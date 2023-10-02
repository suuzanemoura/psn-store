import { Component, Input } from '@angular/core';
import { game } from 'src/app/models/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() game:game = { id: '', name: '', label: '', plataforms: '', photoCover: '', price: '', url: '' };
}
