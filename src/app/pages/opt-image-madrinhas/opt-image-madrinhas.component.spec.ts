import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptImageMadrinhasComponent } from './opt-image-madrinhas.component';

describe('OptImageMadrinhasComponent', () => {
  let component: OptImageMadrinhasComponent;
  let fixture: ComponentFixture<OptImageMadrinhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptImageMadrinhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptImageMadrinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
