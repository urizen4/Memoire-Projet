import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SENELECComponent } from './senelec.component';

describe('SENELECComponent', () => {
  let component: SENELECComponent;
  let fixture: ComponentFixture<SENELECComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SENELECComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SENELECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
