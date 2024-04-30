import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneCollezioneModalComponent } from './creazione-collezione-modal.component';

describe('CreazioneCollezioneModalComponent', () => {
  let component: CreazioneCollezioneModalComponent;
  let fixture: ComponentFixture<CreazioneCollezioneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreazioneCollezioneModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreazioneCollezioneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
