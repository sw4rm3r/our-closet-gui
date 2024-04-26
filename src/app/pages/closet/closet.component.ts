import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-closet',
  standalone: true,
  imports: [
    NgForOf, SlickCarouselModule
  ],
  templateUrl: './closet.component.html',
  styleUrl: './closet.component.scss'
})
export class ClosetComponent {
  slides = [
    {nome: "Maglietta Gucci", img: "https://images.stockx.com/images/Gucci-Gucci-Blade-Print-T-shirt-Black-Red-White.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1638285845&q=60", descrizione: 'Test'},
    {nome: "Maglietta Ferragamo", img: "https://www.tizianafausti.com/media/catalog/product/cache/9fdd47f660230e6c661f6112097a21ff/-/f/-ferragamo-ferragamo-t-shirt-tizianafausti-122303-002hnewnavywhite.jpg", descrizione: 'Test'},
    {nome: "Maglietta D&G", img: "https://www.dolcegabbana.com/dw/image/v2/BKDB_PRD/on/demandware.static/-/Sites-15/default/dw72e0ef60/images/zoom/G8OA3TFU7EQ_N0000_0.jpg?sw=740&sh=944", descrizione: 'Test'},
    {nome: "Giacca gucci", img: "https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/1d/P00613431.jpg", descrizione: 'Test'}
  ];
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

}
