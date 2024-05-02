import {Component, OnInit, ViewChild} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SlickCarouselModule} from "ngx-slick-carousel";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {
  NgxScannerQrcodeComponent,
  NgxScannerQrcodeModule,
  ScannerQRCodeConfig,
  ScannerQRCodeResult
} from "ngx-scanner-qrcode";
import {ClosetService} from "../../services/closet.service";
import {tap} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ShowCardModalComponent} from "../../components/modals/show-card-modal/show-card-modal.component";

@Component({
  selector: 'app-closet',
  standalone: true,
  imports: [
    NgForOf, SlickCarouselModule, NavbarComponent, NgxScannerQrcodeModule, NgClass, NgIf
  ],
  templateUrl: './closet.component.html',
  styleUrl: './closet.component.scss'
})
export class ClosetComponent implements OnInit {
  test = false;
  cardToAdd: string | undefined;
  slides = [
    {nome: "Maglietta Gucci", img: "https://images.stockx.com/images/Gucci-Gucci-Blade-Print-T-shirt-Black-Red-White.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1638285845&q=60", descrizione: 'Test'},
    {nome: "Maglietta Ferragamo", img: "https://www.tizianafausti.com/media/catalog/product/cache/9fdd47f660230e6c661f6112097a21ff/-/f/-ferragamo-ferragamo-t-shirt-tizianafausti-122303-002hnewnavywhite.jpg", descrizione: 'Test'},
    {nome: "Maglietta D&G", img: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw72e0ef60/images/zoom/G8OA3TFU7EQ_N0000_0.jpg?sw=740&sh=944", descrizione: 'Test'},
    {nome: "Giacca gucci", img: "https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/1d/P00613431.jpg", descrizione: 'Test'}
  ];
  @ViewChild('action') action!: NgxScannerQrcodeComponent;
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
      audio: false
    },
  };
  showQr = false;

  constructor(private closetService: ClosetService, private modalService: NgbModal) {
  }

  closet: any[] = [];
  modelloSelezionato: any;

  ngOnInit() {
    this.closetService.getUserCloset().pipe(
      tap((closet: any) => {
        this.closet = closet;
      })
    ).subscribe()
  }

  onQrRead($event: ScannerQRCodeResult[]) {
    if($event && $event[0] && $event[0].value) {
      this.showQr = false;
      this.cardToAdd = $event[0].value;
      this.closetService.getCardById(parseInt(this.cardToAdd)).pipe(
        tap((card: any) => {
          console.log('carta trovata!!!', card)
          const modalRef = this.modalService.open(ShowCardModalComponent);
          modalRef.componentInstance.modello = card.modello;
          modalRef.result.then((result) => {
            if (result) {
              console.log(result);
            }
          });
        })
      ).subscribe()
    }

  }

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  openCamera() {
    this.showQr = true;
    window.scrollTo(0, 0);
    setTimeout(() => { this.handle(this.action, 'start') }, 100);
  }

  selezionaModello(modello: any) {
    this.modelloSelezionato = modello;
  }
}
