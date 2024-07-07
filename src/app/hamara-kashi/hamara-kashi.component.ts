import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hamara-kashi',
  templateUrl: './hamara-kashi.component.html',
  styleUrl: './hamara-kashi.component.scss'
})
export class HamaraKashiComponent {
img1='img1'
img2='img2'
img3='img3'
img4='img4'
reset(){
  this.img1='img1'
this.img2='img2'
this.img3='img3'
this.img4='img4'
}
open(event: string) {
  this.reset()
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

@HostListener('window:scroll', ['$event'])
onScroll(event: Event) {
  // this.reset()
}
}
