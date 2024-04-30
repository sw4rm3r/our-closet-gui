import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreazioneCapoModalComponent} from "../../components/modals/creazione-capo-modal/creazione-capo-modal.component";
import {
  CreazioneCollezioneModalComponent
} from "../../components/modals/creazione-collezione-modal/creazione-collezione-modal.component";
import {CreazioneQrModalComponent} from "../../components/modals/creazione-qr-modal/creazione-qr-modal.component";

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
export class ArtigianoComponent {

  constructor(private modalService: NgbModal) {
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
  collezioni = [
    {
      nome: 'Collezione autunno/inverno',
      data_creazione: '12/01/2024',
      id: 1,
      capi: [{
        nome: 'Maglietta Gucci',
        img: 'https://images.stockx.com/images/Gucci-Gucci-Blade-Print-T-shirt-Black-Red-White.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1638285845&q=60',
        id: '0001'
      }, {
        nome: 'Giacca gucci',
        img: 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/1d/P00613431.jpg',
        id: '0002'
      }]
    },
    {
      nome: 'Collezione primavera/estate',
      data_creazione: '13/01/2024',
      id: 2,
      capi: [{
        nome: 'Maglietta D&G',
        img: 'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw72e0ef60/images/zoom/G8OA3TFU7EQ_N0000_0.jpg?sw=740&sh=944',
        id: '0003'
      },
      {
        nome: 'Giacca D&G',
        img: 'https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw72e0ef60/images/zoom/G8OA3TFU7EQ_N0000_0.jpg?sw=740&sh=944',
        id: '0004'
      }
      ]
    }
  ]

  openCreaCapoModal() {
    const modalRef = this.modalService.open(CreazioneCapoModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  openCreaCollezioneModal() {
    const modalRef = this.modalService.open(CreazioneCollezioneModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
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
