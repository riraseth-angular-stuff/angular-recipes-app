import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
//   @HostBinding('class') open: string;
//   @HostListener('click') mouseClick() {
//     if (this.open === 'open') {
//       this.open = '';
//     } else {
//       this.open = 'open';
//     }
// }
//
// closes the one you clicked on
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
// }


  // closes when you click outside of a dropdown
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
    constructor(private  elRef: ElementRef) { }

}
