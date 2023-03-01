import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseClientComponent } from './choose-client.component';

describe('ChooseClientComponent', () => {
  let component: ChooseClientComponent;
  let fixture: ComponentFixture<ChooseClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
