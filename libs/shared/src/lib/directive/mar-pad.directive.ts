import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[orgMarPad]',
})
export class MarPadDirective {
  @Input() appMarPad: any;
  padding = '10px';
  margin = '10px';
  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }
  ngOnInit(): void {
    if (this.appMarPad) {
      this.appMarPad = this.appMarPad.trim();
      let value = this.appMarPad.split(' ');
      if (value.length > 1) {
        this.margin = value[0];
        this.padding = value[1];
      } else {
        this.margin = value[0];
      }
    }

    this.render.setStyle(this.el.nativeElement, 'margin', this.margin);
    this.render.setStyle(this.el.nativeElement, 'padding', this.padding);
  }
}
