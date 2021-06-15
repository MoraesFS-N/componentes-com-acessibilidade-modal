import { TemplateRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { ModalService, ModalRef } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  @ViewChild('template1') public template1: TemplateRef<any>;
  @ViewChild('template2') public template2: TemplateRef<any>;

  title = 'a11y-p2';

  public modalRef: ModalRef

  constructor( private modalService: ModalService ){ }

  public show(): void {
      this.modalRef = this.modalService.open({
        templateRef: this.modalTemplateRef,
        title: 'User Details'
      })
  }

}
