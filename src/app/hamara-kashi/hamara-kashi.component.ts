import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hamara-kashi',
  templateUrl: './hamara-kashi.component.html',
  styleUrl: './hamara-kashi.component.scss',
})
export class HamaraKashiComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  img1 = 'img1';
  img2 = 'img2';
  img3 = 'img3';
  img4 = 'img4';
  reset() {
    this.img1 = 'img1';
    this.img2 = 'img2';
    this.img3 = 'img3';
    this.img4 = 'img4';
  }
  open(event: string) {
    this.reset();
    // switch(event) {
    //   case 'img1':
    //     this.img1 = 'openImg';
    //     break;
    //   case 'img2':
    //     this.img2 = 'openImg';
    //     break;
    //   case 'img3':
    //     this.img3 = 'openImg';
    //     break;
    //   case 'img4':
    //     this.img4 = 'openImg';
    //     break;
    // }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isInViewport()) {
      const images = document.querySelectorAll('.banners img');
      images.forEach((img: any) => {
        this.renderer.removeClass(img, 'slide-top');

        setTimeout(() => {
          this.renderer.addClass(img, 'slide-top');
        }, 100);
      });
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  isInViewport(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
