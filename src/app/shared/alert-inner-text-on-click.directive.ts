import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlertInnerTextOnClick]',
  standalone: true
})
export class AlertInnerTextOnClickDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  onClick() {
    let text = this.el.nativeElement.innerText;
    alert(text);
  }
}
