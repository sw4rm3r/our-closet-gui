import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreazioneCapoModalComponent} from "../../components/modals/creazione-capo-modal/creazione-capo-modal.component";
import {
  CreazioneCollezioneModalComponent
} from "../../components/modals/creazione-collezione-modal/creazione-collezione-modal.component";
import {CreazioneQrModalComponent} from "../../components/modals/creazione-qr-modal/creazione-qr-modal.component";
import {CollectionsService} from "../../services/collections.service";
import {ModelService} from "../../services/model.service";
import {catchError, of, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-artigiano',
  standalone: true,
  imports: [
    NgForOf,
    CanvasJSAngularChartsModule
  ],
  templateUrl: './artigiano.component.html',
  styleUrl: './artigiano.component.scss'
})
export class ArtigianoComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private collectionService: CollectionsService,
              private modelService: ModelService) {
  }

  ngOnInit(): void {
    this.getCollezioni().subscribe();
  }

  getCollezioni() {
    return this.collectionService.getUserCollections().pipe(
      tap(response => this.collezioni = response),
      catchError(err => {
        console.error(err);
        return of(err);
      })
    )
  }

  slides = [
    {nome: "Maglietta Gucci", rank: '1', soldQuantity: '2203', img: "https://images.stockx.com/images/Gucci-Gucci-Blade-Print-T-shirt-Black-Red-White.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1638285845&q=60", descrizione: 'Test'},
    {nome: "Maglietta D&G", rank: '2', soldQuantity: '212', img: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw72e0ef60/images/zoom/G8OA3TFU7EQ_N0000_0.jpg?sw=740&sh=944", descrizione: 'Test'},
    {nome: "Giacca gucci", rank: '3', soldQuantity: '121', img: "https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/1d/P00613431.jpg", descrizione: 'Test'}
  ];
  chartOptions = {
    theme: "dark2",
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Grafico vendite"
    },
    axisY: {
      labelFormatter: (e: any) => {
        console.log(e);
        return e.value;
      }
    },
    data: [{
      type: "line",
      xValueFormatString: "YYYY",
      yValueFormatString: "Vendite: #,###.##",
      dataPoints: [
        { x: new Date(2020, 0, 1), y: 10 },
        { x: new Date(2021, 0, 1), y: 8 },
        { x: new Date(2022, 0, 1), y: 16 },
        { x: new Date(2023, 0, 1), y: 42 },
        { x: new Date(2024, 0, 1), y: 35 },
      ]
    }]
  }
  lineChartOptions:any = {
    responsive: true
  };
  collezioni: any[] = []

  openCreaCapoModal(idCollezione: number) {
    const modalRef = this.modalService.open(CreazioneCapoModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        this.modelService.createModel({nomemodello: result.nome, imgurl: result.img, collezione: {id: idCollezione} }).pipe(
          switchMap(() => this.getCollezioni()),
          catchError(err => {
            console.error(err);
            return of(err);
          })
        ).subscribe()
      }
    });
  }

  openCreaCollezioneModal() {
    const modalRef = this.modalService.open(CreazioneCollezioneModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        this.collectionService.createCollection({nomeCollezione: result.nome, luogoCreazione: 'Roma', dataCreazione: new Date().toISOString()}).pipe(
          switchMap(() => this.getCollezioni()),
          catchError(err => {
            console.error(err);
            return of(err);
          })
        ).subscribe()
      }
    });
  }

  openGestioneQrModal(capo: any) {
    const modalRef = this.modalService.open(CreazioneQrModalComponent);
    modalRef.componentInstance.capo = capo;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

}
