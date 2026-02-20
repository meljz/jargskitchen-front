import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSlideInOnScroll]',
  standalone: true
})
export class SlideInOnScrollDirective {
  @Input() animationClass = 'slide-in-bottom';
  private hasAnimated = false; // ✅ prevents re-triggering

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.hasAnimated) return; // ✅ skip if already animated

    const position = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      this.renderer.addClass(this.el.nativeElement, this.animationClass);
      this.hasAnimated = true; // ✅ mark as done
    }
  }
}
