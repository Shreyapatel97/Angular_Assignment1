import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appProgressBar]',
})
export class ProgressBarDirective implements OnInit {
  @Input('appProgressBar') percentage!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setProgressBarWidth();
  }

  private setProgressBarWidth() {
    const width = this.percentage + '%';
    this.renderer.setStyle(this.el.nativeElement, 'width', width);
  }
}
