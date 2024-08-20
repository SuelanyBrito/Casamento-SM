import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCasamentoComponent } from './lista-casamento.component';

describe('ListaCasamentoComponent', () => {
  let component: ListaCasamentoComponent;
  let fixture: ComponentFixture<ListaCasamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCasamentoComponent]
    });
    fixture = TestBed.createComponent(ListaCasamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
