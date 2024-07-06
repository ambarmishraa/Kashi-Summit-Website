import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-itenerary',
  templateUrl: './itenerary.component.html',
  styleUrl: './itenerary.component.scss',
  animations: [
    trigger('rotateCard', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(-20deg)' })),
      transition('default <=> rotated', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class IteneraryComponent {
  cards = [
    { image: 'assets/itenary/Rectangle 41.svg' },
    { image: 'assets/itenary/Rectangle 42.svg' },
    { image: 'assets/itenary/party1.svg' },
    { image: 'assets/itenary/Rectangle 41.svg' },
    { image: 'assets/itenary/Rectangle 42.svg' },
    { image: 'assets/itenary/party1.svg' }
  ];
  cardState = 'default';

  rotateCard() {
    this.cardState = this.cardState === 'default' ? 'rotated' : 'default';
  }

}
