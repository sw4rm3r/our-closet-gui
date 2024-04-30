import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneCapoModalComponent } from './creazione-capo-modal.component';

describe('CreazioneCapoModalComponent', () => {
  let component: CreazioneCapoModalComponent;
  let fixture: ComponentFixture<CreazioneCapoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreazioneCapoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreazioneCapoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
