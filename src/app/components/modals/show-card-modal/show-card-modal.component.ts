import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {NgxQrcodeStylingModule} from "ngx-qrcode-styling";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-show-card-modal',
  standalone: true,
    imports: [
        NgForOf,
        NgxQrcodeStylingModule
    ],
  templateUrl: './show-card-modal.component.html',
  styleUrl: './show-card-modal.component.scss'
})
export class ShowCardModalComponent {
  constructor(public activeModal: NgbActiveModal) {
  }

  @Input() modello: any;

}
