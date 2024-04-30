import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneQrModalComponent } from './creazione-qr-modal.component';

describe('CreazioneQrModalComponent', () => {
  let component: CreazioneQrModalComponent;
  let fixture: ComponentFixture<CreazioneQrModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreazioneQrModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreazioneQrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
