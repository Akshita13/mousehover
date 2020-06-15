import { Directive,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {
  ishovering
  constructor(private elRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.elRef.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elRef.nativeElement.style.color = '';
  }
}