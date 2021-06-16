import { AfterViewInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalRef } from './shared/components/models/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';

  public modalRef: ModalRef;
  public form: FormGroup;

  constructor( private modalService: ModalService,
               private formbuilder: FormBuilder   ) { }

  ngOnInit(): void {

    this.form = this.formbuilder.group({
      firstName:[ 'Moraes', Validators.required],
      surName: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  public show(): void {

      this.modalRef = this.modalService.open({
        templateRef: this.modalTemplateRef,
        title: 'User Details'
      });
  }

  public submit(): void{

    if (this.form.invalid) {
      return ;
    }

    console.log(this.form.value);
    this.modalRef.close();
  }
}
