import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgClass, NgForOf} from "@angular/common";
import {NgxQrcodeStylingModule} from "ngx-qrcode-styling";

@Component({
  selector: 'app-creazione-qr-modal',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgxQrcodeStylingModule,
    NgClass
  ],
  templateUrl: './creazione-qr-modal.component.html',
  styleUrl: './creazione-qr-modal.component.scss'
})
export class CreazioneQrModalComponent {
  constructor(public activeModal: NgbActiveModal) {
  }
  qrconfig: any = {
    width: 150,
    height: 150,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/413px-1960s_Gucci_Logo.svg.png",
    margin: 5,
    dotsOptions: {
      color: "#000000",
      type: "dots"
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0
    }
  }
  carte: any = [
    {
      id: 1,
      owner_id: '0001',
      manufacturer_id: '0001',
      capo_id: '0001',
    },
    {
      id: 2,
      owner_id: '0001',
      manufacturer_id: '0001',
      capo_id: '0001',
    },
  ]
  @Input() capo: any;

  print(carta: any): void {
    carta.toPrint = true;
    setTimeout(() => {
      window.print();
      carta.toPrint = false;
    }, 1);

  }

  addQr() {
    this.carte.push({
      id: this.carte.length + 1,
      owner_id: '0001',
      manufacturer_id: '0001',
      capo_id: '0001',
    },)
  }
}
