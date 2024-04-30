import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigianoComponent } from './artigiano.component';

describe('ArtigianoComponent', () => {
  let component: ArtigianoComponent;
  let fixture: ComponentFixture<ArtigianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigianoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtigianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
