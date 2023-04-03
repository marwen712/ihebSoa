import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAnimationComponent } from './section-animation.component';

describe('SectionAnimationComponent', () => {
  let component: SectionAnimationComponent;
  let fixture: ComponentFixture<SectionAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
