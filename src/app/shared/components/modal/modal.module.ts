import { ModalComponent } from './modal.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalService } from './services/modal.service';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';
import { FocusBackModule } from '../../directives/focus-back/focus-back.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusTrapModule, FocusBackModule],
  exports: [ModalComponent],
  providers: [ModalService]
})

export class ModalModule{

}
