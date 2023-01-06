import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumComponent } from './prime-num.component';

describe('PrimeNumComponent', () => {
  let component: PrimeNumComponent;
  let fixture: ComponentFixture<PrimeNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
