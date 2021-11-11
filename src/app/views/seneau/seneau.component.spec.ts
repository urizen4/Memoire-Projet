import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SENEAUComponent } from './seneau.component';

describe('SENEAUComponent', () => {
  let component: SENEAUComponent;
  let fixture: ComponentFixture<SENEAUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SENEAUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SENEAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
