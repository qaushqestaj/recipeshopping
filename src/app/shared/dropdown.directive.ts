import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') toggle: boolean = false;

  @HostListener('document:click', ['$event']) toggleClicked(eventData: Event) {
    this.toggle = this.elRef.nativeElement.contains(eventData.target)
      ? !this.toggle
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
