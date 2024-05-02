import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgClass, NgForOf} from "@angular/common";
import {NgxQrcodeStylingModule} from "ngx-qrcode-styling";
import {ClosetService} from "../../../services/closet.service";
import {catchError, of, switchMap, tap} from "rxjs";

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
export class CreazioneQrModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private cardService: ClosetService) {
  }
  qrconfig: any = {
    width: 150,
    height: 150,
    margin: 20,
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
  };
  carte: any = []
  @Input() capo: any;

  ngOnInit(): void {
    this.getCardsByModel().subscribe();
  }

  getCardsByModel() {
    return this.cardService.getCardsByModel(this.capo.idmodello).pipe(
      tap((cards: any[]) => {
        this.carte = cards;
      })
    );
  }

  print(carta: any): void {
    carta.toPrint = true;
    setTimeout(() => {
      window.print();
      carta.toPrint = false;
    }, 1);

  }

  addQr() {
    const payload = {
      modello: {
        idmodello: this.capo.idmodello
      }
    }
      this.cardService.creaCarta(payload).pipe(
        switchMap((res) => {
          return this.getCardsByModel()
        }),
        catchError(err => {
          console.error(err);
          return of(err);
        })
      ).subscribe(() => this.getCardsByModel().subscribe());
  }
}
