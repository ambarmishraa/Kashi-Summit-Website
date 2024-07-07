import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.cards.forEach(card => {
      card.nativeElement.addEventListener('mouseover', () => {
        card.nativeElement.style.zIndex = '10';
      });

      card.nativeElement.addEventListener('mouseout', () => {
        card.nativeElement.style.zIndex = '1';
      });
    });
  }
}
