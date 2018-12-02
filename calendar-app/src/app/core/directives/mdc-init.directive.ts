import { Directive, ElementRef, AfterViewInit, EventEmitter, Output } from '@angular/core';
import * as mdc from 'material-components-web';

@Directive({
  selector: '[appMdcInit]',
})
export class MdcInitDirective implements AfterViewInit {
  @Output()
  initElement: EventEmitter<any> = new EventEmitter();
  constructor(private content: ElementRef) {}

  ngAfterViewInit() {
    const classList: DOMTokenList = this.content.nativeElement.classList;
    let el;
    switch (true) {
      case classList.contains('mdc-text-field'):
        if (
          this.content.nativeElement.children[0].value !== 'undefined' &&
          this.content.nativeElement.children[0].value
        ) {
          this.content.nativeElement.children[1].classList.add('cd-suppress-animation');
          this.content.nativeElement.children[1].classList.add('mdc-floating-label--float-above');
          setTimeout(() => {
            this.content.nativeElement.children[1].classList.remove('cd-suppress-animation');
          }, 2);
        }
        el = new mdc.textField.MDCTextField(this.content.nativeElement);
        break;
      case classList.contains('mdc-switch'):
        el = new mdc.switchControl.MDCSwitch(this.content.nativeElement);
        break;
      case classList.contains('mdc-select'):
        el = new mdc.select.MDCSelect(this.content.nativeElement);
        break;
      case classList.contains('mdc-dialog'):
        el = new mdc.dialog.MDCDialog(this.content.nativeElement);
        break;
      case classList.contains('mdc-top-app-bar'):
        el = new mdc.topAppBar.MDCTopAppBar(this.content.nativeElement);
        break;
      case classList.contains('mdc-drawer'):
        el = new mdc.drawer.MDCDrawer(this.content.nativeElement);
        break;
      default:
        console.log('Todo add element', classList);
        break;
    }
    this.initElement.emit(el);
  }
}
