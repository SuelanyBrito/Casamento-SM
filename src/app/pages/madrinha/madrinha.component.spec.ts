import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrinhaComponent } from './madrinha.component';

describe('MadrinhaComponent', () => {
  let component: MadrinhaComponent;
  let fixture: ComponentFixture<MadrinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadrinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MadrinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
