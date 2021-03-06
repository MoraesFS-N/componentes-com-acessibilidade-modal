import { ComponentRef } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";

export class ModalRef {

  constructor( private componentRef: ComponentRef<ModalComponent>){}

  public close(): void{

    this.componentRef.destroy();
    console.log('close called');
  }
}
