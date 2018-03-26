import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private element:ElementRef) {
  }

  @HostListener('click') mouseclick(eventData:Event){
    this.element.nativeElement.classList.toggle('open');
  }


}
