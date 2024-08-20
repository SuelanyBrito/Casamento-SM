import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptImagePadrinhosComponent } from './opt-image-padrinhos.component';

describe('OptImagePadrinhosComponent', () => {
  let component: OptImagePadrinhosComponent;
  let fixture: ComponentFixture<OptImagePadrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptImagePadrinhosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptImagePadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
