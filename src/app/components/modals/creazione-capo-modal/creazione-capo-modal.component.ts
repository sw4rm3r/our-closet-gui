import {Component, EventEmitter, Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-creazione-capo-modal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './creazione-capo-modal.component.html',
  styleUrl: './creazione-capo-modal.component.scss'
})
export class CreazioneCapoModalComponent {
  capo = {
    nome: '',
    descrizione: '',
    img: '',
    prezzo: ''
  }
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {
  }

  passBack() {
    this.passEntry.emit(this.capo);
    this.activeModal.close(this.capo);
  }

}
