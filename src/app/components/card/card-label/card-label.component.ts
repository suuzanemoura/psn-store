import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['../../../../scss/main.scss']
})
export class CardLabelComponent {
  @Input() cardLabel:string = '';
}
