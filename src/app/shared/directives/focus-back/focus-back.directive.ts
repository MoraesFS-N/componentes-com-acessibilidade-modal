import { OnDestroy, OnInit } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: '[appFocusBack]'
})

export class FocusBackDirective implements OnInit, OnDestroy{

  private lastFocusedElement: Element;

  public ngOnInit(): void {

    this.lastFocusedElement = document.activeElement;
  }

  public ngOnDestroy(): void {

    if (this.lastFocusedElement) {

      (this.lastFocusedElement as HTMLElement).focus();
    }
  }

}
