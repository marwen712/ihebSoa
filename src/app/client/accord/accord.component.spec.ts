import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordComponent } from './accord.component';

describe('AccordComponent', () => {
  let component: AccordComponent;
  let fixture: ComponentFixture<AccordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
