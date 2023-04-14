import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConslutationComponent } from './form-conslutation.component';

describe('FormConslutationComponent', () => {
  let component: FormConslutationComponent;
  let fixture: ComponentFixture<FormConslutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConslutationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConslutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
