import { Injectable, TemplateRef } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";

@Injectable()

export class ModalService{

  public open(_config: ModalConfig): ModalRef{

    return new ModalRef();
  }
}

export class ModalRef {
  public close(): void{
    console.log('close called ')
  }
}
