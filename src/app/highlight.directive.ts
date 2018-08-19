import { Directive ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
      this.highlight("highlight");
    }
    @HostListener("mouseleave") onMouseLeave() {
      this.highlight(null);
    }
    private highlight(highlight: string){
      this.elem.nativeElement.style.backgroundColor='grey';
    }
  }
