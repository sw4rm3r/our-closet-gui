import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-creazione-collezione-modal',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './creazione-collezione-modal.component.html',
  styleUrl: './creazione-collezione-modal.component.scss'
})
export class CreazioneCollezioneModalComponent {
  constructor(public activeModal: NgbActiveModal) {
  }
  collezione = {
    nome: '',
  }

  passBack() {
    this.activeModal.close(this.collezione);
  }

}
