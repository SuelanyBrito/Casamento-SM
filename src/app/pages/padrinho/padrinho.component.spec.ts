import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrinhoComponent } from './padrinho.component';

describe('HomeComponent', () => {
  let component: PadrinhoComponent;
  let fixture: ComponentFixture<PadrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
